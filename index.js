const express = require('express');
const app = express();
const PORT = 3000;
const path ='/index.html';

//app.use(express.static(__dirname + "/netlify"));
app.use("/", function(request, response){
    response.sendFile(__dirname + path);
});
app.listen(PORT);
console.log(` Приложение запущено по порту ${PORT}`);