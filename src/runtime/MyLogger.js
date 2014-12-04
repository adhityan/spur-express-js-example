module.exports = function(console){

  return {
    log:function(){
      console.log.apply(console, arguments);
    }
  }

};