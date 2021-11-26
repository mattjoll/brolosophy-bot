const { Client, Intents } = require('discord.js');
const { CommandUtils } = require('./commands/command.utils.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once('ready', () => console.log('BroBot is online!'));

if (process.argv[2] === 'true') {
  CommandUtils.setUpCommands();
}

client.on(
  'interactionCreate',
  async (interaction) => await CommandUtils.handleInteraction(interaction)
);

const token = process.env.DISCORD_TOKEN;
client.login(token);
