ep= "<a:ping:950041372914753606>"

module.exports = {
    name: 'ping',
    category: `🌍 public`, 
    permissions: ['SEND_MESSAGES'],
    description: 'Voir le ping !',
    ownerOnly: false,
    usage: 'ping',
    examples: ['ping'],
    run: (Client, message, args)=>{
      
    message.channel.send(ep+ `Mon Ping est de \`${Date.now() - message.createdTimestamp}\`ms.`+ ep+ `\n` + ep+ `Le ping de mon API est de \`${Math.round(Client.ws.ping)}\`ms` + ep);
    },


    runInteraction: (Client, interaction) =>{

        interaction.reply(ep+ `Mon Ping est de \`${Date.now() - interaction.createdTimestamp}\`ms.`+ ep+ `\n` + ep+ `Le ping de mon API est de \`${Math.round(Client.ws.ping)}\`ms` + ep);

    }  
};
