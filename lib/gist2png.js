var args, page, system, url;

page = require('webpage').create();

system = require('system');

args = system.args;

console.log(args);

url = args[1];

page.open(url, function(status) {
  if (status === 'success') {
    page.clipRect = page.evaluate(function(s) {
      var div;
      div = document.getElementsByClassName(s)[0];
      return div.getBoundingClientRect();
    }, 'file-data');
    page.render(args[2]);
    return phantom.exit();
  }
});
