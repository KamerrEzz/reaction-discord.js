const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  let data = args.join(' ').split(' | ')
  message.channel.send(new Discord.MessageEmbed()
  .setColor());
};

module.exports.help = {
  name: "m",
  aliases: [],
};
