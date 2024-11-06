require('colors');

const delay = async (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function displayHeader() {
    process.stdout.write('\x1Bc');
    console.log('========================================'.cyan);
    console.log('=       Grass Airdrop Bot - V2          ='.cyan);
    console.log('=       Created by Looters Era          ='.cyan);
    console.log('=     https://t.me/LootersEra_th        ='.cyan);
    console.log('========================================'.cyan);
    console.log();
  }

module.exports = { delay, displayHeader };
