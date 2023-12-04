const { MessageEmbed } = require('discord.js');
const prefix = (process.env.PREFIX);

module.exports = {
    name: 'badwords',
    alias: 'badwords',
    category: `🔎 fonctions`, 
    permissions: ['SEND_MESSAGES'],
    description: 'Voir le liste des codes !',
    ownerOnly: false,
    usage: 'badwords',
    examples: ['anus'],
    run: async (Client, message, args)=>{
        const bannedWords = ["anal","anus","arse","ballsack","balls","bastard","bitch","biatch","bloody","blowjob","blow job","bollock","bollok","boner","boob","bugger","bum","butt","buttplug","clitoris","cock","coon","crap","cunt","damn","dick","dildo","dyke","fag","feck","fellate","fellatio","felching","fuck","f u c k","fudgepacker","fudge packer","flange","Goddamn","God damn","hell","homo","jerk","jizz","knobend","knob end","labia","lmao","lmfao","muff","nigger","nigga","omg","penis","piss","poop","prick","pube","pussy","queer","scrotum","sex","shit","s hit","sh1t","slut","smegma","spunk","tit","tosser","turd","twat","vagina","wank","whore","wtf"]
        try {
           if (bannedWords.some(word => message.content.toLowerCase().includes(word))) {
              if (message.author.id === message.guild.ownerID) return;
              if (message.channel.type === 'dm') return;
              await message.delete();
              await message.channel.send(`Parle bien toi ! <@${message.author.id}>`);
           }
        } catch (e) {
           console.log(e);
        }
        message.channel.send("Je supprime les mots qui ne me plaise pas !")
       
}};