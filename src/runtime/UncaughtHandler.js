module.exports = function(nodeProcess, MyLogger){
  return {
    listen:function(){
      nodeProcess.on("uncaughtException", function(err){
        MyLogger.log(err)
        nodeProcess.exit(0)
      });
    }
  }
}