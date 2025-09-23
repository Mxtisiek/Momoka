const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with Pong! and the ping delay.'),
    async execute(interaction: { reply: (arg0: string) => any; }) {
        await interaction.reply('Pong!');
    }
}