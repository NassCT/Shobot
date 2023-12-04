const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'invite',
    category: `🌍 public`, 
    permissions: ['SEND_MESSAGES'],
    description: 'Afficher le shop !',
    ownerOnly: false,
    usage: 'invite',
    examples: ['invite'],
    run: (Client, message, args)=>{

  
    const embed = new MessageEmbed()
    
    .setTitle(`Cliquer ici pour inviter le bot !`,"https://discord.com/api/oauth2/authorize?client_id=914822547823009822&permissions=8&scope=bot%20applications.commands", "https://discord.com/api/oauth2/authorize?client_id=914822547823009822&permissions=8&scope=bot%20applications.commands" )
    .setDescription(`Cliquer ici pour inviter le bot !`,"https://discord.com/api/oauth2/authorize?client_id=914822547823009822&permissions=8&scope=bot%20applications.commands", "https://discord.com/api/oauth2/authorize?client_id=914822547823009822&permissions=8&scope=bot%20applications.commands" )

    .setColor("2f3136")
       message.channel.send({ embeds: [embed] })

       
}};
