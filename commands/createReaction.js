const Discord = require("discord.js");
const fs = require("fs");
const db = require("../db/reaction.json");
const { save } = require("../utils/db");

let roleid;
exports.run = async (client, message, args) => {
  await message.channel.send("Enter the message ID.");
  let answer = await message.channel.awaitMessages(
    (answer) => answer.author.id === message.author.id,
    { max: 1 }
  );
  let msgID = answer.map((answers) => answers.content).join();

  await message.channel.send("Mention the role.");
  answer = await message.channel
    .awaitMessages((answer) => answer.content, { max: 1 })
    .then((collected) => {
      roleid = collected.first().content.slice(3, -1);
    });

  await message.channel.send("Enter the emoji to be used.");
  answer = await message.channel.awaitMessages(
    (answer) => answer.author.id === message.author.id,
    { max: 1 }
  );
  let emoji = answer.map((answers) => answers.content).join();
  if (emoji.includes(":")) {
    emoji = emoji.split(":");
    emoji = emoji[2];
    emoji = emoji.slice(0, 18);
    console.log(emoji);
  } else {
    emoji = emoji;
  }

  message.channel.messages
    .fetch({ around: msgID, limit: 1 })
    .then((messages) => {
      messages.first().react(emoji);
    });

  await message.channel.send(
    `role: ${roleid}, EMOJI: ${emoji}, MENSAJE: ${msgID}`
  );
  if (!db[emoji]) {
    db[emoji] = {
      roleid,
      msgID
    };
    save("./db/reaction.json", db);
  }
};

module.exports.help = {
  name: "cretereaction",
  aliases: ["custom"],
};
