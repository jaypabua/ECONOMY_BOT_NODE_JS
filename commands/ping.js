const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Replies with a user ms!'),

    run: async ({ client, interaction }) => {
        await interaction.reply(`Pong! {client.ws.ping}ms.`);
    }
}