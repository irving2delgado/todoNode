var express = require('express'),
    app = express();
const port = 3000;

app.get('/', function(req, res){
    res.send("whats up neesh");
});

app.listen(port, function(){
    console.log("app is running on PORT"  );
})