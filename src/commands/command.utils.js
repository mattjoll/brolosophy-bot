const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { PingCommand } = require('./ping.command');

const supportedCommands = [new PingCommand()];

class CommandUtils {
  static async handleInteraction(interaction) {
    if (!interaction.isCommand()) return;

    const { commandName } = interaction;
    const command = supportedCommands.find((c) => c.name === commandName);

    await command.handle(interaction);
  }

  static setUpCommands() {
    const commandsToSetUp = [];

    supportedCommands.forEach((command) => {
      commandsToSetUp.push(command.register());
    });

    const token = process.env.DISCORD_TOKEN || '';
    const appId = process.env.DISCORD_APP_ID || '';
    const rest = new REST({ version: '9' }).setToken(token);

    rest
      .put(Routes.applicationCommands(appId), { body: commandsToSetUp })
      .then(() => console.log('Set up commands.'))
      .catch(console.error);
  }
}

exports.CommandUtils = CommandUtils;
