var app = require("express")();
var fs = require("fs");
var mantras;
var index;

fs.readFile("mantras.html", "utf8", function(err, data){
  mantras = data.trim().split("\n");
});

fs.readFile("index.html", "utf8", function(err, data){
  index = data;
});

function sample(){
  return mantras[Math.floor(Math.random() * (mantras.length))];
}

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

app.get("/", function(req, res){
  res.send(index.replace("{{mantra}}", sample()));
});

app.get("/all", function(req, res){
  res.json(mantras);
});

app.get("/one", function(req, res){
  res.json({mantra: sample()});
});

app.listen(3003);
