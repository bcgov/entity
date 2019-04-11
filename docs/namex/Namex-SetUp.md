# Setting Up the Namex Application to Run Locally
| Component        | Description           |Installation Help|Repo Path|
| :-------------   | :---------------------|:----------------|:--------|
| Namex UI         | Namex UI (web caddy)  | https://github.com/bcgov/name-examination/blob/master/docs/DeveloperSetupAndRun.md| https://github.com/bcgov/name-examination|              |         |
| Namex-api: Flask/Python 3.6,Marshmallow, Alembic|Namex API|https://github.com/bcgov/namex/blob/master/docs/Backend-namex_api_setup.md|https://github.com/bcgov/namex/tree/master/api|
| Namex Postgres  PGAdmin v10/11 DB|namex postgres database|Install locally or port-forward https://github.com/bcgov/namex/blob/master/namex-db/PortForwardingaDatabase.md|https://github.com/bcgov/namex/tree/master/namex-db|
| Colin-api:Flask/Python 3.6|Returns a corporate json file used by the front-end to display a  summary for the selected corporation in the conflict list. |Port-forward when no changes are required.|https://github.com/bcgov/namex/tree/master/colin-api|
| Solr: 6.6.3|Used to maintain Corporate conflicts,  Name conflicts, trademarks and name history indexes used to compare against the current Name Request.|Install locally or port-forward | https://github.com/bcgov/namex/blob/master/solr/docs/solr_standalone_installation.md |https://github.com/bcgov/namex/tree/master/solr|




