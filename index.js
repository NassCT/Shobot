const Discord = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");
const Client = new Discord.Client({
  intents: Object.keys(Discord.Intents.FLAGS),
});
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

var colors = require("colors");

Client.commands = new Discord.Collection();
require(`./utils/handlers/EventUtil`)(Client);
require(`./utils/handlers/CommandUtil`)(Client);
Client.snipes = new Discord.Collection();

mongoose
  .connect(process.env.DATABASE_URI, {
    autoIndex: false,
    maxPoolSize: 10,
    serverSelectionTimeoutMS: 10000,
    socketTimeoutMS: 45000,
    family: 4,
  })
  .then(() => {
    console.log(
      `\n┏━━━━━━━━━━━━━━━━━━━━━━━━━━┫`.white,
      `DataBase`.green.bold,
      `┣━━━━━━━━━━━━━━━━━━━━━━━━`.white
    );
    console.log(
      `┃`.white,
      `[INFORMATIONS]`.cyan,
      `┃`.white,
      `Mongo:`.blue,
      `Sucess`.green.italic.bold
    );
    console.log(
      `┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`.white
    );
  })
  .catch((err) => {
    console.log(err);
  });

// Start
Client.login(process.env.DISCORD_TOKEN);

// Set Prefix
const prefix = process.env.PREFIX;

// Status
Client.on("ready", async () => {
  let servers = await Client.guilds.cache.size;
  let servercount = await Client.guilds.cache.reduce(
    (a, b) => a + b.memberCount,
    0
  );

  setInterval(() => {
    const activities = [
      prefix + `help | ${servers} serveurs !`,
      `${servercount} membres !`,
    ];

    const statuts = activities[Math.floor(Math.random() * activities.length)];
    Client.user.setPresence({
      activities: [
        { name: `${statuts}`, type: 1, url: "https://www.twitch.tv/NxssLink" },
      ],
    });
  }, 5000);

  // Logs
  setTimeout(
    () =>
      console.log(
        `\n┏━━━━━━━━━━━━━━━━━━━━━━━━━━┫`.white,
        `Bot Client`.green.bold,
        `┣━━━━━━━━━━━━━━━━━━━━━━`.white
      ),
    3000
  );
  setTimeout(
    () =>
      console.log(
        `┃`.white,
        `[INFORMATIONS]`.cyan,
        `┃`.white,
        `UserTag :`.blue,
        `${Client.user.tag}`.green,
        `\n┃`.white,
        `[INFORMATIONS]`.cyan,
        `┃`.white,
        `UserId :`.blue,
        `${Client.user.id}`.green,
        `\n┃`.white,
        `[INFORMATIONS]`.cyan,
        `┃`.white,
        `Prefix :`.blue,
        `${process.env.PREFIX}`.green,
        `\n┃`.white,
        `[INFORMATIONS]`.cyan,
        `┃`.white,
        `Add Me :`.blue,
        `https://discord.com/api/oauth2/authorize?client_id=${Client.user.id}&permissions=8&scope=bot+applications.commands`.green
      ),
    3000
  );
  setTimeout(
    () =>
      console.log(
        `┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`.white
      ),
    3000
  );
  const user = await Client.users.fetch("354996937868705793");
  //Client.application.commands.create(data);
  Client.guilds.cache.get("713407515400077432");
  // Client.user.setName("Shobot Helpers");

  const embed = new Discord.MessageEmbed()
    .addField("Config", `Mon Prefix est ` + "`" + prefix + "`")
    .addField("Client", `Connecté en tant que <@${Client.user.id}> \\🚥`)
    .setColor("2f3136")
    .setImage(
      "https://cdn.discordapp.com/attachments/924399619792838747/958669566903463976/ezgif.com-gif-maker_1.gif"
    );
  user.send({ embeds: [embed] });
  user.send(embed);
});

Client.on("messageCreate", async (message, args) => {
  if (message.content.startsWith(prefix + "prefix")) {
    if (message.member.permissions.has("MANAGE_MESSAGES")) {
      let arg = message.content.trim().split(/ +/g);
      if (!arg[1]) {
        message.channel.send(
          "Dites moi combien de messages voulez vous que je supprime ?"
        );
      } else {
        message.channel.bulkDelete(arg[1]);
        message.channel.send(
          arg[1] + "  messages ont été supprimé ! :white_check_mark:"
        );
        setTimeout(() => {
          message.channel.bulkDelete(1);
        }, 600);
      }
    } else {
      message.channel.send(
        "Vous n'avez pas la permission d'executer cette commande ! :x:"
      );
    }
  }
});
///ㅤ

Client.on("messageCreate", (message) => {
  if (message.author.bot) return;

  if (message.mentions.has(Client.user)) {
    const embed = new Discord.MessageEmbed()
      .setDescription(`**Mon Prefix est** ` + "`" + prefix + "`")
      .setColor("2f3136");
    message.channel.send({ embeds: [embed] });
  }
});

//process.on('exit', code => { console (`Le Processus s'est arrêté avec le code: ${code}!`) });
process.on("uncaughtException", (err, origin) => {
  console.log(`UNCAUGHT_EXEPTION: ${err}`, ` Origine: ${origin}`);
});
process.on("unhandledRejection", (reason, promise) => {});
process.on("warning", (...args) => {
  console.log(...agrs);
});

Client.login(process.env.DISCORD_TOKEN);

const USER_ID = "354996937868705793"; // Put your Discord UserID in. Example: const USER_ID = "329991150712651776";

Client.on("messageCreate", async (message) => {
  if (!message.content.startsWith(prefix + "unbanall")) return; // You can change the command name if you want to
  if (message.author.id !== USER_ID)
    return message.channel.send(
      "You don't have enough permissions to run this command."
    ); // Permissions

  message.channel.send(
    "Started unbanning all users.\nYou can view the progress in your console/terminal."
  );

  message.guild.bans.fetch().then((bans) => {
    bans.forEach((user) => {
      message.guild.bans
        .remove(user.user.id)
        .then((user) =>
          message.channel.send(`OK | ${user.username} has been unbanned`)
        )
        .catch((err) => {
          console.error(err);
        });
    });
  });
});
