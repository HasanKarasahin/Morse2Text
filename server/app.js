const express = require('express');
const fs = require('fs');

const app = express();

const server = app.listen(3001, function() {
    console.log('server running on port 3001');
});

const io = require('socket.io')(server);

io.on('connection', function(socket) {
	
	 var user=socket.id;
	
	socket.on('disconnect', function(){
		
	var date = new Date();
	
	var str=' \r\n'+date+' --> '+user+' Ayrıldı';
	
	fs.appendFile('log.txt', str, (err) => {  
			// throws an error, you could also catch it here
			if (err) throw err;
		});
	});
  
	socket.on('SEND_MESSAGE', function(data){
         user=data.user
		 var date = new Date();
		 var str='\r\n'+date+' --> '+user+' Katıldı';	 
		 fs.appendFile('log.txt', str, (err) => {  
			if (err) throw err;
			console.log('kaydedildi.');
		});
	});
});