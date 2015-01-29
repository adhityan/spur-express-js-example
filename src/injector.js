var spur = require("spur-ioc")

module.exports = function(){
  var ioc = spur.create("expressModule");

  ioc.registerDependencies({
    "express"         : require("express"),
    "methodOverride"  : require("method-override"),
    "cookieParser"    : require("cookie-parser"),
    "bodyParser"      : require("body-parser"),
    "path"            : require("path"),
    "console"         : console,
    "nodeProcess"     : process
  });

  ioc.registerFolders(__dirname, [
    "runtime", "domain"
  ]);

  return ioc;

}




