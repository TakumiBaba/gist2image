page = require('webpage').create()
system = require 'system'
args = system.args

console.log args

url = args[1]

page.open url, (status) ->
  if status is 'success'
    page.clipRect = page.evaluate (s) ->
      div = document.getElementsByClassName(s)[0]
      return div.getBoundingClientRect()
    , 'file-data'
    page.render args[2]
    phantom.exit()
