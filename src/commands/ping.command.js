const { SlashCommandBuilder } = require('@discordjs/builders');

class PingCommand {
  constructor() {
    this.description = 'Replies with Pong!';
    this.name = 'ping';
  }

  register() {
    const commandBuilder = new SlashCommandBuilder()
      .setName(this.name)
      .setDescription(this.description);
    return commandBuilder.toJSON();
  }
}

exports.PingCommand = PingCommand;
