- Start Date: 2019-01-29
- Target Major Version: 
- Reference Issues: NameX needs to know that a NR is consumed or expired (consumption date and corp_num of entity that was created)
- Entity Issue: 
- Implementation PR: 


# Summary

consumption date and corp_num of entity were not copied from NRO to Namex. Figured out where they missed and fix them in codes and SQL 

# Basic example

 
# Motivation
We need to copy consumption date and corp_num of entity from NRO to Namex database, so these data can be used by front-end aspect in the future.

# Detailed design
1.    Add ‘CONSUME’ and ‘EXPIR’ to namex_pkb.sql.
      I am not sure if you need to have additional row_action value for the row_transaction_type_cd in (’CONSUME’, ‘EXPIR’). If so, we    need to   update codes in another section of namex_pkb.sql
2.    Add fields to \namex\nro-legacy\sql\object\names\namex\view\names_vw.sql
3.    Add fields (consumption_date, corp_num) to get_names(session, request_id) in \namex\api\namex\services\nro\request_utils.py
4.    Add fields (consumption_date, corp_num) to add_names(nr, nr_names) in \namex\api\namex\services\nro\request_utils.py
5.    Add field (corp_num) to model \namex\api\namex\models\name.py
6.    Add ‘CONSUME’ and ‘EXPIR’ type to \namex\api\tests\python\nro_services\test_update_request.py and rerun test
7.    Add fields to \namex\api\tests\python\models\test_names.py and rerun test
8.    Add fields to \namex\api\tests\python\nro_services\test_nro_request_utils.py and rerun test
9.    Add fields to \namex\api\tests\postman\xxxx-postman_collection.json and rerun test.


# Drawbacks


# Alternatives


# Adoption strategy

This implemenmtation will break some old test cases so we need to update related test cases as well. 

# Unresolved questions

# Thanks
