const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', _=>{
  console.log('ready');
});

client.on('message', msg => {
  if (msg.content.slice(0, 7) == 'worship') {
    message.channel.send('all hail the dna ordinal');
  }
})
