var express = require('express'),
    app = express();

app.get('/', function(req, res){
    res.send("Todos app");
})
    
app.listen(process.env.PORT, function(){
    console.log("APP IS RUNNING ON PORT "+process.env.PORT);
})