import type { CommandInteraction } from "discord.js";
import { Discord, Slash, SlashGroup } from "discordx";
import { Category } from "@discordx/utilities";

@Discord()
@Category("Utility Commands")
@SlashGroup({ description: "Bot status commands", name: "bot-status"})
@SlashGroup("status")
export class Status {
    @Slash({ description: "ping command :3", name: "ping" })
    async ping(interaction: CommandInteraction) {
        const user = interaction.client.user.globalName;
        const latency = interaction.client.ws.ping;

        try {
            await interaction.reply(`Pong! **${latency}**ms`);
            console.log(`Momoka >> replied to '${user}' with '${latency}ms' latency.`);
        } catch (e) {
            await interaction.reply(`An error occured while attempting response.`);
            console.log(`Momoka !> ERROR occured while responding to 'ping' from '${user}': ${e}`);
        }
    }
    
    @Slash({ description: "ask if she's well", name: "health"})
    async health(interaction: CommandInteraction) {
        const user = interaction.client.user.globalName;

        try {
            await interaction.reply("I'm up and about!");
            console.log(`Momoka >> replied to ${user}'s health check positively.`);
        } catch (e) {
            await interaction.reply("Uh oh, something's not well...");
            console.log(`Momoka !> ERROR occured while responding to 'health' from '${user}': ${e}`);
        }
    }
}
