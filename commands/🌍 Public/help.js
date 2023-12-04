const { MessageEmbed } = require('discord.js');
const { readdirSync } = require('fs');
const commandFolder = readdirSync('./commands');
const prefix = (process.env.PREFIX);

const isContextDescription = {
    userinfo: 'Renvoie des informations sur l\'utilisateur'
}

module.exports = {
    name: 'help',
    category: `🌍 public`,
    permissions: ['SEND_MESSAGES'],
    description: 'Voir le liste des commandes !',
    ownerOnly: false,
    usage: 'help',
    examples: ['help'],
    async run(Client, message, args) {

        //On regarde si il y a un argument après le /help
        if (!args.length) {
            const noArgsEmbed = new MessageEmbed()
                .setColor('2f3136')
                .setURL('https://discord.gg/c7nFUqmutc')
                .setThumbnail('https://cdn.discordapp.com/attachments/951116576109776946/952681920158912573/dzdz.gif')
                .addField('Help\n', `Une liste de toutes les commandes disponible.\nPour plus d'informations, tapez \`${prefix}help <commande>\``)
                .setTimestamp(Date.now())
                .setImage("https://media.discordapp.net/attachments/845624343428857877/850731295969640498/barre.bleu2.jpg?width=1410&height=22")
                .setFooter({ text: `User: ${message.author.tag} Id: ${message.author.id}`, iconURL: `${message.author.avatarURL()}` });



            for (const category of commandFolder) {

                noArgsEmbed.addField(
                    `\\${category.replace(/(^\w|\s\w)/g, firstLetter => firstLetter.toUpperCase())}`,
                    `**(${prefix})** [\`${Client.commands.filter(cmd => cmd.category == category.toLowerCase()).map(cmd => cmd.name).join('\`](https://discord.gg/c7nFUqmutc), [\`')}\`](https://discord.gg/c7nFUqmutc)`);
            }

            return message.channel.send({ embeds: [noArgsEmbed] });

        }



        const cmd = Client.commands.get(cmd.name);
        if (!cmd) return message.reply("Cette commande n'existe pas dans notre base de donnée")

        const ArgsEmbed = new MessageEmbed()
            .setTitle(`Help de la commande : \`${cmd.name}\``)
            .setColor('2f3136')
            .setDescription('`${prefix}\` = Prefix utilisé pour le bot (*Les / "Slash" commandes sont également disponibles !) \n\n{}  = Sous-commande(s) disponible(s) | [] = option(s) obligatoire(s) | <> = option(s) facultatif \n\n⚠️ **Ne pas inclure ces caractères -> {}, [] et <> dans vos commandes !**')
            .addField('Description de la commande :', `${cmd.description}`)
            .addField('Permission(s) requise(s) :', `${cmd.permissions.join(' | ')}`)
            .addField('Utilisation :', `${prefix}${cmd.usage}`)
            .addField('Exemple d\'utilisation de la commande :', `${prefix}${cmd.examples.join(` | ${prefix}`)}`)
            .setFooter({ text: `Nouveau sondage de : ${message.author.username}`, iconURL: message.author.displayAvatarURL() });
        

        return message.channel.send({ embeds: [ArgsEmbed] })
    }
}   


