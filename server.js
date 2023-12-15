const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json({ limit: '50mb' }));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/home.html'); // Adjust the path as needed
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
