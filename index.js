const express = require('express');
const app = express();
const PORT = 3000;
const path ='/index.html';

//console.log(`__dirname  ${__dirname}`);
//console.log(`__filename  ${__filename}`);

app.use(express.static(__dirname + "/netlifySDF"));
app.use("/", function(request, response){
    response.send("<h1>Главная страница</h1>");
});
app.listen(PORT);
console.log(`приложение запущено по порту ${PORT}`);