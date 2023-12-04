const { message } = require("noblox.js");
const { MessageEmbed } = require("discord.js");
    
ep= "<a:ping:950041372914753606>"

module.exports = {
    name: 'ping',
    category: `🌍 public`, 
    permissions: ['SEND_MESSAGES'],
    description: 'Voir le ping !',
    ownerOnly: false,
    usage: 'ping',
    examples: ['ping'],
    run: (Client, message, args)=>{
        const embed = new MessageEmbed()
        .setTitle("Pong! 🏓")
        .setThumbnail(Client.user.displayAvatarURL())
        .addFields(
          {
            name: "Latence API",
            value: `\`\`\`${Client.ws.ping}ms\`\`\``,
            inline: true,
          },
          {
            name: "Latence BOT",
            value: `\`\`\`${
              tryPong.createdTimestamp - message.createdTimestamp
            }ms\`\`\``,
            inline: true,
          }
        )
        .setTimestamp()
        .setFooter({
          text: message.user.username,
          iconURL: message.user.displayAvatarURL(),
        });

        message.reply({ embeds: [embed] })
       },


    runInteraction: (Client, interaction) =>{

        const embed = new MessageEmbed()
        .setTitle("Pong! 🏓")
        .setThumbnail(Client.user.displayAvatarURL())
        .addFields(
          {
            name: "Latence API",
            value: `\`\`\`${Client.ws.ping}ms\`\`\``,
            inline: true,
          },
          {
            name: "Latence BOT",
            value: `\`\`\`${
              tryPong.createdTimestamp - interaction.createdTimestamp
            }ms\`\`\``,
            inline: true,
          }
        )
        .setTimestamp()
        .setFooter({
          text: interaction.user.username,
          iconURL: interaction.user.displayAvatarURL(),
        }); 

        interaction.reply({ embeds: [embed] })
    }  

   
};



