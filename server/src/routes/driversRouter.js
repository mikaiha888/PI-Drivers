const { Router } = require('express')

const driversRouter = Router();
driversRouter.get('/search');
driversRouter.get('/');
driversRouter.get('/:id');
driversRouter.post('/');
driversRouter.put('/');
driversRouter.delete('/');

module.exports = driversRouter;