import mongoose, { Schema, Document } from 'mongoose';

interface INewsArticle extends Document {
    author:string;
    title: string;
    content: string;
    teamName:string;
    description:string;
    url:string;
    urlToImage:string;
    publishedAt:Date,
    comments: mongoose.Types.ObjectId[]; // References to Comment
}

const NewsArticleSchema: Schema = new Schema({
    author:{type:String , required:true},
    title: { type: String, required: true },
    content: { type: String, required: true },
    teamName: { type: String, required: true },
    description: { type: String, required: true },
    url: { type: String, required: true },
    urlToImage: { type: String},
    publishedAt: { type: Date, required: true },
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
});

const NewsArticle = mongoose.model<INewsArticle>('NewsArticle', NewsArticleSchema);

export default NewsArticle;
