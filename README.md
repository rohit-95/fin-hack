# fin-hack
Financial Hackathon - NSIT

Backend to be found at https://github.com/codemerlin19/fin-hack-backend

## Installation instructions to follow (for Ubuntu 14.04 LTS)
  Should work on other versions too, but mongodb is not officially supported on 15.x for now and requires some work arounds.

## Requirements

### nodejs
  Installation
  
    curl -sL https://deb.nodesource.com/setup_5.x | sudo -E bash -
    sudo apt-get install -y nodejs
  
  After Installation
  
    sudo apt-get install nodejs-legacy
    
### Android SDK:
  Download the SDK and install the following items or later :
  
  Android SDK Tools	24.4.1
  
  Android SDK Platform-tools	23.1
  
  Android SDK Build-tools	23.0.1
  
  Android Support Repository	25
  
  Android Support Library	23.1.1
  
  Google Play Services	29
  
  Google Repository	24
  
### Install Cordova
    sudo npm install -g cordova
    
  #### Change Permissions for cordova
    sudo chown -R your-user /usr/local/lib/node_modules/cordova
    
##Build
  
    git clone https://github.com/rohit-95/fin-hack.git
  
    cd fin-hack
    
  Change var _apiBaseUrl in  fin-hack/www/js/common.js to the ip and port where backend server is running
    
    cordova build android
    
  if any problem due to platform then add and remove platform by
      
    cordova platform rm android
      
    cordova platform add android
