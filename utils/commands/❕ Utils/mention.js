const prefix = (process.env.PREFIX);
module.exports = {
    name: `mention`,
    category: `❕ utils`,
    permissions: ['SEND_MESSAGES'],
    description: "@Bot",
    ownerOnly: false,
    usage: "@Bot",
    examples: ["@Bot"],
    run: (Client, message, args) => {

        if (message.author.bot) return;

        if (message.mentions.has(Client.user)) {
            const embed = new Discord.MessageEmbed()
                .setDescription(`**Mon Prefix est** ` + "`" + prefix + "`")
                .setColor("2f3136")
            message.channel.send({ embeds: [embed] });

        }


    }
};
















