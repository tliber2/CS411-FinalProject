const http = require('http');
var mysql = require('mysql');

const hostname = '127.0.0.1';
const port = 3000;


var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "cs411"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});


const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});