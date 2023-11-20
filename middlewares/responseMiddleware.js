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

// Middleware to fetch specific qustions 
app.get('/fetch-responses/:questionId', async (req, res) => {
    try {
        const questionId = req.params.questionId;
        const responses = await Response.find({ questionId: questionId });

        // You can add additional processing here if needed

        res.json({ questionId: questionId, responses: responses });
    } catch (error) {
        res.status(500).send("Error fetching data: " + error.message);
    }
});     
