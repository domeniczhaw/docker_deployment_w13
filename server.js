'use strict';

const express = require('express');
// Constants
const PORT = 8080;
const HOST = '0.0.0.0';
// App
const app = express();
app.get('/', (req, res) => {
    res.send('Hello, my name is Domenic. Ich finde dieses Lab toll. Dies wird mir für die Zukunft helfen');
});
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);