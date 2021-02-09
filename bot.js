const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', _=>{
  console.log('ready');
});

client.on('message', msg => {
  if (msg.content == 'worship') {
    msg.channel.send('all hail the dna ordinal');
  }
})

client.login(process.env.TOKEN);
