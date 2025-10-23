const express= require('express');
const hostRouter= express.Router();

hostRouter.get("/add-home",(req,res,next)=>{
  res.send(`
    <h2>Enter your House Name: </h2>
    <form action="/host/add-home" method="POST">
      <input type="text" name="houseName" placeholder="Your House Name Please!">
      <input type="submit">
    </form>
    `);
});

hostRouter.post("/add-home",(req,res,next)=>{
  console.log(req.body);
  res.send(`
    <h2>Home Registered Sucsessfully!</h2>
    <a href="/">Go to Home</a>
    `);
});

module.exports = hostRouter;