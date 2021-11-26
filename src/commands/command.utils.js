const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { PingCommand } = require('./ping.command');

const supportedCommands = [new PingCommand()];

/**
 * Utilities used for setting up and handling bot commands.
 */
class CommandUtils {
  /**
   * Handle an incoming interaction as a command. If the interaction it not a command, do nothing.
   * @param {Interaction<CacheType>} interaction - The interaction received by the bot.
   */
  static async handleInteractionAsCommand(interaction) {
    if (!interaction.isCommand()) return;

    const { commandName } = interaction;
    const command = supportedCommands.find((c) => c.name === commandName);

    await command.handle(interaction);
  }

  /**
   * Create or update all global commands currently supported by the bot.
   */
  static setUpGlobalCommands() {
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
