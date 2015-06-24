# launch-chrome-app
A cross platform launcher for chrome apps

Part of [chromiumify](https://github.com/chromiumify "chromiumify")

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