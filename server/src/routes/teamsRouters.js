const { Router } = require('express')

const teamsRouter = Router();
teamsRouter.get('/search');
teamsRouter.get('/');
teamsRouter.get('/:id');
teamsRouter.post('/');
teamsRouter.put('/');
teamsRouter.delete('/');


module.exports = teamsRouter;
