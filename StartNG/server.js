const http = require ('http');
const fs = require ('fs')
var postHTML = 
'<html><head><title>SERVER </title></head>' +
'<body>' +
'<form method="POST">' +
'<p><b>Good morning my neighbor</b></p>' +
'<input name = "/message" placeholder = "how are you doin?"><br>'+
'<input type="submit"><br>'+
'</form>' +
'</body></html>' ;

http.createServer((req,res) => {
    var body = '' ;
    req.on('data' , function (chunk){ 
        body += chunk ;
    });
    req.on('end', function (){
        fs.appendFile('message.txt' , body ,
        {encoding : 'utf8'} , function (err){
            if(err)
            console.log(err);
            else
            console.log('file written');
        
    
    res.writeHead(200,{'Content-Type' : 'text/html'}) ;
      res.end(postHTML);
         } );
      });
    })
    
   
.listen(8080)