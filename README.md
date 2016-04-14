# launch-chrome-app
A cross platform module for installing/launching for chrome apps in node.

See https://github.com/No9/clowder/blob/master/postinstall/postinstall.js and 
https://github.com/No9/clowder/blob/master/package.json#L13 for an example of using this to enable Chrome Extension installs from NPM.

Part of [chromiumify](https://github.com/chromiumify "chromiumify")

![info](https://nodei.co/npm/launch-chrome-app.png)
## install

```sh
$ npm install launch-chrome-app
```

## usage 

```
var cpl = require('launch-chrome-app')

cpl('path_to_app', function(err) { 
   if (err) {
     console.log(err)
   }
   // something to run after app is launched
})
```

## test

```sh
$ npm test
```
