// Import ExpressJS framework
import express from 'express';

//Setup handlebars
import exphbs from 'express-handlebars';
import bodyParser from 'body-parser';

// Import modules
import Query from './services/query.js';
import ExpenseTrackerObj from './js/expense-tracker.js';
import db from './routes/database.connect.js';
import ExpenseTrackerAppRoutes from './routes/expense.routes.js';

let query = Query(db);
let expenseTrackerObject = ExpenseTrackerObj(query);
let expenseTrackerApp  = ExpenseTrackerAppRoutes(expenseTrackerObject);

// Setup a simple ExpressJS server
const app = express();

//Configure the express-handlebars module:
const handlebarSetup = exphbs.engine({
    partialsDir: "./views/partials",
    viewPath: './views',
    layoutsDir: './views/layouts'
  });

  // setup handlebars
app.engine('handlebars', handlebarSetup);
// set handlebars as the view engine
app.set('view engine', 'handlebars');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

//built-in static middleware
app.use(express.static('public'));

//routes
app.get('/',expenseTrackerApp.pageLoad);
// Set PORT variable
let PORT = process.env.PORT || 4000;

app.listen(PORT, function () {
  console.log('App starting on port', PORT);
});