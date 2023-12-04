const { runSlash } = require("../🌍 Public/ping");

module.exports = {
  name: "ban",
  category: '⚙️ moderations',
  permissions: ['SEND_MESSAGES'],
  ownerOnly: false,
  usage: 'ban [@member] [reason]',
  examples: ['ban @User raison'],
  description: "Bannir un utilisateur avec une raison",
  options: [
    {
      name: "target",
      description: "L'utilisateur a ban",
      type: "USER",
      required: true
    },
    {
      name: "reason",
      description: "La raison du ban",
      type: "STRING",
      required: true
    }
  ],
  async runSlash(Client, interaction) {
    const target = interaction.options.getMember('target');
    const reason = interaction.options.getString('reason');

    if (!target.bannable) return interaction.reply('Ce membre ne peut pas être ban par le bot!');

    target.ban({ reason: reason, days: 7 });
    interaction.reply(`Le membre ${target} a été ban!`);
  }
};