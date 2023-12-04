const Discord = require('discord.js')
const request = require('request');
module.exports = {
    name: `iplocates`,
    category: `❕ utils`,
    permissions: ['SEND_MESSAGES'],
    description: "@Bot",
    ownerOnly: false,
    usage: "@Bot",
    examples: ["@Bot"],
    run: (Client, message, args) => {


        {{
            var prefix = ".";
            var messageArray = msg.content.split(" ");
            var cmd = messageArray[0].toLowerCase();
            var args = messageArray.slice(1);
            if (!msg.content.startsWith(prefix)) return;
            cmd = cmd.slice(prefix.length);
            switch (cmd) {
                case "locate":
                    if (!args[0]) return msg.channel.send("```Usage : .locate [IP]```");
                    agent
                        .get(`https://ip-to-geolocation.com/api/json/${args[0]}`)
                        .end((err, res) => {
                            if (err) throw err;
                            res = JSON.parse(res.text);
                            let _res = res;
                            if (res.status === "fail") return msg.channel.send("```Invalid ip-address!```");
                            res = JSON.stringify(res, null, 4);
                            if (_res.lat && _res.lon) return msg.channel.send("```JSON\n" + res + "```http://www.google.com/maps/place/" + _res.lat + "," + _res.lon);
                            return msg.channel.send("```JSON\n" + res + "```");
                        });
                    break;
                case "resolve":
                    if (!args[0]) return msg.channel.send("```Usage: .resolve [DOMAIN]```");
                    if (args[0].startsWith("http") && (args[0].slice(4).startsWith("//") || args[0].slice(5).startsWith("//"))) args[0] = args[0].split("//")[1];
                    dns.resolveAny(args[0], (err, addresses) => {
                        if (addresses === undefined) return msg.channel.send("```Invalid domain!```");
                        return msg.channel.send("```JSON\n" + JSON.stringify(addresses, null, 4) + "```");
                    });
                    break;
            }
        }}}}






    