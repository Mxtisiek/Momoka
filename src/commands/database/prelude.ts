import type { CommandInteraction } from "discord.js";
import { Discord, Slash, SlashGroup, SlashOption } from "discordx";
import { Category } from "@discordx/utilities";
import { getDb } from "../../surreal";

@Discord()
@Category("Database Commands")
@SlashGroup({ description: "Database interaction commands", name: "database"})
@SlashGroup("database")
export class Database {
    @Slash({ description: "Check database status", name: "status"} )
    async status(interaction: CommandInteraction) {
        const user = interaction.client.user.globalName;
        await interaction.reply("Checking database status...");
        try {
            const db = await getDb();
            await interaction.followUp("The database is up and healthy!")
            console.log(`Database >> replied to database status check from '${user}' positively.`);
            db.close();
        } catch (e) {
            await interaction.followUp("Uh oh, the database didn't respond!");
            console.log(`Momoka !> ERROR occured while responding to 'database status' from '${user}': ${e}`);
        }
    }
}


