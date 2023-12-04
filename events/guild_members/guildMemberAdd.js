const { MessageEmbed } = require('discord.js');

module.exports = {
  name: "guildMemberAdd",
  category: "guild_members",
  once: false,
  async execute(Client, member) {
console.log('Guild Member Added')
  },
};