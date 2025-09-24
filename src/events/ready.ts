const { Events } = require('discord.js');

module.exports = {
	name: Events.ClientReady,
	once: true,
	execute(client: { user: { tag: any; }; }) {
		console.log(`[STATUS] ${client.user.tag} ready to rock! [+]`);
	},
};
