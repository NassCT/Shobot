const { MessageEmbed } = require('discord.js');
const prefix = (process.env.PREFIX);



module.exports = {
    name: 'antiinvite',
    alias: 'antiinvite',
    category: `🔎 fonctions`, 
    permissions: ['SEND_MESSAGES'],
    description: 'Voir le liste des codes !',
    ownerOnly: false,
    usage: 'antiinvite',
    examples: ['discord.gg/azs'],
    run: async (Client, message, args)=>{
      const bannedWords = [`discord.gg`, `.gg/`, `.gg /`, `. gg /`, `. gg/`, `discord .gg /`, `discord.gg /`, `discord .gg/`, `discord .gg`, `discord . gg`, `discord. gg`, `discord gg`, `discordgg`, `discord gg /`]
      try {
          if (message.content.includes(bannedWords)) {
              await message.delete();
              await message.channel.send(`You cannot send invites to other Discord servers`);
          }
      } catch (e) {
          console.log(e);
        }
        message.channel.send("Met le lien d'une invitation, et tu verra !")
       
}};
