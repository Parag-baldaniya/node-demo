const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

const connectDB = require('./configs/database');
const routes = require('./routes/index');

dotenv.config();
const app = express();

// Connect Database
connectDB();

// here cors , urlencoded and json parse for listing req.body
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/v1', routes);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log('listening on port', port);
});