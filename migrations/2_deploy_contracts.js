var CMCOracle = artifacts.require("./CMCOracle.sol");

module.exports = function(deployer) {
  deployer.deploy(CMCOracle);
};