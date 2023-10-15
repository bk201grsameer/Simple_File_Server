const express = require('express');
const serverIndex = require('serve-index');
const app = express();
const port = 8000;

/* SERVE THE FILES AND DIRECTORIES YOU WANT TO SERVER */
app.use('/', express.static('public'), serverIndex('public', { icons: true }));

app.listen(port, () => {
    console.log(`Example app listening on port http://192.168.50.251:${port}`);
});
