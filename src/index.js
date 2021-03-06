const path = require('path');
require('dotenv').config();


const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();
require('./config/connection')


app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/files', express.static(path.resolve(__dirname, '..', 'tmp', 'uploads')))
app.use(require('./routes'));
app.use(morgan('dev'));


app.listen(3000);
