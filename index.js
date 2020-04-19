const express = require('express');
const app = express();

const {config} = require('./config/index');
const moviesApi = require('./routes/movies.js');

const { logErrors, errorHandler, wrapErrors } = require('./utils/middleware/errorHandlers');
const notFoundHandler = require('./utils/middleware/noFoundHandler');
const cors = require('cors')

// app.get('/', function(req, res) {
//     res.send('hello world')
// });

// app.get('/json', function(req, res) {
//     res.json({ hello: 'world'})
// });

//body parse
app.use(express.json());

//enable cors
app.use(cors())

moviesApi(app);

//Catch 404
app.use(notFoundHandler);

// middleware of errors
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler)



app.listen(config.port,  function () {
    console.log(`listening http://localhost:${config.port}`);
});