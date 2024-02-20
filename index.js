require('dotenv/config');
const { Client, GatewayIntentBits, Partials } = require('discord.js');
const { CommandHandler } = require('djs-commander');
const path = require('path')

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
    partials: [
        Partials.User,
        Partials.Message,
        Partials.ThreadMember,
        Partials.Channel,
    ]
});

new CommandHandler({
client,
eventsPath: path.join(__dirname, 'events'),
commandsPath: path.join(__dirname, 'commands'),
})
    client.login(process.env.TOKEN);