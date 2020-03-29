

const express = require('express');

const app = express();


// import routers from other files
app.use(require('./hello'));



app.listen(3000, () => {
    console.log("Server running on port 3000");
});

