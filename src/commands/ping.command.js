const { SlashCommandBuilder } = require('@discordjs/builders');

/**
 * The ping command.
 */
class PingCommand {
  constructor() {
    this.description = 'Replies with Pong!';
    this.name = 'ping';
  }

  /**
   * Handle the invocation of the ping command.
   * @param {Interaction<CacheType>} interaction
   */
  async handle(interaction) {
    await interaction.reply('Pong!');
  }

  /**
   * Register the ping command.
   * @returns The ping command data as JSON.
   */
  register() {
    const commandBuilder = new SlashCommandBuilder()
      .setName(this.name)
      .setDescription(this.description);
    return commandBuilder.toJSON();
  }
}

exports.PingCommand = PingCommand;
