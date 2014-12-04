var superagent = require("superagent");

describe("WebServer", function(){

  beforeEach(function(){
    var _this = this;
    injector().inject(function(WebServer, MyLogger, config){
      _this.WebServer = WebServer
      _this.MyLogger = MyLogger
      _this.config = config
      _this.config.Port = 9003
      _this.logs = []
      _this.MyLogger.log = function(){
        _this.logs.push(arguments);
      }
    })

  });

  it("should exist", function(){
    expect(this.WebServer).to.exist;
  });

  describe("integration tests", function(){
    beforeEach(function(done){
      this.url = "http://localhost:" + this.config.Port + "/";
      this.WebServer.start(done)
    });

    afterEach(function(done){
      this.WebServer.stop(done)
    });

    it("log starting message", function(){
      expect(this.logs[0][0]).to.equal(
        "express started on port 9003");
    });

    it("get / -> return correct message", function(done){
      superagent.get(this.url).end(function(err, res){
        expect(res.text).to.equal("Hello World!");
        done()
      });
    });

    it("get /jade-example", function(done){
      superagent.get(this.url+"jade-example").end(function(err, res){
        expect(res.text).to.contain(
          "<!DOCTYPE html><html><head><title>My WebSite</title></head><body><h1>Hello World!</h1></body></html>")
        done()
      });

    });

  })

});
