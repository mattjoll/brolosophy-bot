const { Client, Intents } = require('discord.js');
const { setUpCommands } = require('./commands/commands.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once('ready', () => console.log('BroBot is online!'));

if (process.argv[2] === 'true') {
  setUpCommands();
}

const token = process.env.DISCORD_TOKEN;
client.login(token);
