const { google } = require('googleapis');
const express = require('express');
const app = express();
app.use(express.json());

// Configure Google Sheets API
const sheets = google.sheets({ version: 'v4' });
const spreadsheetId = 'YOUR_SPREADSHEET_ID'; // Replace with your Google Sheet ID

// Middleware to add form response to Google Sheets
app.post('/add-response', async (req, res) => {
    try {
        const response = req.body;
        const values = Object.values(response.formData); // Extracting form answers
        const resource = {
            values: [values],
        };

        await sheets.spreadsheets.values.append({
            spreadsheetId,
            range: 'Sheet1', // Assuming you are using the first sheet
            valueInputOption: 'RAW',
            resource,
        });

        res.send('Response added to Google Sheets');
    } catch (error) {
        res.status(500).send("Error adding response to Google Sheets: " + error.message);
    }
});