const { Router } = require('express')
const { getAllTeams } = require('../handlers/teams-handlers')

const teamsRouter = Router();
// teamsRouter.get('/search');
teamsRouter.get('/', getAllTeams);
// teamsRouter.get('/:id');
// teamsRouter.post('/');
// teamsRouter.put('/');
// teamsRouter.delete('/');


module.exports = teamsRouter;
