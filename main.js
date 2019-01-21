var gameData = {
    gold: 0,
    money: 0,
    goldPerSecond: 0,
    goldPerClick: 1,
    goldPerClickCost: 10,
    moneyPerGold: 3,
    miners: 0,
    minersCost: 750,
    minersGoldPerSecond: 1,
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
var mainGameLoop = window.setInterval(function() {
  gameData.gold += gameData.goldPerSecond / 20
  document.getElementById("goldMined").innerHTML = Math.floor(gameData.gold) + " Gold Mined"
}, 50)