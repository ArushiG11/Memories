import express from 'express';
import * as dotenv from 'dotenv'; // allow us to use environment variables
import bodyParser from 'body-parser';
import connectDB from './mongodb/connect.js';
import postRoutes from './routes/posts.js';
import cors from 'cors';

dotenv.config();
// Initialize the app 
const app = express()

// Setup Body Parser to send our requests
app.use(bodyParser.json({limit:"30mb", extended: true}));
app.use(bodyParser.urlencoded({limit:"30mb", extended: true}));
app.use(cors());

// every route in this starts with /posts
app.use('/posts',postRoutes);

const startServer = async() => {
    try{
        const PORT = process.env.PORT || 8080;
// Connect server applicaton with database. We are using Mongodb (Atlas version(they host our db on their server))
// garushi567 4lQpkFlmslKnv00y
        connectDB(process.env.CONNECTION_URL);
        app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
    } catch(error) {
        console.log(error)
    }
}

startServer();



