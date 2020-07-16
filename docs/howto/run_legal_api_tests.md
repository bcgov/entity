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
9. you can check what's installed with `python3 -m pip freeze`

### Option 2.1 - Run the Tests from the Command Line
(coming soon)

### Option 2.2 - Run the Tests from VS Code
(coming soon)
