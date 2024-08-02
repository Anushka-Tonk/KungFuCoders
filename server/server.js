const express = require('express');
const { exec } = require('child_process');
const cors = require('cors');
<<<<<<< HEAD
const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.get('/run-script', (req, res) => {
    const imageUrl = req.query.image_url; 
    const command = `python TrialTop.py "${imageUrl}"`;
=======

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.get('/run-script', (req, res) => {
    const imageUrl = req.query.image_url; // Get image_url from query params
    const command = `python TrialTop.py "${imageUrl}"`; // Pass it to the Python script

>>>>>>> upstream/main
    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return res.status(500).send(`Error: ${stderr}`);
        }
        res.send(stdout);
    });
});
<<<<<<< HEAD
app.listen(PORT, () => {console.log(`Server running on http://localhost:${PORT}`);});
=======

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
>>>>>>> upstream/main
