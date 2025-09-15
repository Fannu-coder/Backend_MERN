const http=require('http');
const fs=require('fs');

const server=http.createServer((req,res)=>{
  console.log(req.url,req.method,req.headers);
  if (req.url==='/') {
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>Fannu-Coder</title></head>');
    res.write('<body>');
    res.write('<h1>Enter Your Details</h1>');
    res.write('<form action="/submit-details" method="POST">');
    res.write('<h2>Enter your Name</h2>');
    res.write('<input type="text" name="username" placeholder="E.g Farhan Ahmad"></br></br>');
    res.write('<label for="gender">Select Your Gender</label></br></br>');
    res.write('<input type="radio" name="gender" id="male" value="male">');
    res.write('<label for="male">Male</label>');
    res.write('<input type="radio" name="gender" id="female" value="female">');
    res.write('<label for="female">Female</label></br></br>');
    res.write('<button type="submit">Submit</button>');
    res.write('</form>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
  }
  else if (req.url.toLowerCase()==='/submit-details' && req.method=='POST') {
    fs.writeFileSync('user.txt','Fannu-Coder');
    res.statusCode=302;
    res.setHeader('Location','/');
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