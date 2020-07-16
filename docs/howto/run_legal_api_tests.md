# How to Run the Legal API Unit Tests

## Option 1 - Github Actions
1. commit the new/updated files to a branch
2. create a pull request (may be Draft) for the files
3. scroll to the bottom of the PR and observe the checks
  - if "All checks have passed" is displayed, click "Show all checks" to see the GHA checks
  - click "Details" to see the CI job details
  - expand the "Test with pytest" section to see the test output
  
## Option 2 - Run the Tests Locally

**Pre-requisites:**
1. you have installed Git
2. you have installed Python 3.x (eg, from Microsoft Store)
3. you have installed VS Code
4. you have installed the Python extension
5. you have selected the Python interpreter
6. you have install pytest
7. from a Git BASH shell, if you enter `python` and get "Permission denied" then enter the following (and possibly add these to ~/.bashrc):
  ```
  alias python='winpty python.exe'
  alias python3='winpty python3.exe'
  ```
 
8. you have installed all dependencies (ie, requirements), eg:
  ```
  cd /c/Repos/lear/legal-api
  python3 -m pip install pytest
  python3 -m pip install -r requirements.txt
  python3 -m pip install -r requirements/dev.txt
  python3 -m pip install -r requirements/prod.txt
  python3 -m pip install -r requirements/bcregistry-libraries.txt
  ```
9. (you can check what's installed with `python3 -m pip freeze`)
10. you have a connection to a database! (eg, dev); fill in the proper values:
  ```
  oc login https://console.pathfinder.gov.bc.ca:8443 --token=...
  oc port-forward postgresql-dev-7-df4cr 5433:5432
  ```

### Option 2.1 - Run the Tests from the Command Line
```
cd /c/Repos/lear/legal-api
python3 -m pip install .  # sometimes needed to compile some files
python3 -m pytest tests/unit/api
```

### Option 2.2 - Run the Tests from VS Code
1. start VS Code
2. open the "cd /c/Repos/lear" folder (or previously saved Lear workspace)
3. open Run panel
4. click gear icon to open "launch.json"
5. you need a configuration similar to this:
```
{
    "name": "Python: Pytest",
    "type": "python",
    "request": "launch",
    "module":"pytest",
    "args": ["c:/Repos/lear/legal-api/tests/unit/services/test_document_meta.py"],
    "cwd": "c:/Repos/lear/legal-api",
    "envFile": "/c/Repos/lear/legal-api/.env",
    "justMyCode": false
},
```
6. in the RUN bar, select configuration "Python: Pytest"
7. click the green run icon
8. if needed, select terminal "powershell"
9. open Explorer panel
10. open "lear/legal-api/tests/unit/" folder
11. open subfolder that contains your test file
12. you can right-click on the file and select "Debug All Tests" or "Run All Tests"
13. you can set break-points in your test file
14. in the Run Panel, you can watch variables, see the call stack, etc.
