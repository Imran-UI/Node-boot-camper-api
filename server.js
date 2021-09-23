const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');

//load env variables;
dotenv.config({path : './config/config.env'});

//route files
const bootcamps = require('./routes/bootcamps');

const app = express();


//Dev loggin Middle Ware
if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}



//Mount routers

app.use('/api/v1/bootcamps', bootcamps);


const port = process.env.PORT || 5000;

app.listen(port, console.log(`Server running in ${process.env.NODE_ENV} environment on port ${port}`));