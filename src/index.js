import { Client, Intents } from 'discord.js';

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once('ready', () => console.log('BroBot is online!'));

const token = process.env.DISCORD_TOKEN;
client.login(token);
