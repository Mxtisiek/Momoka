import { ApplicationCommandOptionType, type CommandInteraction } from "discord.js";
import { Discord, Slash, SlashGroup } from "discordx";
import { getDb } from "../../surreal";

@Discord()
@SlashGroup({ description: "Create database records", name: "create", root: "database"})
@SlashGroup("create", "database")
export class Create {
    @Slash({ description: "Create a new database record", name: "user" })
    async createUser(
        
    ) {


        try {
            
        } catch (e) {
            
        }
    }
}
