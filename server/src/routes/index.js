const { Router } = require("express");
const driversRouter = require("./driversRouter");
const teamsRouter = require("./teamsRouters");

const router = Router();
router.use('/drivers', driversRouter)
router.use('/teams', teamsRouter)

module.exports = router;