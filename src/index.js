const express = require('express');
const app = express();
const morgan = require('morgan');

//Settings
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2)

//middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//routes
app.use(require('./routes/index'));
app.use('/api/movies', require('./routes/movies'));

//Strarting the Server
app.listen(app.get('port'), ()=>{
    console.log(`Server on port ${app.get('port')}`);
});