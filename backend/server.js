const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
const port = process.env.PORT || 5000;

connectDB();

const app = express();

// middleware that allows us to use body data from put requests
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// establish and use the /api/babies route from the babyroutes.js file which uses babyControllers file
app.use("/api/babies", require("./routes/babyRoutes"));

// middleware that overrides express error handling and returns stack info if theres an error
app.use(errorHandler);

app.listen(port, () => console.log(`server started on port ${port}`));
