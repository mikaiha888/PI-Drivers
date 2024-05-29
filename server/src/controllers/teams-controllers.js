const axios = require("axios");
const { Driver, Team } = require("../db");
const { getAllDriversController } = require("./drivers-controllers");

const URL = "http://localhost:5000/drivers";

const getAllTeamsController = async () => {
  try {
    const teams = (await getAllDriversController()).map(
      (driver) => driver.teams
    ).flat();
    return [...new Set(teams)].filter(team => team);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllTeamsController,
};
