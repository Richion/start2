var app = require('express')();

var http = require('http').Server(app);

var io = require('socket.io')(http);

app.get('/',function(req,res){
	
	res.sendFile(__dirname+'/index.html')
		
});

io.on("connection",function(socket){
	
	socket.on("disconection",function(){
		
		console.log("diconect user")
				
	});
	socket.on("chat",function(msg){
		
		io.emit("chat",msg)
		
		
	})
	
	
});


var port = Number(process.env.PORT || 5000);
http.listen(port, function() {
  console.log("Listening on " + port);
});