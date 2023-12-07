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

app.post('/saveimage', (req, res) => {
    let data = req.body.data;
    let base64Data = data.replace(/^data:image\/png;base64,/, "");
    
    // Use a timestamp to generate a unique filename
    let filename = 'image-' + Date.now() + '.png';

    fs.writeFile(filename, base64Data, 'base64', err => {
        if (err) {
            console.error(err);
            return res.status(500).send(err);
        }
        console.log('Image saved successfully as ' + filename);
        res.send('Image saved successfully as ' + filename);
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
