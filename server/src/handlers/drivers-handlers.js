const {
  getAllDriversController,
  getDriverByIdController,
  getDriversByNameController,
  createDriverController,
  updateDriverController,
  deleteDriverController,
} = require("../controllers/drivers-controllers");

const getAllDrivers = async (req, res) => {
  try {
    const response = await getAllDriversController();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getDriverById = async (req, res) => {
  try {
    const { id } = req.params;
    const source = isNaN(id) ? "db" : "api";
    const response = await getDriverByIdController(id, source);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getDriversByName = async (req, res) => {
  try {
    const name = req.query.name.toLowerCase();
    if (!name) res.status(400).send("Faltan datos");
    const response = await getDriversByNameController(name);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const createDriver = async (req, res) => {
  try {
    const newDriver = req.body;
    for (const key in newDriver) {
      if (!key) 
        res.status(400).send("Faltan datos");
    }
    const response = await createDriverController(newDriver);
    res.status(201).json(response);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const updateDriver = async (req, res) => {
  try {
    const updatedDriver = req.body;
    for (const key in updatedDriver) {
      if (!key) 
        res.status(400).send("Faltan datos");
    }
    const response = await createDriverController(updatedDriver);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const deleteDriver = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await deleteDriverController(id);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  getAllDrivers,
  getDriverById,
  getDriversByName,
  createDriver,
  updateDriver,
  deleteDriver,
};
