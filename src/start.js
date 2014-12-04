var injector = require("./injector");


injector().inject(function(WebServer, UncaughtHandler){
  WebServer.start()
  UncaughtHandler.listen()
});
