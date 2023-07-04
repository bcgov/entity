- Start Date: (fill me in with today's date, YYYY-MM-DD)
- Target Major Version: (EPIC or User Story TAG|Link)
- Reference Issues: (fill in existing related issues, if any)
- Entity Issue: (leave this empty)
- Implementation PR: (leave this empty)

# Summary

SQLContinuum's main developer has stopped maintianing the package, and although there are numerous committers, the latest breaking changes to Flask and SQLAlchemy have effectively halted development on it.
BCRegistry does not use many features of SQLContinuum, other than to create a _version_ table, and use the SQLContinuum Transaction table. The SQLContinuum version methods are not used.

# Basic example

models/db.py to wrap versioning into the Flask-SQLAlchemy managed session
```python
from flask_sqlalchemy import SQLAlchemy
from .versioned_history import versioned_session
db = SQLAlchemy()  # pylint: disable=invalid-name
versioned_session(db.session)
```

models/submission.py  combining `Versioned` and `db.Model` to make a versioned class
```python
from .db import db
from .versioned_history import Versioned

class Submission(Versioned, db.Model):
    """Stores a submission of JSON data."""
    __tablename__ = "submission"
    id = db.Column(db.Integer, primary_key=True)
```

This adds a `version` column to the _base_ table, and creates a versioned table using `__tablename__`\_history which is a copy of the _base_ table and adds a _changed_ column as well.

There are no special helper methods to access the history.


# Motivation

To allow services using SQLContinuum to migrate to the newer versions of Python, Flask and SQLAlchemy.

# Detailed design

### Entities Specific
SQLContinuum uses a Transaction table, and stamps the txn_id into every versioned record altered in the transactions. To accomodate that design the txn_id was added to the _Filings_ table.
An equivalent would be to add the filing_id to every _base_ table and stamp any changes made by that filing.

```python
from .db import db
from .versioned_history import Versioned

class Filing(Versioned, db.Model):
    """Stores a submission of JSON data."""
    __tablename__ = 'filings'
    id = db.Column(db.Integer, primary_key=True)
```

```python
from .db import db
from .versioned_history import Versioned

class Business(Versioned, db.Model):
    """Stores a submission of JSON data."""
    __tablename__ = 'businesses'
    id = db.Column(db.Integer, primary_key=True)
    identifier = db.Column('identifier',
                           db.String(10),
                           index=True)
    founding_date = db.Column('founding_date',
                              db.DateTime(timezone=True),
                              default=datetime.utcnow)

    # filing_id that made the latest change
    change_filing_id = db.Column('change_filing_id',
                                 db.Integer,
                                 db.ForeignKey('filings.id'))
    
```


# Drawbacks

This add the filing_id surrogate key across all tables, but it is equivalent in style to SQLContinuum and it's transaction tracking.

This will affect the historical data loading project, but it should not be a massive change and if done sooner than later can take advantage of the pause in the historical data loading project.

# Alternatives

We could take over SQLContinuum and upgrade it, but it relies on some very deep SQLAlchemy internals, and none of our services use any of the versioning methods.  This would be a more expensive approach than changing to the simpler history table that is part of the SQLAlchemy distribution.

We could adopt one of the other versioning systems, but those could fall into disrepair as well.

We could implement versioning using triggers in the database, but this is a little more complex to carry across the filing_id and uses different coding and debugging tools than we commonly use.

# Adoption strategy

Entities is a more involved upgrade because the reporting environment leverages the historical data to create outputs that are valid for any point in time. But as entities has decent model and reporting test and coverage, and the team is larger, so it can support this change quicker.

# Unresolved questions

None at this time.

# Thanks

This template is heavily based on the Vue, Golang, React, and other RFC templates. Thanks to those groups for allowing us to stand on their shoulders.
