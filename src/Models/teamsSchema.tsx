import mongoose, { Schema, Document } from 'mongoose';

interface ITeams extends Document {
   
    TeamName: string;
    KeyWords: string[];
    Drivers: string[];
   
}

const TeamsSchema: Schema = new Schema({
    
    TeamName: { type: String, required: true },
    KeyWords: [{ type: String }],
    Drivers: [{ type: String }],
    
});

const Teams = mongoose.model<ITeams>('teams', TeamsSchema);

export default Teams;
