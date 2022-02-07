const express = require('express');
const path = require('path');

const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'))
})

// Handles any requests that don't match the ones above. Change me to a 401 page!
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));