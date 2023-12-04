const Discord = require('discord.js');
const moment = require("moment");
const bot = new Discord.Client(
    {
       intents: Object.keys(Discord.Intents.FLAGS)
    });
require("moment-duration-format");
const { MessageEmbed } = require('discord.js');



module.exports = {
    name: 'uptime',
    category: `❕ utils`,
    permissions: ['SEND_MESSAGES'],
    description: "Bot Stats",
    ownerOnly: false,
    usage: 'uptime',
    examples: ['uptime'],
    run: (Client, message, args)=>{
        const duration = moment.duration(bot.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
        const embed = new MessageEmbed()
            .setTitle("**<:mod:891734254877282344> Stats**")
            .addField("**❱ Mem Usage:**", `**${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB**`)
            .addField("**❱ Uptime:**",`<t:${parseInt(Client.readyTimestamp /1000)}:R>`)
            .setThumbnail(Client.user.displayAvatarURL({ dynamic: true, size: 512 }))
            .setColor('2f3136')
            .setImage("https://cdn.discordapp.com/attachments/951116576109776946/955214494634750082/Capture.JPG")
            message.channel.send({ embeds: [embed] });
    }
}
