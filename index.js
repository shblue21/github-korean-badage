var transResource='https://raw.githubusercontent.com/shblue21/gitkraken-korean/main/strings_8.3.0_ko.json'
var originResource='https://raw.githubusercontent.com/shblue21/gitkraken-korean/main/strings_8.3.0_en.json'
// var endpoint = require("@runkit/runkit/json-endpoint/1.0.0")

var request = require("request") // peer dependency

request(transRaw, function (error, response, body) {
  if (!error && response.statusCode == 200) {
     var importedJSON = JSON.parse(body);
     console.log(importedJSON);
     var count = Object.keys(importedJSON.menuStrings).length;
     console.log(count);

  }
})