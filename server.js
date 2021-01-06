//dependencies
const express = require('express');

//PORT
const PORT = process.env.PORT || 8080;

//setting up express app
const app = express();

//serves static content for the app from the "public" directory in the application directory
app.use(express.static('public'));

//parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Set up handlebars
const exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars')

//import routes and give the server access to them
const routes = require('./controllers/burgerControllers');

app.use(routes);

//start server to begin listening to end user requests
app.listen(PORT, () => console.log(`Server listening on ${PORT}`));