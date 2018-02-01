/*eslint no-console: 0*/
"use strict";

var http = require("http");
var port = process.env.PORT || 3000;

http.createServer(function (req, res) {
  res.writeHead(200, {"Content-Type": "text/plain"});
  res.end("This is being served by NodeJS. \n\n When deploy to CF shared, details of the authenticated user can be found here:\n https://shared.authentication.us10.hana.ondemand.com/config?action=who \n");
}).listen(port);

console.log("Server listening on port %d", port);
