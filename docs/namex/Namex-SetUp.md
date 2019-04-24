# Setting Up the Namex Application to Run Locally
| Component        | Description           |Installation Help|Repo Path|
| :-------------   | :---------------------|:----------------|:--------|
| Namex UI         | Namex UI (web caddy)  | https://github.com/bcgov/name-examination/blob/master/docs/DeveloperSetupAndRun.md| https://github.com/bcgov/name-examination|              |         |
| Namex api|Flask/Python 3.6,Marshmallow, Alembic|https://github.com/bcgov/namex/blob/master/docs/Backend-namex_api_setup.md|https://github.com/bcgov/namex/tree/master/api|
| Namex Postgres DB PGAdmin v10/11 DB|namex postgres database|Install locally or port-forward https://github.com/bcgov/namex/blob/master/namex-db/PortForwardingaDatabase.md|https://github.com/bcgov/namex/tree/master/namex-db|
| Colin-api: Flask/Python 3.6|Returns a corporate json file to display a summary for the selected corporate conflict. |Port-forward when no changes are required. https://github.com/bcgov/entity/blob/master/docs/namex/Colin-PortForwarding.md|https://github.com/bcgov/namex/tree/master/colin-api|
| Solr: 6.6.3|Provides documents for the examination process and decision.|Install locally or port-forward | https://github.com/bcgov/namex/blob/master/solr/docs/solr_standalone_customization.md , https://github.com/bcgov/namex/blob/master/solr/docs/operations_manual.md |https://github.com/bcgov/namex/tree/master/solr|
| BC_REGISTRIES_NAMES|Postgres Foreign Data Wrapper to oracle view that updates the solr indexes.|Port-forward to the foreign data wrapper required to load local solr install with data.|https://github.com/bcgov/namex/blob/master/solr/docs/operations_manual.md|
| BC_REGISTRIES|Postgres Foreign Data Wrapper to oracle view that updates the solr indexes.|Port-forward to the foreign data wrapper.|https://github.com/bcgov/namex/blob/master/solr/docs/operations_manual.md |
| solr DB: Postgres 10|Solr postgres database required for solr synonyms|See solr instructions to setup port-forwarding| |

# Workflow and Process
1.	Use Pycharms for your IDE.
2.	Obtain authorization in the namex dev namespace in Openshift from the product owner.
3.	Obtain an .env file from the product owner to install names-examination.
4.	Obtain .env file from the product owner to install namex-api  when the scope of work includes the namex-api.
5.	Obtain .env file from the product owner to install the colin-api when the scope of work includes the colin-api.
6.	Obtain postgres data population script from the product owner.
7.	Use the entity zenHub board to get and report status of the assigned work.
8.	Follow the git flow for management of repos, inclusion of tests, pull request and code review set out here: https://github.com/bcgov/namex/blob/master/docs/developer.md
9.	Rules for database fixtures: https://github.com/bcgov/namex/blob/master/docs/database.md  when the scope of work includes data model changes.
10.	Follow the “Code with Us”,https://github.com/bcgov/entity/blob/master/docs/codewithus/CodewithUsProcess.png  workflow, to complete releases/phases of a "Code with Us" opportunity.
	







