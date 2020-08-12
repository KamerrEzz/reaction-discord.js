
const Discord = require('discord.js')

module.exports.run = (client, message) => {
    let prefix = process.env.Prefix;

    const args = message.content
        .slice(prefix.length)
        .trim()
        .split(/ +/g);
    const cmd = args.shift().toLowerCase();

    /* - - - - - - - - - - - - - - - - - - - - - - - -  - */

    if (!message.content.startsWith(prefix)) return;
    if (message.author.bot) return;
    if (message.channel.type === "dm") return;
    /* - - - - - - - - - - - - - - - - - - - - - - - -  - */

    let commandfile =
        client.commands.get(cmd) ||
        client.commands.find(c => c.help.aliases.includes(cmd));
    if (commandfile) commandfile.run(client, message, args);
    if (!commandfile)
        return message.channel.send("NO FOUND");
}