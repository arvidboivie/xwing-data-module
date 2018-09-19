const xwingDataPath = "../xwing-data2/";
const manifest = require(xwingDataPath + "data/manifest.json");

function getUpgrades() {
  var upgrades = [];
  
  for (let upgrade of manifest.upgrades) {
    let upgradeArray = require(xwingDataPath + upgrade)

    upgrades = upgrades.concat(upgradeArray);
  }

  return upgrades;
}

function getPilots() {
  var pilots = [];

  for (let faction of manifest.pilots) {
    for (let ship of faction.ships) {
      pilots.push(require(xwingDataPath + ship));
    }
  }

  return pilots;
}

const conditions = require(xwingDataPath + manifest.conditions);
const damageDeckCore = require(xwingDataPath + manifest.damagedecks[0]);
const pilots = getPilots();
const upgrades = getUpgrades();

const data = {
  conditions,
  damageDeckCore,
  pilots,
  upgrades
};

module.exports = {
  conditions,
  damageDeckCore,
  pilots,
  upgrades
};