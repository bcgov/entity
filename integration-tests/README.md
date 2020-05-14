## Entities Integration Tests
As of now these include our integration tests for the incorporation flow. Other flows can be tested through this by incorporating the data-reset-tool and adding more postman collection runs at specific points in the integration pipeline.

### Incorporation tests

#### Lear -> Colin
1. posts the incorporation via postman to the legal-api
2. checks the incorporation was successful by verifying the data in the lear-db
3. runs the colin-updater to send the incorporation application across to colin
4. checks the business was successfully incorporated by verifying the data in colin

#### Colin -> Lear
1. populates colin with the incorporation through the colin-api
2. checks the incorporation was successful 
3. runs the legal updater to send the incorporation filing across to lear
4. checks the business was successfully created in lear

### Adding More Integration Tests
To add more to this pipeline:
1. add your pm collections in the postman folder (edit the integration pm pipeline as necessary)
2. add the setup for your tests in the correct setup stage for you (i.e. run a pm collection over the data-reset-tool)
3. add your verification in the correct verify stage for you (i.e. run a pm collection)

### Updating openshift objects
Steps for updating / adding needed openshift objects for the tests (i.e. pipelines, secrets, etc.)
1. Edit or create the template json file (see k8s/templates for existing ones)
2. Edit or create the corresponding param file (do not push the real param values into github)
3. Log into the oc clientt and run `oc process -f k8s/templates/<filename>.json --param-file=k8s/<filename>.param | oc <create/replace> -f -`
