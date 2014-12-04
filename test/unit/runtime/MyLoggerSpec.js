describe("MyLogger", function(){

  beforeEach(function(){
    this.mockConsole ={
      logs:[],
      log:function(){
        this.logs.push(arguments);
      }
    }
    var _this = this;
    var ioc = injector()
    ioc.addDependency("console", this.mockConsole, true)
    ioc.inject(function(MyLogger){
      _this.MyLogger = MyLogger
    })

  })


  it("should exist",function(){
    expect(this.MyLogger).to.exist;
  });

  it("should log with console object", function(){
    this.MyLogger.log("hello");
    expect(this.mockConsole.logs[0][0]).to.equal("hello");
  });

});