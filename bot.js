const Discord = require('discord.js');
const {prefix, token, geral, 
    teste, supimpa} = require('./config.json');
const bot = new Discord.Client();
/*
const testCh = '824035075654025286';
const geral = '741240735340167208';
const supimpa = '814944768294649886';
*/

bot.once('ready', () => {
    console.log('ready');
    bot.user.setPresence({
        status: 'online',
        activity: {
            name: 'Fortnite',
            type: 'PLAYING',
        }
    })
    
})

const utility = require('./utility');
const funcommands = require('./funcommands');

bot.on('guildMemberAdd', member => {
    const canal = member.guild.channels.cache.find(ch => ch.id === geral);
    if(!canal) return;

    canal.send(`<@${member.id}> fala mano, beleza?`)
})

bot.login(token);