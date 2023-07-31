import express from 'express';
// import connectToDatabase from './middleware/MongodbConnection';
import mongoose from 'mongoose';
import User from './Models/userSchema';
import Comment from './Models/commentSchema';
import newsRouter from './routes/news';
const app = express();




// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/Formula1')
    .then(() => console.log('Connected to mongoDB..'))
    .catch(err => console.error('Could not connect to mongoDB'));



app.use('/api/news',newsRouter);


const PORT = 3000;




// app.get('/api/news/:teamName', async(req, res) => {
//     const teamName=req.params.teamName;
//     const keys=await Teams.findOne({TeamName:teamName},{KeyWords:1});
//     const news=await News.find({tags :{$in : keys?.KeyWords}});
//     res.send(news);
// });

    
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});