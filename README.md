# Momoka (河原木 桃香, from *Girls Band Cry*)
###### The name choice makes no sense and isn't supposed to, I just like Momoka

### A simple Discord bot with SurrealDB integration, for testing purposes.

Utilizes the **Bun** runtime with **TypeScript**, **Discord.js** and **SurrealDB**.

Install dependencies:
```bash
bun install
```

Requires a **.env** file:
```env
# Discord / data from the Discord Developer Portal of your bot
DISCORD_TOKEN=""

APP_ID=""

GUILD_ID=""
#

# SurrealDB / self-explanatory
DB_URL=""

DB_NAMESPACE=""

DB_DATABASE=""

DB_USER=""

DB_PASSWORD=""
#
```

Run the bot:
```bash
bun src/main.ts
```

***Database currently not functional***
