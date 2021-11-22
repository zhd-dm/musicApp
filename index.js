var express = require('express');
var path = require('path');
var app = express();
//const fileUpload = require('express-fileupload');

const OPTIONS = {
    port: 1111,
}

app.use(express.static(process.cwd() + "/"));

app.get('/', (req, res) => {
    res.sendFile(process.cwd() + "/index.html");
});

app.listen(OPTIONS.port, () => {
    console.log('Server is running on http://localhost:' + OPTIONS.port);
})

// // default options
// app.use(fileUpload());

// app.post('/', (req, res) => {
//   if (!req.files || Object.keys(req.files).length === 0) {
//     return res.status(400).send('No files were uploaded.');
//   }

//   // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
//   let sampleFile = req.files.sampleFile;

//   // Use the mv() method to place the file somewhere on your server
//   sampleFile.mv('/upload-files', function(err) {
//     if (err)
//       return res.status(500).send(err);

//     res.send('File uploaded!');
//   });
// });