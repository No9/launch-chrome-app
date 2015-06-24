var cp = require('child_process')
var os = require('os')

module.exports = function(pathtoapp, callback) {
  var CHROME = process.env.CHROME
  var launchpath = ' --load-and-launch-app=' + pathtoapp
  switch (os.platform()) {
    case 'win32' :
      if (process.arch === 'x64') {
        CHROME = process.env.CHROME || '\"C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe\"' + launchpath
      } else {
        CHROME = process.env.CHROME || '\"C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe\"' + launchpath
      }
      break
    case 'darwin' :
      CHROME = process.env.CHROME || '/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome' + launchpath
      break
    case 'linux' :
      CHROME = process.env.CHROME || '/opt/google/chrome/chrome' + launchpath + ' > /dev/null 2>&1 &'
      break
    default :
      callback(new Error('Chrome not found. Please set the CHROME environment variable'))
      break
  }
  cp.exec(CHROME, null, callback)
}
  