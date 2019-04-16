const express = require('express');
const fs = require('fs');

const app = express();

const server = app.listen(3001, function() {
    console.log('server running on port 3001');
});

const io = require('socket.io')(server);

io.on('connection', function(socket) {
	 var date = new Date();
	
	
	 var user=socket.id;
	
	socket.on('disconnect', function(){
	
	var str=' \r\n\t '+date+' --> '+user+' Ayrıldı \r\n\t';
	
	fs.appendFile('log.txt', str, (err) => {  
			// throws an error, you could also catch it here
			if (err) throw err;

			// success case, the file was saved
			console.log('Lyric saved!');
		}); 
	
	});
  
	socket.on('SEND_MESSAGE', function(data){
		
         user=data.user
		 var str='\r\n\t'+date+' --> '+user+' Katıldı \r\n\t';
		 
		 fs.appendFile('log.txt', str, (err) => {  
			// throws an error, you could also catch it here
			if (err) throw err;

			// success case, the file was saved
			console.log('Lyric saved!');
		});
		 
		
	});
  
});