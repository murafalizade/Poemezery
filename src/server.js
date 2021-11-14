// Development
const express = require("express");
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();

// Routers
const authRouter = require('./routers/loginRouter')
const poemRouter = require('./routers/poemRouter')
const userRouter = require('./routers/userRouter')
const tagRouter = require('./routers/searchRouter')
// Configs and Constants
const passport = require('passport');
require('dotenv').config();
const PORT = process.env.PORT;
const connectionUrl = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.lob4d.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

// Database
const mongoose = require('mongoose');
try {
    mongoose.connect(connectionUrl)
    console.log('Connect is succesfull');
} catch (error) {
    console.log(error)
}

// Middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(passport.initialize());

// Routers
app.use('/api/v1', authRouter);
app.use('/api/v1', poemRouter);
app.use('/api/v1', userRouter);
app.use('/api/v1',tagRouter);

app.listen(PORT, () => console.log(`server is running http://localhost:${PORT}`));