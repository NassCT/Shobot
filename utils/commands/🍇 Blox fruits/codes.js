const { MessageEmbed } = require('discord.js');
const prefix = (process.env.PREFIX);


module.exports = {
    name: 'wait',
    alias: 'wait',
    category: `🍇 blox fruits`, 
    permissions: ['SEND_MESSAGES'],
    description: 'Voir le liste des codes !',
    ownerOnly: false,
    usage: 'codes',
    examples: ['codes'],
    run: (Client, message, args)=>{

    if (message.content == prefix + this.name || prefix + this.alias) {
    const embed = new MessageEmbed()
       .setDescription("Cliquer sur les réactions ci-dessous pour obtenir vos rôles !")
       .setColor("2f3136")

    message.channel.send({ embeds: [embed] });

       
}}};
