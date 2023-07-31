import mongoose, { Schema, Document } from 'mongoose';

interface IComment extends Document {
    content: string;
    user: mongoose.Types.ObjectId;
    article: mongoose.Types.ObjectId;
}

const CommentSchema: Schema = new Schema({
    content: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    article: { type: Schema.Types.ObjectId, ref: 'NewsArticle', required: true },
});

const Comment = mongoose.model<IComment>('Comment', CommentSchema);

export default Comment;
