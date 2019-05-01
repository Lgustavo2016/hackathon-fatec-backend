const PORT = 3000;

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose
    .connect('mongodb://localhost:27017/hackathon', {
        useNewUrlParser: true
    })
    .then(() => console.log('Connected to MongoDB'));
    
app.use(cors());

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
