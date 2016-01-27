var app = require("express")();
var mantras;

require("fs").readFile("mantras.html", "utf8", function(err, data){
  mantras = data.trim().split("\n");
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

app.get("/", function(req, res){
  res.json(mantras);
});

app.get("/one", function(req, res){
  res.json({mantra: mantras[Math.floor(Math.random() * (mantras.length))]});
});

app.listen(3003);
