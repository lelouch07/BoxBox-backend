import express from 'express';
// import connectToDatabase from './middleware/MongodbConnection';
import mongoose from 'mongoose';
import User from './Models/userSchema';
import Comment from './Models/commentSchema';
import News from './Models/newsSchema';

const app = express();


// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/Formula1')
    .then(() => console.log('Connected to mongoDB..'))
    .catch(err => console.error('Could not connect to mongoDB'));


const PORT = 3000;

app.get('/', async(req, res) => {
    const news=await News.find();
    res.send(news);
});

    
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});