# charma
Donate to charities and earn good karma


npm install --global expo-cli

npm install

## if expo: command not found (mac)

export PATH=$PATH:~/.npm-global/bin

source ~/.bash_profile -y

## clear expo cache 

expo r -c


## clear watchman cache, remove installed dependencies, clear metro cache, install dependencies

watchman watch-del-all && rm package-lock.json && rm -rf node_modules && rm -rf $TMPDIR/metro-* && rm -rf $TMPDIR/haste-map-* && npm install

## If still not working

replace @babel with this file https://drive.google.com/file/d/1-z_4H_z4x075unZqZD41WYUwY_hsrKox/view
