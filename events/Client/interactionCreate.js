const ownerId = '354996937868705793';

module.exports = {

  name: "interactionCreate",
  category: "Client",
  once: false,
  async execute(Client, interaction) {
    if (interaction.isCommand()) {
      const cmd = Client.commands.get(interaction.commandName);
      if (!cmd) return interaction.reply('Cette commande n\'existe pas!');
      cmd.runInteraction(Client, interaction);
    }
  }
};



// console.log("\nㅤ>>".grey, "R".blue,"e".cyan,"a".magenta,"d".blue,"y".cyan,"a".magenta,"s".blue,"b".cyan,"e".magenta,"e ".blue,"n".cyan,"s".magenta,"t".blue,"a".cyan,"r".magenta,"t".blue,"e".cyan,"d\n".magenta,);