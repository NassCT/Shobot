const { zalgo } = require("colors");
const Discord = require("discord.js");

module.exports = {
   name: 'massremove',
   category: `⚙️ moderations`,
   permissions: ['SEND_MESSAGES'],
   ownerOnly: true,
   usage: 'massremove',
   examples: ['massremove'],
   description: "massremove",
   run: (Client, prefix, message, args) => {

            const role = "959787348755906570"|| message.guild.roles.cache.get(args[1]);
            if (!role) return message.channel.send(`Aucun rôle trouver pour \`${args[1] || " "}\``)

            message.channel.send(`Je suis entrain d'enlevé le rôle \`${role}\` à ${message.guild.memberCount} utilisateur...`)
            message.guild.members.cache.forEach(member => setInterval(() => {
               
            }), 250);
        }}
    