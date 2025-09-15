const fs= require('fs');

let a=2,b=3;
let sum=a+b;
let product=a*b;
let data=`Sum= ${sum}\nProduct= ${product}`;

fs.writeFile('output.txt',data,(err)=>{
  if(err) console.log('Error Occured');
  else console.log('File Written Successfully');
});