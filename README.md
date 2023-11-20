# Atlan backend Challenge

### Database: NoSQL (MongoDB || MongoDB Atlas)

- As we have a huge database and each time a customer may request changes at any point of time so SQL database may take more time to retrieve.
- By using NoSQL it is easier to make changes in schema and retrieval becomes faster because of MongoDB caching

### Load Balancer

- We can setup AWS Services (or any cloud services) to manage system health

### Caching (Application-Level Caching) :

1. Redis
2. Memcached

- we can use any of the caching techniques to improve performance

![alt text](https://github.com/sumitbhimte/backend/blob/main/images/AWS-dataflow-diagram.png "AWS Dataflow Dig")


## Slang Language Searching (Task 1)

**Schema**

- `responseId` : Unique identifier for the response.
- `userId`: Identifier for the user who provided the response.
- `questionId`: Identifier for the question being answered.
- `correctOption` : Correct option.
- `selectedOption`: The option selected by the user.
- `isCorrect`: Boolean indicating if the selected option is correct.
- `city` : Stores city name

**Middleware**

- The middleware (`/fetch-responses/:questionId`) now fetches responses for a specific question based on its ID.
- The middleware (`/fetch-responses/city/:city`) is used to get responses filtered by a specified city. The city is passed as a URL parameter.

## Validate Monthly Income Savings (Task 2)

**Schema**

- `responseId` : Unique identifier for the response.
- `userId` : Identifier for the user who provided the response.
- `monthlyIncome` : Total monthly Income.
- `monthlySavings` : Total monthly saving.
- `flag` : If a response violates the rule, its flag field is set to true. Optionally, the response can be updated in the database to reflect this.

**Middleware**

- The middleware `/validate-responses` expects a list of responses in the request body. It iterates through these responses, applying the business rule (in this case, checking if monthly savings exceed monthly income).

**Usage**

- To use this middleware, the data collector would send a POST request to `/validate-responses` with a payload containing the responses to be validated. The middleware would process these responses,
  flag any that violate the business rules, and return the flagged responses.
  The data collector can then review and fix these responses as needed.

**Note**

- For a real-world application, consider adding authentication and more robust error handling.
- The business rules and the response structure can be adjusted according to your specific requirements.

## CRM Management (Task 3)

**Schema**

- `responseId`: Unique identifier for the response.
- `formData` : Stores key-value pairs for each question and answer
- `timestamp`: Time of submission

**Middleware for Google Sheets Integration**

- For the middleware, first need to set up Google Sheets API.
- This requires creating a project in Google Cloud, enabling the Google Sheets API,
  and obtaining credentials (client ID, client secret, etc.).
- Also need to install the `googleapis` package:

       npm install googleapis

- The middleware `/add-response` expects a form response in the request body. It extracts the values from formData and appends them as a new row in a specified Google Sheet.
- Replace `SPREADSHEET_ID` with the actual ID of Google Sheet.
- The range `Sheet1` refers to the first sheet in your Google Sheet.
  We can modify this based on the sheet's structure.

**Note**

- Here authentication with Google's API is required.
- Also need to use OAuth2 or a service account for authorization.

## SMS Services (Task 4)

1.  Amazon SNS Servies
2.  Twillio

**Schema**

- `responseId` : Unique identifier for the response.
- `customerName` : Name of User,
- `phoneNumber` : Phone Number is important for sending SMS
- `responseDetails` : Stores all other response details
- `timestamp` : Time of Submission of form

**Middleware for Sending SMS**

- To send SMS, we'll use Twilio, a popular third-party service for sending text messages.
- First, you need to set up a Twilio account and obtain your Account SID, Auth Token, and a Twilio phone number.

- Install the Twilio npm package:

      npm install twilio

- The `/ingest-response` middleware handles the ingestion of the customer's response.
- It saves the response in the database and then sends an SMS to the customer using Twilio.
- The SMS content includes a thank-you note and the details of their response, serving as a receipt of their participation.

**Note**

- Replace `TWILIO_ACCOUNT_SID`, `TWILIO_AUTH_TOKEN`, and `TWILIO_PHONE_NUMBER` with actual Twilio credentials.
