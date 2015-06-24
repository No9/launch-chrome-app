var cpl = require('../')
var path = require('path')

cpl(path.join(__dirname + '/chrome-app'), function(err) { 
   if (err) {
     console.log(err)
   }
   console.log('success')
   // something to run after app is launched
})