const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dbconnection = require("./nano");
const app = express(); 
app.disable("x-powered-by");
const helmet = require("helmet");
app.use(helmet.hidePoweredBy());

const port = 8000;

app.use(
  cors({
    origin: "http://localhost:4200",
  })
);
app.use(bodyParser.json());

app.post("/loginpost", function (req, res) {
  const objectnew2 = {
    userid: req.body.userid,
    password: req.body.password,
    type:"login"
  };
  const fetchData ={
    "selector" :{
      userid :objectnew2.userid,
      password :objectnew2.password,
    }
  }
  console.log(fetchData)
  dbconnection.testDb.find(fetchData).then((data) => {
    console.log("akila", data);
   res.send(data);
  });
});



app.post("/signup", function(request,_response){
   const object = {
   
    email: request.body.email,
    Password: request.body.password,
    type:'login'
   
   }
   console.log("data from angular",object);
   dbconnection.testDb.insert(object).then((data)=>{
    console.log("data inserted", data);
   }) ;
  
   console.log("Data added");
  });
  //------------login (GET)------------
  
  // app.get('/getlogin/:id',(req,res)=>{
  //  console.log("email:",req.params.id);
  //  const object = {
  //    selector:{
  //      email:req.params.id,
  //      type :"login"
  //    }
  //  }
  
  //  dbconnection.testDb.find(object).then((data)=>{
  //    console.log("data fetch from Database",data);
  //    res.send(data);
  //  }).catch((err=>{
  //    console.log("error",err);
  //  })
  //  )
  // });
 
  //   app.get('/getadminlogin/:id',(req,res)=>{
  //  console.log("userid:",req.params.id);
  //  const object1 = {
  //    selector:{
  //     userid:req.params.id,
  //      type :"admin"
  //    }
  //  }
   
  
  
  //  dbconnection.testDb.find(object1).then((data)=>{
  //    console.log("data fetch from Database",data);
  //    res.send(data);
  //  }).catch((err=>{
  //    console.log("error",err);
  //  })
  //  )
  // });
 

app.listen(port, (err) => {
  if (err) {
    return console.log("something bad happened", err);
  }

  console.log(`server is listening on http://localhost:${port}`);
});