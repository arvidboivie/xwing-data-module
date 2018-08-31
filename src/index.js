const xwingDataPath = "../xwing-data2/";
const manifest = require(xwingDataPath + "data/manifest.json");

function getUpgrades() {
  var upgrades = {};
  
  for (let upgrade of manifest.upgrades) {
    let n = upgrade.lastIndexOf('/');

    let upgradeSlot = upgrade.substring(n + 1, upgrade.length - 5);

    upgradeSlot = upgradeSlot.replace('-', '_');

    upgrades[upgradeSlot] = require(xwingDataPath + upgrade);
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