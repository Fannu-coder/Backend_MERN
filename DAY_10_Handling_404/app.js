const express= require("express");
const userRouter = require("./routes/userRouter");
const hostRouter = require("./routes/hostRouter");
const app= express();

app.use(express.urlencoded());
app.use(userRouter);
app.use("/host",hostRouter);

app.use((req,res,next)=>{
  res.status(404).send(`<h2>404 Page Not Found!</h2>`);
});

const PORT=3000;
app.listen(PORT,()=>{
  console.log(`server is running at http://localhost:${PORT}`);
});