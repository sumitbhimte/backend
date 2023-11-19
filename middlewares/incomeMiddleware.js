const express = require('express');
const app = express();
app.use(express.json()); // For parsing JSON request bodies


// Middleware to validate and flag responses
app.post('/validate-responses', async (req, res) => {
    try {
        const responses = req.body.responses;
        for (let response of responses) {
            // Business rule: monthly savings cannot be more than monthly income
            if (response.monthlySavings > response.monthlyIncome) {
                response.flag = true;
                // Optionally, update the response in the database
                await Response.findByIdAndUpdate(response._id, { flag: true });
            } else {
                response.flag = false;
                // Optionally, update the response in the database
                await Response.findByIdAndUpdate(response._id, { flag: false });
            }
        }
        res.json({ flaggedResponses: responses.filter(r => r.flag) });
    } catch (error) {
        res.status(500).send("Error processing data: " + error.message);
    }
});

