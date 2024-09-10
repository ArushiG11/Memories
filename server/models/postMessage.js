import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
});

//we created a model for that schema
const postMessage = mongoose.model('postMessage', postSchema);

// we are exporting the mongoose model from post message file and on that model we can run commad like create update delete
export default postMessage;