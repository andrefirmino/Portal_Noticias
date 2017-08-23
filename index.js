var http = require('http');

var server = http.createServer( function (req,res){
	res.end("<html><head></head><body>Teste</body></html>")
});

server.listen(3000);