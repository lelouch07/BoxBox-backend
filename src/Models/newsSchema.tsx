import mongoose, { Schema, Document } from 'mongoose';

interface INewsArticle extends Document {
    author:string;
    title: string;
    content: string;
    tags:string[];
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
    tags: [{ type: String}],
    urlToImage: { type: String},
    publishedAt: { type: Date, required: true },
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
});

const NewsArticle = mongoose.model<INewsArticle>('NewsArticle', NewsArticleSchema);

export default NewsArticle;
