const Discord = require('discord.js');
const {prefix, token} = require('./config.json');
const bot = new Discord.Client();
const testCh = bot.channels.fetch('824035075654025286');
var yon = '';

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms)).catch();
}

bot.on('message', msg => {
    if(msg.content.toLowerCase() === '!stop') {
        yon = 'exit';
        testCh.then((channel) => {
            channel.send('stopped!')
        });
    }
})

async function start() {
    var x = setInterval(function() {
        if(yon === 'exit') {
            clearInterval(x);
        }
        testCh.then((channel) => {
            channel.send('!roleta')
        });
    }, 30400);

    var y = setInterval(function() {
        if(yon === 'exit') {
            clearInterval(y);
        }
        testCh.then((channel) => {
            channel.send('!pescar')
        });
    }, 10300);
    
}

module.exports = {
    start: function () {
      start();
    },
  };

bot.login(token);