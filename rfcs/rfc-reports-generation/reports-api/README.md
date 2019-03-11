

# Reports API

API for generating PDF reports

## Technology Stack Used
* Python, Flask, Flask-restplus, Marshmallow, Jinja2, weasypoint
* Pytest

## Deployment (Local Development)

* Install all the dependencies using
```python
pip install -r requirements/dev.txt
```

* Run the application
```python
python wsgi.py
```
This would start the application at default port (5000). Navigate to http://localhost:5000 to see the swagger documentation

* Test the application
```python
pytest
```

* Code Coverage
```
pytest --cov=main
```


## Deployment (OpenShift)

See (openshift/Readme.md)

