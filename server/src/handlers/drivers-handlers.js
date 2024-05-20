const {
    getAllDrivers,
} = require('../controllers/drivers-controllers')

const getAllDrivers = async (req, res) => {
    try {
        const response = await getAllDrivers();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports = {

}