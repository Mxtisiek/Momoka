import type { ChatInputCommandInteraction, SlashCommandStringOption, StringMappedInteractionTypes } from "discord.js";
const { SlashCommandBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("reload")
		.setDescription("Reloads a command.")
		.addStringOption((option: SlashCommandStringOption) =>
			option.setName("command")
				.setDescription("The command to reload.")
				.setRequired(true)),
	async execute(interaction: ChatInputCommandInteraction) {
		const commandName = interaction.options.getString("command", true).toLowerCase();
		const command = interaction.client.commands.get(commandName);

		delete require.cache[require.resolve(`./${command.data.name}.js`)];

        try {
            const newCommand = require(`./${command.data.name}.ts`);
            interaction.client.commands.set(newCommand.data.name, newCommand);
            await interaction.reply(`[RELOAD] Command \`${newCommand.data.name}\` was reloaded! [+]`);
        } catch (error: any) {
            console.error(error);
            await interaction.reply(`[ERROR] There was an error while reloading the command \`${command.data.name}\`:\n\`${error.message}\` [-]`);
        }
	},
};
