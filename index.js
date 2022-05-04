const express = require('express')
var compiler = require('compilex')
var bodyParser = require('body-parser')
var options = {stats : true}
compiler.init(options);
const app = express()
const port = 3000

app.get("/", function (req, res) {
    res.sendfile(__dirname + "/index.html");
  });

app.post('/runcode',(req,res) =>{
    var code = req.body.code;
    var input = req.body.input;
    var inputRadio = req.body.inputRadio;
    var lang = req.body.lang;
    if(lang === c || lang === cpp){
        if(inputRadio){
            var envData = { OS : "windows" , cmd : "g++"};
            compiler.compileCPP(envData , code , function (data) {
                if(data.error) return data.error
                else return data.output
            });
        
        }else{
            var envData = { OS : "windows" , cmd : "g++"};
            compiler.compileCPPWithInput(envData , code , intput , function (data) {
                if(data.error) return data.error
                else return data.output
            });
        }
    }else if(lang === Python || lang === Python){
        if(inputRadio){
            var envData = { OS : "windows"}; 
            compiler.compilePython( envData , code , function(data){
                if(data.error) return data.error
                else return data.output
            }); 
        }else{
            var envData = { OS : "windows"}; 
            compiler.compilePythonWithInput( envData , code  , intput, function(data){
                if(data.error) return data.error
                else return data.output
            });
        }
    }else if(lang === Java || lang === Java){
        if(inputRadio){
            var envData = { OS : "windows"}; 
            compiler.compileJava( envData , code , function(data){
                if(data.error) return data.error
                else return data.output
            });
        }else{
            var envData = { OS : "windows"}; 
            compiler.compileJavaWithInput( envData , code , input ,  function(data){
                if(data.error) return data.error
                else return data.output
            });
        }
    }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})