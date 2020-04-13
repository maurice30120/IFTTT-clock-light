const https = require("https");

module.exports = {
  ordreRequestWrapper: async function(ordre) {
    return new Promise((resolve, reject) => {
      ordre(resolve, reject);
    });
  },
  light1: function(resolve, reject) {
    const url =
      "https://maker.ifttt.com/trigger/light1/with/key/ju53RvxrwotCLYDBtkZoSyX_OieU-SqpVNKX00ExGuD";
    https.get(url, res => {
      res.setEncoding("utf8");
      let body = "";
      res.on("data", data => {
        body += data;
      });
      res.on("end", () => {
        // body = JSON.parse(body);
        console.log("light1", body);
        resolve();
      });
    });
  },
  light2: function(resolve, reject) {
    const url =
      "https://maker.ifttt.com/trigger/light2/with/key/ju53RvxrwotCLYDBtkZoSyX_OieU-SqpVNKX00ExGuD";
    https.get(url, res => {
      res.setEncoding("utf8");
      let body = "";
      res.on("data", data => {
        body += data;
      });
      res.on("end", () => {
        //  body = JSON.parse(body);
        console.log("light2", body);
        resolve();
      });
    });
  },
  light3: function(resolve, reject) {
    const url =
      "https://maker.ifttt.com/trigger/light3/with/key/ju53RvxrwotCLYDBtkZoSyX_OieU-SqpVNKX00ExGuD";
    https.get(url, res => {
      res.setEncoding("utf8");
      let body = "";
      res.on("data", data => {
        body += data;
      });
      res.on("end", () => {
        //  body = JSON.parse(body);
        console.log(body);
        resolve();
      });
    });
  }
};
