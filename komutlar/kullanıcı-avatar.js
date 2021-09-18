const Discord = require(`discord.js`);

exports.run = async (client, message) => {

  let user = message.mentions.users.first() || message.author;

  if (user) {

    const embed = new Discord.MessageEmbed()
      .setAuthor(`${user.tag}  Buyur Avatarın:`)

      .setImage(user.displayAvatarURL({ dynamic: true }))
//Rowie Developer
      .setTimestamp()

      .setFooter("Sphinx Sistemi", client.user.avatarURL());
//Rowie Developer
    message.channel.send(embed);//Rowie Developer

  } else {

    const embed = new Discord.MessageEmbed()
//Rowie Developer
      .setAuthor(

        `${message.author.tag}  Buyur Avatarın:`,

        message.author.avatarURL//Rowie Developer

      )

      .setImage(message.author.avatarURL({ dynamic: true }))
//Rowie Developer
      .setTimestamp()

      .setFooter("Sphinx Sistemi", client.user.avatarURL());

    message.channel.send(embed);

  }

};

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ["avatar", "avatarım"],//Rowie Developer

  permLevel: 0

};
//Rowie Developer
exports.help = {

  name: "avatar"
//Rowie Developer
};

