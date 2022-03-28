const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + 'M1-P9-Ekaly'));
app.get('/*', function(req,res) {
res.sendFile(path.join(__dirname+
'/dist/<app-name>/index.html'));});
app.listen(process.env.PORT || 8080);
