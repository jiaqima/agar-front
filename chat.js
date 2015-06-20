// var http = require('http');
//
// http.createServer(function (req, res) {
// 	console.log(req.data);
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.end('Hello World\n');
// }).listen(442, "127.0.0.1");
// console.log('Server running at http://127.0.0.1:442/');

var WebSocketServer = require('ws').Server
  , wss = new WebSocketServer({port: 1442});
  var str_title="-----------\nChatBoard\n";
  var str_content=new Array(10);
  for(i=0;i<10;i++)
	  str_content[i]="";
wss.on('connection', function(ws) {
    ws.on('message', function(message) {
        console.log('received: %s', message);
		if(message=="~!@#+_*&")
		{
			str=str_title;
			for(i=0;i<10;i++)
				str+=str_content[i];
			ws.send(str);
			console.log(str);
		}
		else
		{
			for(i=9;i>0;i--)
				str_content[i]=str_content[i-1];
			str_content[0]=message+"\n";
			ws.send("~!@#+_*&");
		}
    });
    
});

console.log("running on 127.0.0.1:442");