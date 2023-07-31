// teamsRouter.ts
import News from '../Models/newsSchema';
import Teams from '../Models/teamsSchema';
import express from 'express';
const newsRouter = express.Router();

// Define routes for the "teams" module


newsRouter.get('/:teamName', async(req, res) => {
    const teamName = req.params.teamName;
    const keys = await Teams.findOne({ TeamName: teamName }, { KeyWords: 1 });
    const news = await News.find({ tags: { $in: keys?.KeyWords } });
    res.send(news);
    // Route logic for getting a specific team by ID
});

// Add more routes as needed for teams

export default newsRouter;
