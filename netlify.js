const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');
const handlebars = require('express-handlebars');
const hbs = require('hbs');

app.set('view engine', 'hbs');
app.set('views', './views');
/*app.engine('hbs', handlebars({
layoutsDir: __dirname + '/views',
}));*/
app.use(express.static(path.join(__dirname,'/public/')));
app.get('/', (req, res) => {
   res.render('login.hbs', {layout : 'index.html'});
});
app.get('/login', (req, res) => {
res.render('login.hbs');
});
app.listen(port, () => console.log(`App listening port ${port}`));

