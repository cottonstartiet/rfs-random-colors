const colors = require("./colors.json");
const utils = require("./utils");

module.exports = {
  getRandomColor() {
    const color = utils.randomProperty(colors);
    return module.exports.getRandomShade(color);
  },
  getRandomShade(color) {
    if (!color || Object.keys(colors).indexOf(color) === -1) {
      throw new Error(`Color value is not supported`);
    }

    return utils.randomProperty(colors[color].shades);
  }
}