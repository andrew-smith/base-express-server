

const express = require('express');

const router = express.Router();



router.get("/hello", (request, response, next) => {

    response.status(200).send("Hello!");

});






module.exports = router;
