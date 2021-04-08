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
    //if (!message.content.startsWith(prefix) || message.author.bot) return;
    
    const args = message.content.slice(prefix.length).trim().split(' ');
    const command = args.shift().toLowerCase();
    const join = args.join(" ");


    if(command === 'say') {
        const mentioned = message.mentions.users.first();

        if(!mentioned && (!message.content.includes('random'))) {
            bot.channels.fetch(geral).then(channel => {
                channel.send(join);
                message.delete();
            });       
        } else if(mentioned){
            let nomentioned = join.slice(mentioned.toString.length);
            mentioned.send(nomentioned);
            message.delete();
        } else if(message.content.toLowerCase().includes('random')) {
            let random = message.guild.members.cache.random();
            random.send(join.replace('random', ''));
            message.channel
            .send(`mensagem enviada para: <@${random.id}>: ${join.replace('random', '')}`)
            .then(msg => {
                msg.delete({ timeout: 3000 })
            });
            message.delete();
        }
    }

    if(command == 'calc') {
        const num1 = parseInt(args[0]);
        const num2 = parseInt(args[2]);
        const conta = message.content.slice(6) + ' = ';
        switch(args[1]) {
            case "+":
                message.channel.send(conta + (num1 + num2));
                break;
            case "-":
                message.channel.send(conta + (num1 - num2));
                break;
            case "*":
                message.channel.send(conta + (num1 * num2));
                break;
            case "/":
                message.channel.send(conta + (num1 / num2));
                break;
            
            default:
                message.channel.send("não foi possivel fazer o calculo.");
        }
    }

    if(command === 'comandos') {
        const embed = new Discord.MessageEmbed()
        .setTitle('Comandos do AcidBot:')
        .setDescription('!say {mensagem}\n!say @membro {mensagem}\n!say random {mensagem}\n!icon @membro\n!roll {mensagem}:\n!github\n!spam @membro (vezes) {mensagem}\n!kick @membro (só mods)\n!calc {conta}\n!brasil')
        .setColor('#800080')
        .setImage(bot.user.avatarURL());
        message.channel.send(embed);
    }

    if(command === 'kick') {
        if(message.member.hasPermission("KICK_MEMBERS")) {
            if(message.mentions.users.first()) {
                let member = message.guild.member(message.mentions.users.first());
                member.kick().then(() => {
                    message.channel.send(`${message.mentions.users.first().username} foi kickado 😳`);
                });
            }
        } else {
            message.reply('não!');
        }
    }

    if(command === 'icon') {
        const iconuser = message.mentions.users.first();
        if(!iconuser) return message.reply("mencione alguem para conseguir o icon dessa pessoa");
        let embed = new Discord.MessageEmbed()
        .setImage(iconuser.avatarURL())
        .setColor('#800080')
        .setAuthor(iconuser.username)
        .setDescription(`${iconuser.username}'s icon`)
        message.reply(embed);
        message.delete()
    }

    if(command === 'elon_r_u_ok') {
        message.delete();
        message.channel.send('About a year ago, Elon Musk was sitting in traffic in Los Angeles, and thought about how cool it would be if he built a tunnel under the city. So he built a tunnel under the city. And he started selling hats for his tunnel. Fifty thousand hats later, he got bored with hats, and switched the hats out for flamethrowers. He sold twenty thousand of those, and then five days later he tied his car up to the most powerful rocket ever made, and shot it into fucking space. And then the rocket fucking landed itself.')
        .then(msg => {
            msg.delete( {timeout: 5000} );
        })
    }

    if(command === 'github') {
        message.channel.send('https://github.com/tutusodre/discord-bot');
    }
});

bot.login(token);