const { SlashCommandBuilder } = require('@discordjs/builders');

class PingCommand {
  constructor() {
    this.description = 'Replies with Pong!';
    this.name = 'ping';
  }

  async handle(interaction) {
    await interaction.reply('Pong!');
  }

  register() {
    const commandBuilder = new SlashCommandBuilder()
      .setName(this.name)
      .setDescription(this.description);
    return commandBuilder.toJSON();
  }
}

exports.PingCommand = PingCommand;
