describe("UncaughtHandler", function(){

  beforeEach(function(){
    var _this = this;
    this.mockProcess ={
      on:function(event, errorFn){
        _this.event = event;
        _this.errorFn = errorFn;
      },
      exit:function(exitCode){
        _this.exitCode = exitCode
      }
    }
    var ioc = injector()
    ioc.addDependency("nodeProcess", this.mockProcess, true)
    ioc.inject(function(UncaughtHandler, MyLogger){
      _this.UncaughtHandler = UncaughtHandler;
      _this.MyLogger = MyLogger;
      _this.logs = []
      _this.MyLogger.log = function(){
        _this.logs.push(arguments);
      }
    })

  })

  it("should exist",function(){
    expect(this.UncaughtHandler).to.exist;
  });

  it("should listen and process uncaughtException", function(){
    this.UncaughtHandler.listen();
    expect(this.event).to.equal("uncaughtException");
    this.errorFn(new Error("Oops!"));
    expect(this.logs[0][0].message).to.equal("Oops!");
    expect(this.exitCode).to.equal(0);
  });
});