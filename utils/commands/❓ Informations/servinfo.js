const { MessageEmbed } = require('discord.js');
const prefix = (process.env.PREFIX);
const moment = require("moment")


module.exports = {
    name: 'serverinfo',
    category: `❓ informations`, 
    permissions: ['SEND_MESSAGES'],
    description: 'Voir les infos du serv!',
    ownerOnly: false,
    usage: 'serverinfo',
    examples: ['servinfo'],
    run: (Client, message, args)=>{


        let boosts = message.guild.premiumSubscriptionCount;
        var boostlevel = 0;
        if (boosts >= 2) boostlevel = "1";
        if (boosts >= 15) boostlevel = "2";
        if (boosts >= 30) boostlevel = "3 / ∞";
        let maxbitrate = 96000;
        if (boosts >= 2) maxbitrate = 128000;
        if (boosts >= 15) maxbitrate = 256000;
        if (boosts >= 30) maxbitrate = 384000;

    if (message.content == prefix + `serverinfo`) {
    const embed = new MessageEmbed()
    .setAuthor({name: "Information about:   " + message.guild.name, iconURL: message.guild.iconURL()})
    .addField("❱ Owner", `Nass#0090\n\`${message.guild.ownerID }\``, true)

    .addField("❱ Created On", "\`" + moment(message.guild.createdTimestamp).format("DD/MM/YYYY") + "\`\n" + "`"+ moment(message.guild.createdTimestamp).format("hh:mm:ss") +"`", true)
    .addField("❱ You Joined", "\`" + moment(message.member.joinedTimestamp).format("DD/MM/YYYY") + "\`\n" + "`"+ moment(message.member.joinedTimestamp).format("hh:mm:ss") +"`", true)
  
    .addField("❱ All Channels", "\👁‍🗨 \`" + message.guild.channels.cache.size + "\`", true)
    .addField("❱ Text Channels", "\💬 \`" + message.guild.channels.cache.filter(channel => channel.type == "text").size + "\`", true)
    .addField("❱ Voice Channels", "🔈 \`" + message.guild.channels.cache.filter(channel => channel.type == "voice").size + "\`", true)
    
    .addField("❱ Total Boosts", "\`" + message.guild.premiumSubscriptionCount + "\`", true)
    .addField("❱ Boost-Level", "\`" + boostlevel + "\`", true)

    .addField("❱ Total USERS", "\😀 \`" + message.guild.memberCount + "\`", true)
    .addField("❱ Total HUMANS", "\👤 \`" + message.guild.members.cache.filter(member => !member.user.bot).size + "\`", true)
    .addField("❱ Total BOTS", "\🤖 \`" + message.guild.members.cache.filter(member => member.user.bot).size + "\`", true)
    .addField("❱ Max-Talk-Bitrate", "\👾 \`" + maxbitrate + " kbps\`", true)
    .setImage(message.guild.bannerURL({ dynamic: true, size: 1024  }))
    .setThumbnail(message.guild.iconURL({ dynamic: true, size: 512 }))


    
    .setURL("https://discord.gg/c7nFUqmutc")
    .setColor("2f3136") 
    .setFooter({ text: `${message.author.tag} Id: ${message.author.id}` , iconURL: `${message.author.avatarURL()}` })
    message.channel.send({ embeds: [embed] });

       
}}};

