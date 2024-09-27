var express = require('express');
var app = express();

const PORT = process.env.PORT || 8080;

app.get('/*', function (req, res) {
  res.send(`Hello World from ${req.path}`);
});

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`);
});

