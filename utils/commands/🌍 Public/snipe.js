const { MessageEmbed } = require('discord.js');
const prefix = (process.env.PREFIX);

module.exports = {
    name: 'snipe',
    category: `🌍 public`, 
    permissions: ['SEND_MESSAGES'],
    description: 'Voir le ping !',
    ownerOnly: false,
    usage: 'ping',
    examples: ['ping'],
    run: (Client, message, args,)=>{
        
        const embed = new MessageEmbed()
        .setFooter({ text: `${message.author.tag} Id: ${message.author.id}` , iconURL: `${message.author.avatarURL()}` })
        .setColor("2f3136")    
        .setTitle(`En cours de développement`)
        message.channel.send({ embeds: [embed] });
    
           
    }};
    