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

- Install Ubuntu latest.
- `sudo apt update`
- `sudo apt upgrade`
- Ubuntu 19.10 comes with Python 3.6, so `sudo apt install python3.7 python3.7-dev`
- Run `python3 -V` and if it's still 3.6.x then update the link to go to 3.7.
- `sudo apt install python3-pip`
- `sudo apt install python3.7-venv`
- Download the oc client tools matching the current version of OpenShift, and put the *oc* binary in your *~/bin*
directory.

### 4. Visual Studio Code (VS Code)

- Install Visual Studio code.
- Install the *Python* extension.
- Go to File > Preferences > Settings and set the following:
  - editor.formatOnSave: `true`
  - editor.rulers: click the *Edit in settings.json* link and set the value `"editor.rulers": [ 120 ]`
  - python.linting.flake8Enabled: `true`
  - terminal.integrated.shell.windows: click the *Edit in settings.json* link and set the value
    `"terminal.integrated.shell.windows": "C:\\WINDOWS\\System32\\wsl.exe"`
