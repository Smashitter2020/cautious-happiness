// script.js
let coins = 0;
let helpers = 0;
let helperCost = 50;

document.getElementById('earn').addEventListener('click', () => {
  coins++;
  updateUI();
});

document.getElementById('buy-helper').addEventListener('click', () => {
  if (coins >= helperCost) {
    coins -= helperCost;
    helpers++;
    updateUI();
  }
});

function updateUI() {
  document.getElementById('coins').textContent = coins;
  document.getElementById('helpers').textContent = helpers;
}

// Helpers earn coins every 2 seconds
setInterval(() => {
  coins += helpers;
  updateUI();
}, 2000);
