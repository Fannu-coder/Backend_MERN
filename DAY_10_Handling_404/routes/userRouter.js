const express= require('express');
const userRouter = express.Router();

userRouter.get("/",(req,res,next)=>{
  res.send(`
      <h2>Welcome to airbnb</h2>    
      <a href="/host/add-home">Add Home</a>
    `);
});

module.exports = userRouter;