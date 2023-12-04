const ms = require('ms');


module.exports = {
    name: 'mute',
    category: 'moderation',
    permissions: ['MODERATE_MEMBERS'],
    ownerOnly: false,
    usage: 'mute [@member] [duration] [reason]',
    examples: ['mute @Skymidz#7333 5 minutes raison'],
    description: 'Mute un utilisateur temporairement avec une raison',
    options: [
        {
            name: 'user',
            description: "L'utilisateur a mute.",
            type: 'USER',
            required: true
        },
        {
            name: 'durée',
            description: 'La durée du mute.',
            type: 'STRING',
            required: true
        },
        {
            name: 'raison',
            description: 'La raison du mute.',
            type: 'STRING',
            required: true
        },
    ],
    async runInteraction(client, interaction) {
        const target = interaction.options.getMember('user');
        const duration = interaction.options.getString('durée');
        const convertedTime = ms(duration);
        const reason = interaction.options.getString('raison');

        if (!target.kickable) return message.reply('Ce membre ne peut pas être mute par le bot !');
        if (!convertedTime) return interaction.reply('Spécifier une durée valable !');

        target.timeout(convertedTime, reason);
        interaction.reply({ content: `Le membre ${target} a ete mute pendant ${duration} pour ${reason}., ephemeral: true` });
    }
}