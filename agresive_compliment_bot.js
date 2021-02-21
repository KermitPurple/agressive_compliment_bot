require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();

let complements = [
    'a',
    'b',
    'c',
];

client.on('message', message=>{
    if(message.content.toLowerCase() === 'r@t')
        message.channel.send(complements[Math.floor(Math.random() * complements.length)]);
});

client.login(process.env.TOKEN)
