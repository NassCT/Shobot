const noblox = require('noblox.js')
module.exports = {
    name: 'botinfo',
    category: `❓ informations`, 
    permissions: ['SEND_MESSAGES'],
    description: 'Voir les infos du bot',
    ownerOnly: false,
    usage: 'botinfo',
    examples: ['botinfo'],
    run: (Client, message, args)=>{
        
        async function startApp () {
        
            const groupInfo = await noblox.getGroup(10037911)
            console.log(groupInfo)
        }
        startApp()
 
}};
