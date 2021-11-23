var express = require('express');
var path = require('path');
var app = express();

const OPTIONS = {
    port: 1111,
}

app.use(express.static(process.cwd() + "/"));

app.get('/', (req, res) => {
    res.sendFile(process.cwd() + "/index.html");
});

app.listen(OPTIONS.port, () => {
    console.log('Server is running on http://localhost:' + OPTIONS.port);
});
