const { Router } = require("express");
const {
  getAllDrivers,
  getDriverById,
  getDriversByName,
  createDriver,
  updateDriver,
  deleteDriver,
} = require("../handlers/drivers-handlers");

const driversRouter = Router();
driversRouter.get("/search", getDriversByName);
driversRouter.get("/", getAllDrivers);
driversRouter.get("/:id", getDriverById);
driversRouter.post("/", createDriver);
driversRouter.put("/", updateDriver);
driversRouter.delete("/", deleteDriver);

module.exports = driversRouter;
