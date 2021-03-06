const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('colors');
const connectDB = require('./config/db');


//load env variables;
dotenv.config({path : './config/config.env'});


//connect to Database
connectDB();

//route files
const bootcamps = require('./routes/bootcamps');

const app = express();


// Body Parser
app.use(express.json());

//Dev loggin Middle Ware
if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}



//Mount routers

app.use('/api/v1/bootcamps', bootcamps);


const port = process.env.PORT || 5000;

const server =  app.listen(port, console.log(`Server running in ${process.env.NODE_ENV} environment on port ${port}`.yellow.bold));

//Handle unhandled promise rejection
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error : ${err.message}`.red);
    //close server and exit
    server.close(() => process.exit(1));
})