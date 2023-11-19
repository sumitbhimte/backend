import express from "express";

//databse config
connectDB();

//rest object
const app = express();


//PORT
const PORT = 8080;

//run listen
app.listen(PORT, () => {
    console.log(
        `Server Running on ${process.DEV_MODE} mode on port ${PORT}`.bgCyan
            .white
    );
});