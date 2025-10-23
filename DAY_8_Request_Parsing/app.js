const express= require("express");
const bodyParser= require("body-parser");

const app=express();

app.use((req,res,next)=>{
  console.log("First Dummy Middleware",req.url,req.method);
  next();
});

app.use((req,res,next)=>{
  console.log("Second Dummy Middleware",req.url,req.method);
  next();
});

// app.use((req,res,next)=>{
//   console.log("Third Middleware");
//   res.send(`<h2>Hi Farhan!</h2>`);
// });

app.get("/",(req,res,next)=>{
  console.log(`Handling for / GET`);
  res.send(`<h2>Welcome!</h2>`);
});

app.get("/contact-us",(req,res,next)=>{
  console.log(`Handling for /contact-us GET`);
  res.send(`<h2>Registered Yourself!</h2>
            <form action="/contact-us" method="POST">
            <input type="text" name="name" placeholder="Enter your Name" />
            <input type="email" name="email" placeholder="Enter your email" />
            <input type="submit">
            </form>
    `);
});

app.use(bodyParser.urlencoded());

app.post("/contact-us",(req,res,next)=>{
  console.log(`Handling for /contact-us POST`,req.body);
  res.send(`<h2>We will Contact you Shortly!</h2>`);
});

const PORT=3000;
app.listen(PORT,()=>{
  console.log(`server is running at http://localhost:${PORT}`);
});