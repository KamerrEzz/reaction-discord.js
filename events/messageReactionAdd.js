const Discord = require("discord.js");
const db = require("../db/reaction.json");
exports.run = async (client, reaction, user) => {
  if (reaction.message.partial) {
    await reaction.message.fetch();
  }
  if (user.bot) return;

  let emoteId = reaction.emoji.id;
  let emoteName = reaction.emoji.name;

  if (db[reaction.emoji.id]) {
    if(db[reaction.emoji.id].msgID != reaction.message.id) return;
    var role = reaction.message.guild.roles.cache.find(
      (role) => role.id === db[reaction.emoji.id].roleid
    );
    var member = reaction.message.guild.members.cache.find(
      (member) => member.id === user.id
    );
    member.roles.add(role);
  }

  if (db[reaction.emoji.name]) {
    if(db[reaction.emoji.name].msgID != reaction.message.id) return;
    var role = reaction.message.guild.roles.cache.find(
      (role) => role.id === db[reaction.emoji.name].roleid
    );
    var member = reaction.message.guild.members.cache.find(
      (member) => member.id === user.id
    );
    member.roles.add(role);
  }
};
