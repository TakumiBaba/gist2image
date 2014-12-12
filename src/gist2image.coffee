page = require('webpage').create()
system = require 'system'
args = system.args

url = args[1]
format = args[2]

page.open url, (status) ->
  if status is 'success'
    page.clipRect = page.evaluate (s) ->
      div = document.getElementsByClassName(s)[0]
      return div.getBoundingClientRect()
    , 'file-data'
    page.render "temp", {format: format}
    phantom.exit 0
  else
    phantom.exit 1
