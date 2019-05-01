const PORT = 3000;

// region imports
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth.routes');
const helperRoutes = require('./routes/helper.routes');
// end region

// region configuration
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
// end region

// region database
mongoose
.connect('mongodb://localhost:27017/hackathon', {
    useNewUrlParser: true
})
.then(() => console.log('Connected to MongoDB'));
// end region

// region routes
app.use('auth', authRoutes);
app.use('helper', helperRoutes);

app.use((req, res, next) => {
    res.status(404).send('Not found');
});
// end region

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
