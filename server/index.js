const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dbconnection =require('./nano');
const app = express();
const port = 8000;
 app.use(cors({
  origin:'http://localhost:4200'
}));
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
  dbconnection.login.find(fetchData).then((data) => {
    console.log("test", data);
   res.send(data);
  });
});



app.post('/postdata',function (req,res) {
  var name = req.body.firstName;
  console.log(name);
  var objectnew= {
    firstname:req.body.firstName,
    lastName:req.body.lastName,
    email:req.body.email,
    password:req.body.password,

  }
  console.log("data from angular",objectnew);
  dbconnection.property.insert(objectnew).then((data)=>{
    console.log("data inserted successfully ",data);
  })
}
);
app.listen(port, (err) => {
  if (err) {
   return console.log('something bad happened', err);
  }
 
  console.log(`server is listening on http://localhost:${port}`);
 });