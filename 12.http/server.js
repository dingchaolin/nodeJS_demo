var http = require('http');
var fs = require('fs');
var url = require('url');
http.createServer(function(req,res){
    var urlObj = url.parse(req.url,true);
   if(urlObj.pathname == '/'){
      fs.createReadStream('./login.html').pipe(res);
   }else if(urlObj.pathname =='/login'){//因为用户提交表单的时候会把请求体传过来，所以要接收请求体
       /*var buffers = [];
       req.on('data',function(data){
           buffers.push(data);
       })
       req.on('end',function(data){
           var result = Buffer.concat(buffers);
            res.end(result.toString());
       })*/


       console.log(urlObj.query.username);
       res.end(urlObj.query.username);
   }else{
       res.end('404');
   }
}).listen(8080);