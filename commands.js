const Discord = require('discord.js');
const {prefix, token, geral, 
    teste, supimpa} = require('./config.json');
const bot = new Discord.Client();
const fs = require('fs');
const ytdl = require('ytdl-core')
/*
const testCh = '824035075654025286';
let geral = '741240735340167208';
const supimpa = '814944768294649886';
*/

bot.on('message', async message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    
    const args = message.content.slice(prefix.length).trim().split(' ');
    const command = args.shift().toLowerCase();
    const join = args.join(" ");
    

    if(command === 'say') {
        const mentioned = message.mentions.users.first();

        if(!mentioned) {
            bot.channels.fetch(geral).then(channel => {
                channel.send(join);
                message.delete();
            }); 
            
        } else {
            let nomentioned = join.slice(mentioned.toString.length);
            mentioned.send(nomentioned);
            message.delete();
            
        }
        
    }

    if(command === 'roll' && message.content.endsWith(':')) {
        let random = message.guild.members.cache.random();
        message.channel.send(`${join} ${random}`);
    }

    if(command === 'icon') {
        const iconuser = message.mentions.users.first();
        if(!iconuser) return message.reply("mencione alguem para conseguir o icon dessa pessoa");
        const embed = new Discord.MessageEmbed()
        .setImage(iconuser.avatarURL())
        .setColor('#800080')
        .setAuthor(iconuser.username)
        .setDescription(`${iconuser.username}'s icon`)
        message.reply(embed);
        message.delete()
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
