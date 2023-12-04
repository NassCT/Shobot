const { MessageEmbed } = require('discord.js');
const prefix = (process.env.PREFIX);


module.exports = {
    name: 'fruits',
    alias: 'fruits',
    category: `🍇 blox fruits`, 
    permissions: ['SEND_MESSAGES'],
    description: 'Voir le liste des codes !',
    ownerOnly: false,
    usage: 'codes',
    examples: ['codes'],
    run: (Client, message, args)=>{

    if (message.content == prefix + this.name || prefix + this.alias) {
    const embed = 




    
    message.channel.send({ embeds: [embed] });

       
}}};
