const PROTtoken = artifacts.require("PROTtoken");

module.exports = function(deployer) {
  deployer.deploy(PROTtoken);
};
