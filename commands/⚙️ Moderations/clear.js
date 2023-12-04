const prefix = (process.env.PREFIX);

module.exports = {
   name: `clear`,
   category: `⚙️ moderations`,
   permissions: ['SEND_MESSAGES'],
   description: "Supprimer les messages d'un chat",
   ownerOnly: false,
   usage: 'clear [numbers]',
   examples: ['clear 32'],
    run: (Client, message, args)=>{
        
       
if (message.content.startsWith(prefix + "clear", "clean")) {
    if (message.member.permissions.has('MANAGE_MESSAGES')) {
       let arg = message.content.trim().split(/ +/g)
       if (!arg[1]) {
          message.channel.send("Dites moi combien de messages voulez vous que je supprime ?");

       }
       else {
          message.channel.bulkDelete(arg[1])
          message.channel.send(arg[1] + "  messages ont été supprimé ! :white_check_mark:")
          setTimeout(() => {
             message.channel.bulkDelete(1)
          }, 600);
       }
    } else {
       message.channel.send("Vous n'avez pas la permission d'executer cette commande ! :x:");
    }
 }
    }
};











