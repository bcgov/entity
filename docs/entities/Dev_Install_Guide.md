Full Install of BC-ROS Development Environment - Windows version
================================================================

BASIC WINDOWS INSTALL
---------------------
#### 1. fresh Windows install (Windows 10 Pro build 2004 or later)
  - 8+ GB RAM
  - 60+ GB disk
  - if using a VM, virtualize Intel VT-x/EPT or AMD-V/RI (also needed for Docker later)
  - set power plan to Performance
  - un-pin default apps
  - show all taskbar icons
  - show This PC on desktop
  - uninstall unwanted Windows apps (Cortana, OneDrive, Teams, Skype, etc)
#### 2. install Avira anti-virus or equivalent
#### 3. install Chrome + extensions
  - Avira Browser Safety
  - Vue DevTools
  - Auto Tab Discard
  - LastPass
  - set Chrome as default browser
#### 4. install Notepad++ (optional)
#### 5. install Acrobat Reader
#### 6. install Postman (for API testing)
#### 7. install pgAdmin (for db access)
#### 8. install WinMerge (optional)
#### 9. install PuTTY Authentication Agent (Pagent) to use SSH for GH (optional)
  - copy id_rsa* + *.ppk to ~/.ssh
  - add key
  - add Pagent shortcut to Startup folder
#### 12. install Office 365 (optional)
  - configure Outlook
#### 13. install Firefox (optional)
#### 14. install BC Sans fonts (Google for zip file, install the TTFs)
#### 15. install Teams (from Microsoft Store)
#### 16. install vim or nvim (and know how to exit vim) 

QUICK DEV ENVIRONMENT SETUP FOR FRONTEND DEVELOPMENT
----------------------------------------------------

- Fork all the 3 frontend UIs: Filings UI, Create UI, and Edit UI. 

- Clone the 3 UIs on your machine. For reference: https://github.com/bcgov/entity/blob/master/docs/setup-forking-workflow.md (more information in NODE VERSION MANAGER section) 

- Download Node Version 20.x.x 

- Install Node and go to CMD and type: node -v. Make sure the correct version required is installed 

DEV ENVIRONMENT FOR BACK END DEVELOPMENT
----------------------------------------
For Backend installation general information: https://community.inkdrop.app/note/a27b7a79c8cdf7db0ab19be10b4fc2e8/note:864Q7Xrvb 
  - on this page you will find Lear setup info for MAIN and LEGAL-NAME branches in lear

#### 1. install Git for Windows 2.x.x (optional if you do everything in WSL)
 - use all default settings except:
    - select "Override the default branch name... main"
    - select "Use Windows' default console window"
  - NB: do not use Git Bash shell for development! use WSL2 shell instead

#### 2. install Windows Subsystem for Linux 2 (WSL2)
  - open PowerShell as Administrator
  - enter `dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart`
  - enter `dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart`
  - reboot
  - open PowerShell as Administrator
  - enter `wsl --set-default-version 2`

#### 3. install Ubuntu latest from Store app
  - https://www.microsoft.com/en-us/p/ubuntu-20044-lts/9mttcl66cpxj
  - pin to Taskbar

#### 4. start Ubuntu shell (from Start or Cortana search)
  - first time takes a few minutes to unpack everything
  - enter a username and password that you'll remember

#### 5. download package information
  - enter `sudo apt update`

#### 6. install latest package versions
  - enter `sudo apt upgrade`

#### 7. install compiler for Python, etc for BE work
  - enter `sudo apt install build-essential`
  - enter `sudo apt install libbz2-dev libffi-dev libreadline-dev libsqlite3-dev libssl-dev zlib1g-dev liblzma-dev tk-dev`

#### 8. install Python + pip for BE work
  - enter `curl https://pyenv.run | bash`
  - follow instructions to update .bashrc
  - enter `source .bashrc`
  - enter `pyenv install 3.8.17`
  - enter `pyenv global 3.8.17`
  - enter `sudo apt install python3-pip`
  - enter `pip install --upgrade pip`
  - enter `sudo apt install python3.8-venv`

#### 9. install Node Version Manager + Node.js (latest version) (optional?)
  - enter `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash`
  - enter `source .bashrc`
  - enter `nvm install node`

#### 10. configure git
  - enter `git config --global user.name "First Last"`
  - enter `git config --global user.email "First.Last@gov.bc.ca"`
  - enter `git config --global credential.helper "/mnt/c/Program\ Files/Git/mingw64/libexec/git-core/git-credential-manager.exe"`
  - enter `git config --global alias.co checkout`
  - enter `git config --global alias.br branch`
  - enter `git config --global alias.ci commit`
  - enter `git config --global alias.st status`
  - enter `git config --global core.editor vim`
  - install ssh files to ~/.ssh (instructions depend on tools used)

