module.exports = function(express, MyLogger, config,path ,Greeter, bodyParser, cookieParser, methodOverride){

  function WebServer(){

  };

  WebServer.prototype = {
    start:function(next){
      next = next || function(){}
      this.app = app = express();
      app.use(bodyParser.json());
      app.use(methodOverride());
      app.use(bodyParser.urlencoded({ extended: false }));
      app.use(cookieParser());
      app.set('views', path.join(__dirname, '../views'));
      app.set('view engine', 'jade');


      app.get("/", function(req, res){
        res.send(Greeter.greet());
      })

      app.get("/jade-example", function(req, res){
        res.render("index", {
          title:"My WebSite",
          message:Greeter.greet()
        });
      })

      this.server = app.listen(config.Port, function(){
        MyLogger.log("express started on port " + config.Port);
        next()
      })

    },

    stop:function(next){
      next = next || function(){}
      if(this.server && this.server.close){
        this.server.close(next)
      } else {
        next()
      }
    }

  };

  return new WebServer()

};
