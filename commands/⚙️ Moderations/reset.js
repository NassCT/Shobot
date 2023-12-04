
module.exports = {
  name: 'ping',
  category: `⚙️ moderations`, 
  permissions: ['SEND_MESSAGES'],
  ownerOnly: false,
  usage: 'ping',
  examples: ['ping'],
  description: "Voir le ping du bot",
  run: (Client, message, args)=>{
      var ping = Client.ws.ping
  if (message.content == prefix + `ping`) {
      if (ping <= 100) {
          ep = "<a:ping:950041372914753606>"
       }
       else if (ping >= 101) {
          ep = "<a:ping:950041372914753606>"
       }
  const embed = new MessageEmbed()
  
     .setColor("2f3136")       
     .addField(`__**Ping **__ :ping_pong: `, (ep + `Mon Ping est de \`${Date.now() - message.createdTimestamp}\`ms.` + ep + `\n` + ep + `Le ping de mon API est de \`${Math.round(Client.ws.ping)}\`ms` + ep))
     .setFooter({ text: `${message.author.tag} Id: ${message.author.id}` , iconURL: `${message.author.avatarURL()}` })
  message.channel.send({ embeds: [embed] });

     
}}};
