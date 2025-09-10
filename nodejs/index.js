import dotenv from "dotenv";
import app from ".server.js";
import mongodb from "mongodb";
import ReviewsDAO from "./dao/reviewsDAO.js";

dotenv.config();

const MongoClient = mongodb.MongoClient;
const mongo_username = process.env.MONGO_USERNAME
const mongo_password = process.env.MONGO_PASSWORD
const uri = `mongodb+srv://${mongo_username}:${mongo_password}@cluster0.d6fuskq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

const port = 8000;

MongoClient.connect(
    uri,
    {
        maxPoolSize: 50, // maximum number of connections in the website at one time
        wtimeoutMS: 2500, // the amount of time (in milliseconds) to wait for a write operation to complete before returning an error
        useNewUrlParser: true
    }
)
    .catch(err => {
        console.error(err.stack)
        process.exit(1)
    })