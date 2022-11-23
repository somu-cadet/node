const http=require("http")

http.createServer((req,res)=>{
   res.write("backend is started")
   res.end()
}).listen(2000)