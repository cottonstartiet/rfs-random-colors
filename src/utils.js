module.exports = {
  randomProperty(obj) {
    const keys = Object.keys(obj);
    return keys[keys.length * Math.random() << 0];
  }
}