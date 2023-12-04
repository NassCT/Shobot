module.exports = {
    name: "ready",
    category: "Client",
    once: true,
   async execute(Client) {

    //Instant
    const devGuild = await Client.guilds.cache.get('713407515400077432');
    devGuild.commands.set(Client.commands.map(cmd => cmd));

    //Global 

 }
};




// console.log("\nㅤ>>".grey, "R".blue,"e".cyan,"a".magenta,"d".blue,"y".cyan,"a".magenta,"s".blue,"b".cyan,"e".magenta,"e ".blue,"n".cyan,"s".magenta,"t".blue,"a".cyan,"r".magenta,"t".blue,"e".cyan,"d\n".magenta,);