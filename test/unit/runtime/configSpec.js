describe("config", function(){
  beforeEach(function(){
    var _this = this;
    injector().inject(function(config){
      _this.config = config
    })

  })

  it("should exist",function(){
    expect(this.config).to.exist;
  });

  it("should greet correctly", function(){
    expect(this.config.Port).to.equal(8080);
  })
});
