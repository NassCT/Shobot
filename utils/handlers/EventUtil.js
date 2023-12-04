const { promisify } = require('util');
const { glob } = require('glob');
const pGlob = promisify(glob);

module.exports = async Client => {         console.log(`\n┏━━━━━━━━━━━━━━━━━━━━━━━━━━┫`.white, `Events`.green.bold, `┣━━━━━━━━━━━━━━━━━━━━━━━━━━`.white);
    
    (await pGlob(`${process.cwd()}/events/*/*.js`)).map(async eventFile =>{
         const event = require(eventFile);
         

         

        if(!eventList.includes(event.name) || !event.name) {
            return console.log(`┃`.white,`[INFORMATIONS]`.red,`┃`.white,`EVENTS FAILED`.red, `┃`.white, `${event.name}`.yellow, `|`.white, `${event.category} :`.magenta, `Failed`.red.italic.bold);      
        }


        if( event.once) {
            Client.once(event.name, (...args) => event.execute(Client, ...args));
        } else {
            Client.on(event.name, (...args) => event.execute(Client, ...args));
        }

        console.log(`┃`.white,`[INFORMATIONS]`.cyan,`┃`.white,`EVENTS LOADED`.cyan, `┃`.white, `${event.name}`.blue, `|`.white, `${event.category}:`.magenta, `Succes`.green.italic.bold);
    });
    console.log(`┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`.white);
};

const eventList = ['apiRequest', 'apiResponse', 'applicationCommandCreate', 'applicationCommandDelete', 'applicationCommandUpdate', 'channelCreate', 'channelDelete', 'channelPinsUpdate', 'channelUpdate', 'debug', 'emojiCreate', 'emojiDelete', 'emojiUpdate', 'error', 'guildBanAdd', 'guildBanRemove', 'guildCreate', 'guildDelete', 'guildIntegrationsUpdate', 'guildMemberAdd', 'guildMemberAvailable', 'guildMemberRemove', 'guildMembersChunk', 'guildMemberUpdate', 'guildScheduledEventCreate', 'guildScheduledEventDelete', 'guildScheduledEventUpdate', 'guildScheduledEventUserAdd', 'guildScheduledEventUserRemove', 'guildUnavailable', 'guildUpdate', 'interaction', 'interactionCreate', 'invalidated', 'invalidRequestWarning', 'inviteCreate', 'inviteDelete', 'message', 'messageCreate', 'messageDelete', 'messageDeleteBulk', 'messageReactionAdd', 'messageReactionRemove', 'messageReactionRemoveAll', 'messageReactionRemoveEmoji', 'messageUpdate', 'presenceUpdate', 'rateLimit', 'ready', 'roleCreate', 'roleDelete', 'roleUpdate', 'shardDisconnect', 'shardError', 'shardReady', 'shardReconnecting', 'shardResume', 'stageInstanceCreate', 'stageInstanceDelete', 'stageInstanceUpdate', 'stickerCreate', 'stickerDelete', 'stickerUpdate', 'threadCreate', 'threadDelete', 'threadListSync', 'threadMembersUpdate', 'threadMemberUpdate', 'threadUpdate', 'typingStart', 'userUpdate', 'voiceStateUpdate', 'warn', 'webhookUpdate'];