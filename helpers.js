const https = require("https");
const ordre = require("./lampeOrdre");

module.exports = {
  generateUniqueId: function() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
      var r = (Math.random() * 16) | 0,
        v = c == "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  },
  callme: function() {
    //https://maker.ifttt.com/trigger/start_light/with/key/ju53RvxrwotCLYDBtkZoSyX_OieU-SqpVNKX00ExGuD
    ordre.ordreRequestWrapper(ordre.light1).then(() => {
      setTimeout(function() {
        ordre.ordreRequestWrapper(ordre.light2).then(() => {
          setTimeout(function() {
            ordre.ordreRequestWrapper(ordre.light3);
          }, 9000);
        });
      }, 9000);
    });

    /*
    setTimeout(function() {
      ordre.light2();
    }, 3000);
    setTimeout(function() {
      ordre.light2();
    }, 30000);*/
  }
};
