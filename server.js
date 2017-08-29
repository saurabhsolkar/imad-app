var express = require('express');
var morgan = require('morgan');
var path = require('path');
var pool=require('pg').pool;
var Pool = require('pg').Pool;
var app = express();
app.use(morgan('combined'));
var config={
    user:"saurabhsolkar4",
    database:"saurabhsolkar4",
    host:"db.imad.hasura-app.io",
    port:"5432",
    password: process.env.DB_PASSWORD
    
    };


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/myprofile', function (req, res) {
  res.sendFile(path.join(__dirname, '', 'myprofile.html'));
});


var pool = new Pool(config);

app.get('/test', function (req, res) {
 // res.sendFile(path.join(__dirname, 'ui', 'index.html'));
  pool.query('SELECT * from user',function(err,result){
      if(err){
         res.status(500).send(err.toString()); 
      }else{
          res.send(JSON.stringify(result));
      }
  });
});

var counter=0;
app.get('/cnt',function(req,res){
    counter=counter+1;
    pool.query("insert into cnt(cnt1) values ($1)",[counter],function (err, result) {
                            if (err) {
                                res.status(500).send(err.toString());
                            } else {
                                res.status(200).send('Comment inserted!')
                            }
});
    res.send(counter.toString());
});



app.post('/create-user', function (req, res) {
   // username, password
   // {"username": "tanmai", "password": "password"}
   // JSON
   var username = req.body.username;
   var password = req.body.password;
   var salt = crypto.randomBytes(128).toString('hex');
   var dbString = hash(password, salt);
   pool.query('INSERT INTO "user" (username, password) VALUES ($1, $2)', [username, dbString], function (err, result) {
      if (err) {
          res.status(500).send(err.toString());
      } else {
          res.send('User successfully created: ' + username);
      }
   });
});






app.get('/ganpati.html', function (req, res) {
  res.sendFile(path.join(__dirname, '', 'ganpati.html'));
});
app.get('/youtube.html', function (req, res) {
  res.sendFile(path.join(__dirname, '', 'youtube.html'));
});
app.get('/index.html', function (req, res) {
  res.sendFile(path.join(__dirname, '', 'index.html'));
});
app.get('/myprofile.html', function (req, res) {
  res.sendFile(path.join(__dirname, '', 'myprofile.html'));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
app.get('/imad-app/myvideo.mp4', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'myvideo.mp4'));
});



// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});