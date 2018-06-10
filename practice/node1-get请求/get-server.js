const http = require('http');

var server=http.createServer(function(req, res){
   var GET={};
   if(req.url.indexOf('?')!=-1)
   {
   	   var arr = req.url.split("?");
   	   //arr[0]是指地址
	   var url = arr[0];
	   //arr[1]是指数据
	   var arr2 = arr[1].split("&");

	   for(var i=0;i<arr2.length;i++)
	   {
	   	  //arr3[0]是名字，arr3[1]是数据.
	   	  var arr3 = arr2[i].split("=");
	   	  GET[arr3[0]] = arr3[1];
	   }
   }else{
   	  var url = req.url;
   }

   console.log(url,GET);
   
   //res从前台获取数据
   res.write("我的个岁心脏，干三白活不出");
   res.end();
});

server.listen(8080);