const Discord = require('discord.js');
const commando =require('discord.js-commando');
const bot = new Discord.Client();
const bot = new commando.Client();

bot.on('ready', () => {
    console.log('Leenus from LDT Here!');
  });

bot.on('message', (message) => {
    if(message.content == '!test') {
        message.channel.sendMessage('No GPUs Dropped Here!');
    }
});

bot.on('message', (message) => {
    if(message.content == '!version') {
        message.channel.sendMessage('LeenusBot Ver. 0.1');
    }
});

bot.on('message', (message) => {
    if(message.content == '!greet') {
        message.channel.sendMessage('Welcome to The Server');
    }
});

bot.on('message', (message) => {
    if(message.content == '!quote') {
        any(message.channel.sendMessage)
    }
});

bot.login('NDE5NTg0NTY0MzgyNDAwNTE0.DXyQIw.B4LrVKDMrygXPGwHzf1OWIoXJbI')