describe("Greeter", function(){
  beforeEach(function(){
    var _this = this;
    injector().inject(function(Greeter){
      _this.Greeter = Greeter
    })

  })

  it("should exist",function(){
    expect(this.Greeter).to.exist;
  });

  it("should greet correctly", function(){
    expect(this.Greeter.greet()).to.equal("Hello World!");
  })
});
