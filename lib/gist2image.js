var args, format, page, system, url;

page = require('webpage').create();

system = require('system');

args = system.args;

url = args[1];

format = args[2];

page.open(url, function(status) {
  if (status === 'success') {
    page.clipRect = page.evaluate(function(s) {
      var div;
      div = document.getElementsByClassName(s)[0];
      return div.getBoundingClientRect();
    }, 'file-data');
    page.render("temp", {
      format: format
    });
    return phantom.exit(0);
  } else {
    return phantom.exit(1);
  }
});