#### 11. install Openshift Console (oc) app
  - see https://docs.openshift.com/container-platform/3.11/cli_reference/get_started_cli.html
  - https://github.com/openshift/origin/releases
  - fetch the gz file below and copy it to your Ubuntu home folder
    - NB: Ubuntu folder is at \\wsl$
  - enter `mkdir ~/bin`
  - enter `tar -zxvf openshift-origin-client-tools-v3.11.0-0cbc58b-linux-64bit.tar.gz`
  - enter `cp openshift-origin-client-tools-v3.11.0-0cbc58b-linux-64bit/oc ~/bin`
  - enter `rm -rf openshift-origin-client-tools-v3.11.0-0cbc58b-linux-64bit*`


**ALSO NEED TO LOGIN TO NPM FOR PUBLISHING PACKAGES: `npm login`**

MORE THINGS FOR UI DEVELOPMENT
------------------------------
install global packages and local dependencies
```
sudo apt install npm
sudo npm i -g trash-cli  // use 'trash' instead of 'rm'
npm install  // do this in each repo home folder
npm i -g lerna
```

MORE DEV TOOLS
--------------
#### Install VS Code (or your favourite ide) + extensions
  - GitHub
  - Remote - WSL
  - Python
  - Microsoft Python Language Server
  - configure Python interpreter
  - pytest
  - configure Python Test Explorer
  - Vetur
  - Jest Runner
  - Debugger for Chrome
  - update launch.json
  - configure settings
    - see existing instructions at https://github.com/bcgov/entity/blob/master/docs/development.md

install Docker
  - see existing instructions at https://github.com/bcgov/entity/blob/master/docs/development.md
  - enable WSL 2 Windows Features
  - run Docker
  - in Settings -> General, enable "Start Docker Desktop when you log in"
  - in Settings -> General, enable "Expose daemon on tcp://localhost:2375 without TLS"
  - in Settings -> General, disable "Send usage statistics"


GITHUB CLI (in WSL2)
----------
sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-key <use your own GH key here>
sudo apt-add-repository https://cli.github.com/packages
sudo apt update
sudo apt install gh


CLONE REPOS (in WSL2)
-----------
cd ~/repos
`gh repo clone bcgov/bcregistry`
`gh repo clone bcgov/bcrs-shared-components` (for UI work)
`gh repo clone bcgov/business-filings-ui`
`gh repo clone bcgov/business-create-ui`
`gh repo clone bcgov/business-edit-ui`
`gh repo clone bcgov/business-schemas`
`gh repo clone bcgov/entity` (optional)
`gh repo clone bcgov/lear` (for BE work)
`gh repo clone bcgov/namerequest`
`gh repo clone bcgov/namex`
`gh repo clone bcgov/sbc-auth`
`gh repo clone bcgov/sbc-common-components`

- you may need to ask for dev access to these repos and the proper env files.
- remember to fork these repos under your own GitHub account, more info can be found here: https://github.com/bcgov/entity/blob/main/docs/setup-forking-workflow.md

CONFIGURE GIT REMOTES (in WSL2)
---------------------
cd ~/repos/namerequest
`vi .git/config` (vi, vim, or nvim)

change remote "origin" to "bcgov"
add remote "origin" for own repo


Node Version Manager
====================
- For the 3 business UIs you will need node version 20.10.0 (or simply have the ability to switch versions)

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash

  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100 15037  100 15037    0     0  92820      0 --:--:-- --:--:-- --:--:-- 92820
=> Downloading nvm from git to '/home/severin/.nvm'
=> Cloning into '/home/severin/.nvm'...
remote: Enumerating objects: 354, done.
remote: Counting objects: 100% (354/354), done.
remote: Compressing objects: 100% (302/302), done.
remote: Total 354 (delta 40), reused 155 (delta 27), pack-reused 0
Receiving objects: 100% (354/354), 206.98 KiB | 2.46 MiB/s, done.
Resolving deltas: 100% (40/40), done.
* (HEAD detached at FETCH_HEAD)
  master
=> Compressing and cleaning up git repository

=> nvm source string already in /home/severin/.bashrc
=> bash_completion source string already in /home/severin/.bashrc
=> You currently have modules installed globally with `npm`. These will no
=> longer be linked to the active version of Node when you install a new node
=> with `nvm`; and they may (depending on how you construct your `$PATH`)
=> override the binaries of modules installed with `nvm`:

/usr/local/lib
├── jshint@2.13.0
├── lerna@4.0.0
├── tshint@0.0.2
└── typescript@4.3.5
- If you wish to uninstall them at a later point (or re-install them under your
`nvm` Nodes), you can remove them from the system Node as follows:

     - nvm use system
     - npm uninstall -g a_module

- Close and reopen your terminal to start using nvm

GENERAL NOTES
-------------

- There may be other setup docs floating around, best to double check with your team (or programming buddy) which is the most up-to-date and relevant.
- Document your setup process and any troubleshooting steps you encounter in this file. This can help colleagues or your future self.
- Incorporate version control best practices: commit often with meaningful messages, use branches to manage features and fixes, and understand how to fetch and rebase safely. 
