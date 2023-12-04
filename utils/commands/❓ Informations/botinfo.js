const { MessageEmbed } = require('discord.js');
const prefix = (process.env.PREFIX);

module.exports = {
    name: 'botinfo',
    category: `❓ informations`, 
    permissions: ['SEND_MESSAGES'],
    description: 'Voir les infos du bot',
    ownerOnly: false,
    usage: 'botinfo',
    examples: ['botinfo'],
    run: (Client, message, args)=>{

    if (message.content == prefix + `botinfo`) {
    const embed = new MessageEmbed()
       .setColor("2f3136")       
       .addField(`__**Shelper**__`, `┏ㅤㅤ ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ┓\nㅤ***Shelper***(Beta0.3) est un bot créé par Nass#0090 (<@!354996937868705793>).\n\nㅤDéveloppeurs : Nass#0090\nㅤSystème : Debian/Linux\nㅤCPU: \`Intel(R) Xeon(R) Gold 6230R CPU @ 2.10GHz\`\nㅤRam: \`70Mo\`/\`1024Mo\` ()0%\n┗ㅤㅤㅤㅤㅤㅤ ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ┛`)
       .setFooter({ text: `${message.author.tag} Id: ${message.author.id}` , iconURL: `${message.author.avatarURL()}` })
    message.channel.send({ embeds: [embed] });

       
}}};
