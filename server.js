
var express = require('express');
var cors = require('cors');
var mysql = require('mysql');
var port = process.env.PORT || 3000;
const bcrypt = require('bcrypt');

var app = express()

app.use(cors())

app.use(function(req, res, next) {

  res.header("Access-Control-Allow-Origin", "*");

  res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST');

  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  next();

});

var con = mysql.createConnection({
  host: "dissertationuclmrbosch.mysql.database.azure.com",
  user: "maxio@dissertationuclmrbosch",
  password: "Databaseboot1@",
  database: "thesis"
});

let PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
        console.log(`Express server is running on ${PORT}`);
    }
);
con.connect(function(err) {
  if (err) throw err;
  console.log('Connected')})

app.get('https://nodemrbosch.azurewebsites.net/api/getaccounts', async(req, res) =>{
 
    con.query("SELECT email, username FROM accounts", function(err, result, fields) {
      if(err) throw err;
      res.send(result); // send the value back to the caller.
    });
  })


  app.get('https://nodemrbosch.azurewebsites.net/api/error', async(req, res) =>{
 
    con.query("INSERT INTO errors SET userID=?, time=?, type=?", [req.query.userID,req.query.time,req.query.type], function(err, result, fields) {
      if(err) throw err;
      res.send(result); // send the value back to the caller.
    });
  })

  app.get('https://nodemrbosch.azurewebsites.net/api/registeruser', async(req, res) =>{
 let encryptedpw = await bcrypt.hashSync(req.query.password,10)

     con.query("INSERT INTO `accounts` SET  `username`=?, `password`=?, `email`=?",
    [req.query.username, encryptedpw, req.query.email],function(err,result,fields ){
    
if (err) throw err;
res.sendStatus(200)})})
  
app.get('https://nodemrbosch.azurewebsites.net/api/checklogin',async(req,res)=>{
  con.query("SELECT email, password, userID FROM accounts WHERE email =?",[req.query.email], function(err, result, fields) {
    if(err) throw err;

    res.send(result); // send the value back to the caller.
  });
})


app.get('https://nodemrbosch.azurewebsites.net/api/addprediction', async(req, res) =>{
 
      con.query("INSERT INTO `predictions` SET  `userID`=?, `time`=?, `type`=?, `value`=?",
     [req.query.userID, req.query.time, req.query.type,  req.query.value],function(err,result,fields ){
     
 if (err) throw err;
 res.sendStatus(200)})})
  

