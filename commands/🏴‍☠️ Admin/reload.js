const prefix = (process.env.PREFIX);
const ownerId = ("354996937868705793")
module.exports = {
   name: `reload`,
   category: `🏴‍☠️ Admin`,
   permissions: ['SEND_MESSAGES'],
   description: "ReLoad le bot",
   ownerOnly: true,
   usage: 'reload',
   examples: ['reload'],
   async run(Client, message, args) {
    
        if (!interaction.user.id != ownerId) return interaction.reply('Ces commandes sont réservés aux développeurs');
  

       await interaction.reply('Restarted!');
       return process.exit();
   },

   async runInteraction(Client, interaction)   {
    
    if (!interaction.user.id != ownerId) return interaction.reply('Ces commandes sont réservés aux développeurs');
  
       await interaction.reply('Restarted!');
    return process.exit();
   }      

}
