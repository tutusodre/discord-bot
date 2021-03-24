const Discord = require('discord.js');
const config = require('./config.json');
const bot = new Discord.Client();
const testCh = '824035075654025286';
let geral = '741240735340167208';
const supimpa = '814944768294649886';

const farm = require('./farm');
bot.once('ready', () => {
    console.log('ready');
    bot.user.setPresence( {
        type: "PLAYING",
        name: 'osu!'
        //url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    });
})

bot.on('message', async msg => {
    if(msg.author.bot) return;
    if (!message.content.startsWith(config.prefix)) return;
    const user = msg.mentions.users.first();
    
    if(!user) {
        return;
    }
    
    let status = msg.guild.members.cache.get('333078725866291201').presence.status;
    if(user.id === '333078725866291201') {
        if(status === 'idle') {
            msg.channel.send('malk está ausente agora');
        } else if(status === 'dnd') {
            msg.channel.send('malk está ocupado agora');
        }
        
    }
    
    const args = msg.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    const join = args.join(" ");
    if(command === 'say') {
        msg.channel.send('sending...');
        bot.channels.fetch('741240735340167208').then(channel => {
            channel.send(join);  
        }); 
    }
    
});

bot.login(config.token);