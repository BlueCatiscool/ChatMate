const Discord = require('discord.js');
const client = new Discord.Client({ intents: 32767 });
const prefix = '!';

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on('messageCreate', async (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === 'echo') {
    const text = args.join(' ');
    await message.channel.send(text);
  }
});

client.login('MTA5MjAwMTI4ODc0NjcwMDgyMA.GYvkvU.k7Kpi0WfxdbIWsblloKMr0ZxX3QvxnoJUv9dyQ');