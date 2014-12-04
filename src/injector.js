var spur = require("spur-ioc")

module.exports = function(){
  var ioc = spur.create("expressModule");

  ioc.registerLibraries({
    "express"         : "express",
    "methodOverride"  : "method-override",
    "cookieParser"    : "cookie-parser",
    "bodyParser"      : "body-parser",
    "path"            : "path"
  });

  ioc.registerDependencies({
    "console"     :console,
    "nodeProcess" :process
  });

  ioc.registerFolders(__dirname, [
    "runtime", "domain"
  ]);

  return ioc;

}




