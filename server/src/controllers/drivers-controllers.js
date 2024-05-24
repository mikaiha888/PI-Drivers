const axios = require("axios");
const { Driver, Team } = require("../db");
const { Op } = require("sequelize");

const URL = "http://localhost:5000/drivers";
const DEFAULT_IMAGE = "";

const getAllDriversController = async () => {
  try {
    const drivers = (await axios.get(URL)).data;
    return drivers.map((driver) => {
      return {
        id: driver.id,
        firstName: driver.name.forename,
        lastName: driver.name.surname,
        dateOfBirth: driver.dob,
        nationality: driver.nationality,
        description: driver.description,
        image: driver.image ? driver.image.url : DEFAULT_IMAGE,
      };
    });
  } catch (error) {
    throw error;
  }
};

const getDriverByIdController = async (id, source) => {
  try {
    let driver;
    if (source === "api") driver = (await axios.get(`${URL}/${id}`)).data;
    if (source === "db")
      driver = Driver.findByPk(id, { include: [{ model: Team, as: "teams" }] });
    if (!driver.image) driver.image = DEFAULT_IMAGE;
    return driver;
  } catch (error) {
    throw error;
  }
};

const getDriversByNameController = async (name) => {
  try {
    const apiDrivers = await Promise.all(
      (
        await getAllDriversController()
      ).filter((d) => d.name.forename.toLowerCase().includes(name))
    );
    const dbDrivers = await Driver.findAll({
      where: { firstName: { [Op.iLike]: `%${name}%` } },
      include: [{ model: Team, as: "teams" }],
    });
    return [...new Set([...apiDrivers, ...dbDrivers])];
  } catch (error) {
    throw error;
  }
};

const createDriverController = async (newDriverData) => {
  try {
    const [newDriver] = await Driver.findOrCreate({
      where: {
        firstName: newDriverData.firstName,
        lastName: newDriverData.lastName,
      },
      defaults: {
        dateOfBirth: newDriverData.dateOfBirth,
        nationality: newDriverData.nationality,
        description: newDriverData.description,
        image: newDriverData.image,
      },
    });
    const [newTeam] = await Team.findOrCreate({
      where: {
        name: newDriverData.team,
      },
    });
    await newDriver.addTeam(newTeam);
    return {
      ...newDriver.dataValues,
      teams: [newTeam],
    };
  } catch (error) {
    throw error;
  }
};

const updateDriverController = async () => {
  try {
  } catch (error) {
    throw error;
  }
};

const deleteDriverController = async () => {
  try {
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllDriversController,
  getDriverByIdController,
  getDriversByNameController,
  createDriverController,
  updateDriverController,
  deleteDriverController,
};
