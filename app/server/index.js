const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

///////////////////////////////// Track
// vars for upload track 
const uploadTracks = require('./routes/api/tracks');

///////////////////////////////// User
// vars for user
const currentUser = require('./routes/api/users');

const app = express();

app.use(bodyParser.json( {limit: '50mb'} ));
app.use(bodyParser.urlencoded( {limit: '50mb', extended: true} ));

app.use(cors());
//app.use(bodyParser.json());

const db = require('./config/keys').mongoURI;

mongoose
    .connect(db)
    .then(() => console.log("Mongo DB connected"))
    .catch((err) => console.log(err))

///////////////////////////////// Track
app.use('/api/tracks', uploadTracks);
// app.use('/api/tracks', trackId);

///////////////////////////////// User
app.use('/api/auth', currentUser);

const port = process.env.PORT || 1111;
app.listen(port, () => console.log(`Server is running on ${port} port`));
