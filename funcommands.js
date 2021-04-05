const Discord = require('discord.js');
const {prefix, token, geral, 
    teste, supimpa} = require('./config.json');
const bot = new Discord.Client();
const fs = require('fs');
var count = 0;
/*
const testCh = '824035075654025286';
let geral = '741240735340167208';
const supimpa = '814944768294649886';
*/

bot.on('message', async message => {
    if (message.author.bot) return;
    
    const args = message.content.slice(prefix.length).trim().split(' ');
    const command = args.shift().toLowerCase();
    const join = args.join(" ");

    if(command === 'roll' && message.content.endsWith(':')) {
        let random = message.guild.members.cache.random();
        message.channel.send(`${join} ${random}`);
    }

    if(message.content.toLowerCase().includes('acid') && message.content.endsWith('?')) {
        const ee = [];
        for(i = 0; i < 92; i++) {
            ee.push('sim');
        }
        for(j = 0; j < 8; j++) {
            ee.push('não');
        }
        var randnum = Math.floor(Math.random() * ee.length);
        message.channel.send(ee[randnum]);
    }

    if(command === 'brfxxccxxmnpcccclllmmnprxvclmnckssqlbb11116') {
        message.delete();
        message.author.send('PARABÉNS! VOCÊ DESCOBRIU O COMANDO SECRETO!');
        message.author.send('VOCÊ RECEBERÁ SUA RECOMPENSA (500 SUPIMPACOINS) EM BREVE!');
        message.guild.members.cache.get('333078725866291201').send(`${message.author.username} descobriu o comando secreto!`);
    }
    
    if(command === 'spam') {
        const mentioned = message.mentions.users.first();
        mentioned.send(`${message.content.slice(message.content.indexOf(args[2]))}`)
        .then(msg => {
            msg.react('👍');
        });
        var x = setInterval(function() {
            if(count < args[1]-1) {
                mentioned.send(`${message.content.slice(message.content.indexOf(args[2]))}`)
                .then(msg => {
                    msg.react('👍');
                });
                count++;
            } else {
                clearInterval(x);
            }
        }, 3000);
    }
});

bot.on('message', async message => {
    const user = message.mentions.users.first();
    
    if(!user) {
        return;
    }
    
    const status = message.guild.members.cache.get('333078725866291201').presence.status;
    if(user.id === '333078725866291201') {
        if(status === 'idle') {
            message.channel.send('to ausente pera ai');
        } else if(status === 'dnd') {
            message.channel.send('to ocupado pera ai');
        } else if(status === 'offline') {
            message.channel.send('to offline pera ai')
        }
    }
    
    

})

bot.login(token);
