const { Client, Intents } = require('discord.js');
const { CommandUtils } = require('./commands/command.utils.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once('ready', () => console.log('BroBot is online!'));

// If true is passed as an argument, we set up any new or updated global commands.
if (process.argv[2] === 'true') {
  CommandUtils.setUpGlobalCommands();
}

client.on(
  'interactionCreate',
  async (interaction) =>
    await CommandUtils.handleInteractionAsCommand(interaction)
);

const token = process.env.DISCORD_TOKEN;
client.login(token);
