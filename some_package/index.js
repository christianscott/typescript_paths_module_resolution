const base = require('base');

module.exports.talkAboutTheBasePackage = function() {
  try {
    return `The base package says: ${base.iAmTheNodeModulesBasePackage()}`;
  } catch (error) {
    console.log(base);
    throw error;
  }
}
