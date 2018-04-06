const supportedColors = require("./src/supportedColors");
const colorGenerator = require("./src/colorGenerator");

module.exports = {
  getRandomColor: colorGenerator.getRandomColor,
  getRandomShade: colorGenerator.getRandomShade,
  colors: supportedColors
}