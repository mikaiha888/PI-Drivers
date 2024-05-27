const axios = require("axios");
const { Driver, Team } = require("../db");
const { Op } = require("sequelize");
const { getImage } = require("./utils");

const URL = "http://localhost:5000/drivers";

const getAllDriversController = async () => {
  try {
    const drivers = (await axios.get(URL)).data;
    return await Promise.all(
      drivers
        .filter((driver) => driver.id < 100)
        .map(async (driver) => {
          driver.image = await getImage(driver.image.url);
          return {
            id: driver.id,
            firstName: driver.name.forename,
            lastName: driver.name.surname,
            dateOfBirth: driver.dob,
            nationality: driver.nationality,
            description: driver.description,
            image: driver.image,
            teams: driver.teams?.split(/,\s*/),
          };
        })
    );
  } catch (error) {
    throw error;
  }
};

const getDriverByIdController = async (id, source) => {
  try {
    let driver;
    if (source === "db") {
      driver = await Driver.findByPk(id, {
        include: [{ model: Team, as: "teams" }],
      });
      console.log(driver);
      return {
        id: driver.id,
        firstName: driver.firstName,
        lastName: driver.lastName,
        dateOfBirth: driver.dateOfBirth,
        nationality: driver.nationality,
        description: driver.description,
        image: driver.image,
        teams: driver.teams.map((team) => {
          return { id: team.id, name: team.name };
        }),
      };
    }
    if (source === "api") {
      driver = (await axios.get(`${URL}/${id}`)).data;
      return {
        id: driver.id,
        firstName: driver.name.forename,
        lastName: driver.name.surname,
        dateOfBirth: driver.dob,
        nationality: driver.nationality,
        description: driver.description,
        image: driver.image ? driver.image.url : DEFAULT_IMAGE,
        teams: driver.teams?.split(/,\s*/),
      };
    }
  } catch (error) {
    throw error;
  }
};

const getDriversByNameController = async (name) => {
  try {
    const apiDrivers = await Promise.all(
      (
        await getAllDriversController()
      ).filter((d) => d.firstName.toLowerCase().includes(name))
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
        name: newDriverData.teams,
      },
    });
    console.log(newTeam);
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
