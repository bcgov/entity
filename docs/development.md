# Development Environment

This document describes the agreed-upon environment for development. For ease of maintenance, it does not aim to be a
click by click description, and it assumes familiarity with Windows, Linux, and search engines.

The standard environment is:
1. Windows
2. Windows Subsystem for Linux 2 (WSL)
3. Ubuntu latest in WSL
4. Visual Studio Code (VS Code)

Other configurations are not prohibited, but keep in mind that when problems arise there will be less support from the
local community.

## Installation

### 1. Windows

Should be installed for you - easy!

### 2. Windows Subsystem for Linux 2 (WSL)

Follow Microsoft's instructions.

### 3. Ubuntu latest in WSL

#### Ubuntu

- Install Ubuntu latest and open a shell.
- `sudo apt update`
- `sudo apt upgrade`
- `sudo apt install build-essential` to install a compiler needed for Python compilation.
- `sudo apt install libbz2-dev libffi-dev libreadline-dev libsqlite3-dev libssl-dev zlib1g-dev` to go with the above.

#### Python

- `curl https://pyenv.run | bash`, then follow the instructions to add it to your load path.
- `pyenv install 3.7.6`
- `pyenv global 3.7.6` to set it as the default version.
- `sudo apt install python3-pip`
- `pip install --upgrade pip`
- `sudo apt install python3.7-venv`

#### Node.js for npm

- `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.2/install.sh | bash`
- `nvm install node`

#### Git

- `git config --global user.name "First Last"`
- `git config --global user.email "First.Last@gov.bc.ca"`
- `git config --global credential.helper
"/mnt/c/Program\ Files/Git/mingw64/libexec/git-core/git-credential-manager.exe"`

#### OpenShift

- Download the oc client tools matching the current version of OpenShift, and put the *oc* binary in your *~/bin*
directory.

### 4. Visual Studio Code (VS Code)

- Install Visual Studio code.
- Install the *Remote - WSL* extension.
- Install the *ESLint* extension.
- Install the *Jest* extension.
- Install the *Python* extension.
- Install the *Vetur* extension for working with Vue.js.
- Go to File > Preferences > Settings and set the following:
  - editor.formatOnSave: `true`
  - editor.rulers: click the *Edit in settings.json* link and set the value `"editor.rulers": [ 120 ]`
  - files.insertFinalNewline: `true`
  - python.linting.flake8Enabled: `true`
  - terminal.integrated.scrollback: you'll probably want more than 1000 lines of history
  - terminal.integrated.shell.windows: click the *Edit in settings.json* link and set the value
    `"terminal.integrated.shell.windows": "C:\\WINDOWS\\System32\\wsl.exe"`
