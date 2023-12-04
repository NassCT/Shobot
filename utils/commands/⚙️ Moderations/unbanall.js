const Discord = require("discord.js");

module.exports = {
   name: 'unbanall',
   category: `⚙️ moderations`,
   permissions: ['SEND_MESSAGES'],
   ownerOnly: true,
   usage: 'unbanall',
   examples: ['unbanall'],
   description: "Voir le ping du bot",
   run: (Client, prefix, message, args) => {
      
      const USER_ID = "354996937868705793"; 
      message.guild.bans.fetch().then(bans => {
          bans.forEach(user => {
              message.guild.bans.remove(user.user.id).then(user => console.log(`OK | ${user.username} has been unbanned`)).catch(err => {console.error(err)});
          })
         })
      }};