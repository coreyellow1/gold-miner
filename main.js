var gameData = {
    gold: 0,
    money: 0,
    goldPerSecond: 0,
    goldPerClick: 1,
    goldPerClickCost: 10,
    goldRefineCost: 1000,
    moneyPerGold: 3,
    miners: 0,
    drills: 0,
    minersCost: 750,
    drillsCost: 5000,
    minersGoldPerSecond: 1,
    drillsGoldPerSecond: 5,
  }
  


function mineGold() {
  gameData.gold += gameData.goldPerClick
  document.getElementById("goldMined").innerHTML = Math.floor(gameData.gold) + " Gold Mined"
}

function sellGold() {
  gameData.money += gameData.moneyPerGold * gameData.gold
  gameData.gold = 0 
  document.getElementById("goldMined").innerHTML = Math.floor(gameData.gold) + " Gold Mined"
  document.getElementById("moneyTotal").innerHTML = "$ " + Math.floor(gameData.money)
}

function buyGoldPerClick() {
  if (gameData.gold >= gameData.goldPerClickCost) {
    gameData.gold -= gameData.goldPerClickCost
    gameData.goldPerClick += 1
    gameData.goldPerClickCost *= 2
    document.getElementById("goldMined").innerHTML = Math.floor(gameData.gold) + " Gold Mined"
    document.getElementById("perClickUpgrade").innerHTML = "Upgrade Pickaxe (Currently Level " + Math.floor(gameData.goldPerClick) + ") Cost: " + Math.floor(gameData.goldPerClickCost) + " Gold"
    }
}

function buyBetterGold() {
  if (gameData.gold >= gameData.goldPerClickCost) {
    gameData.gold -= gameData.goldRefineCost
    gameData.moneyPerGold += 1
    gameData.goldRefineCost *= 10
    document.getElementById("goldMined").innerHTML = Math.floor(gameData.gold) + " Gold Mined"
    document.getElementById("goldUpgrade").innerHTML = "Upgrade Gold Refining (Currently $" + gameData.moneyPerGold + ") Cost: " + Math.floor(gameData.goldRefineCost) + " Gold"
  }
}

function buyMiner() {
  if (gameData.money >= gameData.minersCost) {
    gameData.money -= gameData.minersCost
    gameData.miners += 1
    gameData.minersCost *= 1.15
    gameData.goldPerSecond += gameData.minersGoldPerSecond
    document.getElementById("moneyTotal").innerHTML = "$ " + Math.floor(gameData.money)
    document.getElementById("goldPerSecondTotal").innerHTML = Math.floor(gameData.goldPerSecond) + " gold per second"
    document.getElementById("minersTotal").innerHTML = Math.floor(gameData.miners)
    document.getElementById("minerBuy").innerHTML = "Buy Miner Cost: $" + Math.floor(gameData.minersCost)
  }
}

function buyDrill() {
  if (gameData.money >= gameData.drills) {
    gameData.money -= gameData.drillsCost
    gameData.drills += 1
    gameData.drillsCost *= 1.15
    gameData.goldPerSecond += gameData.drillsGoldPerSecond
    document.getElementById("moneyTotal").innerHTML = "$ " + Math.floor(gameData.money)
    document.getElementById("goldPerSecondTotal").innerHTML = Math.floor(gameData.goldPerSecond) + " gold per second"
    document.getElementById("drillsTotal").innerHTML = Math.floor(gameData.drills)
    document.getElementById("drillBuy").innerHTML = "Buy Drill Cost: $" + Math.floor(gameData.drillsCost)
  }
}
var mainGameLoop = window.setInterval(function() {
  gameData.gold += gameData.goldPerSecond / 20
  document.getElementById("goldMined").innerHTML = Math.floor(gameData.gold) + " Gold Mined"
  document.getElementById("moneyTotal").innerHTML = "$ " + Math.floor(gameData.money)
}, 50)