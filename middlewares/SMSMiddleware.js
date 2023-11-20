const express = require('express');
const mongoose = require('mongoose');
const twilio = require('twilio');
const app = express();
app.use(express.json());

// Twilio configuration
const twilioAccountSid = 'TWILIO_ACCOUNT_SID';
const twilioAuthToken = 'TWILIO_AUTH_TOKEN';
const twilioPhoneNumber = 'TWILIO_PHONE_NUMBER';
const client = twilio(twilioAccountSid, twilioAuthToken);

// Middleware to handle response ingestion and send SMS
app.post('/ingest-response', async (req, res) => {
    try {
        // Save response to the database
        const customerResponse = new CustomerResponse(req.body);
        await customerResponse.save();

        // Send SMS to the customer
        const messageContent = `Hello ${customerResponse.customerName}, thank you for your participation. 
                                Here is your receipt: ${JSON.stringify(customerResponse.responseDetails)}`;
        await client.messages.create({
            to: customerResponse.phoneNumber,
            from: twilioPhoneNumber,
            body: messageContent,
        });

        res.send('Response saved and SMS sent to the customer');
    } catch (error) {
        res.status(500).send("Error processing request: " + error.message);
    }
});
