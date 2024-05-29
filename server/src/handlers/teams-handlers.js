const { getAllTeamsController } = require("../controllers/teams-controllers");

const getAllTeams = async (req, res) => {
  try {
    const response = await getAllTeamsController();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  getAllTeams,
};
