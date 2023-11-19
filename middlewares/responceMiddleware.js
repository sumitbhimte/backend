const express = require('express');
const mongoose = require('mongoose');
const app = express();


// Middleware to fetch responses based on a specific city
app.get('/fetch-responses/city/:city', async (req, res) => {
    try {
        const city = req.params.city;
        const responses = await Response.find({ city: city });

        res.json({ city: city, responses: responses });
    } catch (error) {
        res.status(500).send("Error fetching data: " + error.message);
    }
});
