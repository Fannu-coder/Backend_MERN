const http=require('http');

const server=http.createServer((req,res)=>{
  console.log(req.url,req.method,req.headers);
  if (req.url==='/') {
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>Fannu-Coder</title></head>');
    res.write('<body><h1>Welcome Home!</h1></body>');
    res.write('</html>');
    return res.end();
  }
  else if (req.url==='/products') {
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>Products</title></head>');
    res.write('<body>');
    res.write('<h2>Click Here For Shopping!</h2>');
    res.write('<a href="https://rehmatsons1.myshopify.com/">All Products Available!</a>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
  }

  res.setHeader('Content-Type','text/html');
  res.write('<html>');
  res.write('<head><title>Service Not Found!</title></head>');
  res.write('<body><h2>Invalid Request!</h2></body>');
  res.write('</html>');
  return res.end();
});

const PORT=3000;
server.listen(PORT,()=>{
  console.log(`Server is running at http://localhost:${PORT}`);
});