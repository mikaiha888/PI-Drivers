const axios = require("axios");

const DEFAULT_IMAGE_PATH =
  "https://www.palomacornejo.com/wp-content/uploads/2021/08/no-image.jpg";

const getImage = async (url) => {
  try {
    await axios.head(url);
    return url;
  } catch (error) {
    return DEFAULT_IMAGE_PATH;
  }
};

module.exports = {
    getImage
};
