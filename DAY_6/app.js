const http=require('http');
const Handler=require('./Parsing_Req')

const server=http.createServer(Handler);

const PORT=3000;
server.listen(PORT,()=>{
  console.log(`Server is running at http://localhost:${PORT}`);
});