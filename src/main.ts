import { IntentsBitField } from "discord.js";
import { Client } from "discordx";
import { dirname, importx } from "@discordx/importer";

// Environment variables
if (!process.env.DISCORD_TOKEN) { throw Error("DISCORD_TOKEN not found!"); }
const token: string = process.env.DISCORD_TOKEN;
if (!process.env.GUILD_ID) { throw Error("GUILD_ID not found!"); }
const guildId: string = process.env.GUILD_ID;
//

export class Main {
	private static _client: Client

	static get Client(): Client {
    	return this._client;
  	}

	static async start(): Promise<void> {
    this._client = new Client({
      	// botGuilds: [(client) => client.guilds.cache.map((guild) => guild.id)],
    	intents: [
			IntentsBitField.Flags.Guilds,
			IntentsBitField.Flags.GuildMessages,
			IntentsBitField.Flags.GuildMembers,
      	],
      	silent: false,
    });

    this._client.once("clientReady", async () => {
		await this._client.clearApplicationCommands(
		   ...this._client.guilds.cache.map((guild) => guild.id)
		);

		void this._client.initApplicationCommands();

		console.log("Momoka >> ready to rock!");
    });

    this._client.on("interactionCreate", (interaction) => {
      	this._client.executeInteraction(interaction);
    });

    await importx(`${dirname(import.meta.url)}/commands/**/*.ts`);

    await this._client.login(token);
  }
}

void Main.start();
