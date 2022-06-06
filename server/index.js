const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dbconnection = require("./nano");
const app = express();
const port = 8000;

app.use(
  cors({
    origin: "http://localhost:4200",
  })
);
app.use(bodyParser.json());

app.post("/postdata2", function (req, res) {
  var objectnew2 = {
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
  dbconnection.testdb.find(fetchData).then((data) => {
    console.log("DharaniTest", data);
   res.send(data);
  });
});


// app.post('/signup', function (req, _res) {
//   const signupobject = {
//     fullname: req.body.fullname,
//     username: req.body.username,
//     email: req.body.email,
//     password: req.body.password,
//     confirmPassword: req.body.confirmPassword,
//     acceptTerms: req.body.acceptTerms,
//     type: 'signup',
//   };

//   console.log('data from angular', signupobject);
//   dbconnection.pandemic.insert(signupobject).then((data) => {
//     console.log('data inserted successfully ', data);
//   });
// });

// app.get('/getdata/:id', (req, res) => {
//   console.log('email:', req.params.id);
//   console.log('password:', req.params.id);
//   const object = {
//     selector: {
//       email: req.params.id,
//       type: 'signup',
//     },
//   };

//   dbconnection.pandemic
//     .find(object)
//     .then((data) => {
//       console.log('data fetch from db', data);
//       res.send(data);
//     })
//     .catch((err) => {
//       console.log('error', err);
//     });
// });

app.post("/signup", function(request,response){
   var object = {
   
    email: request.body.email,
    Password: request.body.password,
    type:'login'
   
   }
   console.log("data from angular",object);
   dbconnection.testdb.insert(object).then((data)=>{
    console.log("data inserted", data);
   }) ;
  
   console.log("Data added");
  });
  //------------login (GET)------------
  
  app.get('/getlogin/:id',(req,res)=>{
   console.log("email:",req.params.id);
   var object = {
     selector:{
       email:req.params.id,
       type :"login"
     }
   }

  
  
   dbconnection.testdb.find(object).then((data)=>{
     console.log("data fetch from Database",data);
     res.send(data);
   }).catch((err=>{
     console.log("error",err);
   })
   )
  });
 
    app.get('/getadminlogin/:id',(req,res)=>{
   console.log("userid:",req.params.id);
   var object1 = {
     selector:{
      userid:req.params.id,
       type :"admin"
     }
   }
   
  
  
   dbconnection.testdb.find(object1).then((data)=>{
     console.log("data fetch from Database",data);
     res.send(data);
   }).catch((err=>{
     console.log("error",err);
   })
   )
  });
 

app.listen(port, (err) => {
  if (err) {
    return console.log("something bad happened", err);
  }

  console.log(`server is listening on http://localhost:${port}`);
});