const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/tracks')

const app = express();

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

app.use(cors());
app.use(bodyParser.json());

const db = require('./config/keys').mongoURI;

mongoose
    .connect(db)
    .then(() => console.log("Mongo DB connected"))
    .catch((err) => console.log(err))

app.use('/api/tracks', items)

const port = process.env.PORT || 1111;
app.listen(port, () => console.log(`Server is running on ${port} port`));


// const {MongoClient} = require('mongodb');
// const client = new MongoClient('mongodb+srv://zhddm:!23Qwe@cluster0.703bh.mongodb.net/musicAppDb?retryWrites=true&w=majority');
// const tracks = client.db().collection('tracks');

//app.use(cors());
//app.use(express.static(__dirname + '/app'));

// req - request (запрос на сервер), res - response (ответ от сервера)

// app.get('/music', (req, res) => {
//     //console.log(req);
//     client.connect();
//     console.log("Connection good");
//     const track = tracks.find({name: "Not Afraid"});
//     res.json({
//         msg: track
//     });
// });

// app.post('/music', jsonParser, (req, res) => {
//     if(!req.body) {
//         return res.sendStatus(400);
//     };

//     const trackName = req.body.name;
//     const trackResult = req.body.result;
// });

// app.listen(1111, () => {
//     console.log('Server is running');
// });

// const findTracks = async() => {
//     try {
//         await client.connect();
//         console.log('Connection good');
//         //await client.db().createCollection('tracks');
//         //await tracks.insertOne({name: 'track.name', result: 'track.src'});
//         const track = await tracks.find({name:"Not afraid"});
        
//     } catch(e) {
//         console.log(e);
//     }
// }   

// const uploadTrack = async() => {
//     try {
//         await client.connect();
//         console.log('Connection good');
//         //await client.db().createCollection('tracks');
//         await tracks.insertOne({name: track.name, result: track.src});
//         //const track = await tracks.findOne({name: 'test'});
//         //console.log(track);
//     } catch(e) {
//         console.log(e);
//     }
// }