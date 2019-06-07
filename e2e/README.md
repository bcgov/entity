# Entity/Relationships end-to-end browser testing

This is the e2e pipeline for testing realtionships and entity code (currently coops). It runs in the LEAR tools namespace.
This pipeline uses the base BDDStack image + node with the specs being written/run using Nightwatch.js

## Steps completed to set this up in OpenShift

### 1 - Create base image

Create the imageStream and the build config for the semi-custom BDDStack image.
This will place the image in our namespace's image registry and will allow us to rebuild the image as needed to update our dependencies.
Templates are in e2e/templates

1. Run the following oc command: oc process -f bddstack.bc.yaml | oc create -n gl2uos-tools -f -
2. Check the Builds > Builds menu in the console. The image build should start automatically.
3. After around 45 minutes, visit the Build > Images menu to see that the image was created and the latest tag is present. You should be able to click into it and see its layers/configs, et c.

### 2 - Create pipeline

Review the param file to see which settings will be configured for the new pipeline.

1. Run the following oc command: oc process -f e2e-pipeline.json --param-file=e2e.param | oc create -n gl2uos-tools -f -
2. The pipeline should show in Builds > Pipelines. You will need the repo set up prior to running it though.

### 3 - Setup Nightwatch and e2e folder

The base image installs the Chrome and Firefox browser binaries as well as Node/NPM. The remaining dependencies are managed via NPM and the package.json.
These NPM dependencies are installed in the pipeline via the Jenkinsfile. To start a new project you just need the package.json and nightwatch.json
Add in globals.js, .env, and the specs/custom-commands/page-object/reports folders as needed.

note that running the tests with empty page-object and custom-commands folders will trigger an error.

Once all this is in place, run the pipeline and the npm run test command in the Jenkinsfile will run the tests!

## License

    Copyright 2018 Province of British Columbia

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
