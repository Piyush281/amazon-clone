require('dotenv').config()

const functions = require("firebase-functions");
const express= require("express");
const cors = require("cors");

const stripe = require("stripe")(process.env.REACT_APP_SECRET_NAME);

// api

// App config
const app = express();

// Middleawres
app.use(cors({originv: true}));
app.use(express.json());

// api route

app.get("/", (request, response) => response.status(200).send("Hello Workd"));

app.post("/payments/create", async (request, response) => {
    const total = request.query.total

    console.log("Payment request received >>", total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency:"usd",
    });

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });

})
// listen command
exports.api = functions.https.onRequest(app);

// http://localhost:5001/clone-ce98f/us-central1/api
