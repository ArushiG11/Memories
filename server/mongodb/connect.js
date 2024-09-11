import mongoose from 'mongoose'; //modeling library for mongodb to make models easily

const connectDB = (CONNECTION_URL) => {

    // mongoose to connect to our database
    mongoose.connect(CONNECTION_URL) 
        .then(() => console.log('MongoDB conneted')) // if our connection is successful it listens
        .catch((error) => console.log(error.message));

    mongoose.set('strictQuery', false);
}

export default connectDB;