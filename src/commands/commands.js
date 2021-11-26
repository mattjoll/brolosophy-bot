const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { PingCommand } = require('./ping.command');

const supportedCommands = [new PingCommand()];

const setUpCommands = () => {
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
};

exports.setUpCommands = setUpCommands;
