const db = require("quick.db");

const {prefix} = require('../ayarlar.json')

exports.run = async (client, message, args) => {

    if (!message.member.hasPermission("ADMINISTRATOR")) {

      return message.channel.send(

        "Prefix'i değiştirmeniz için \`YÖNETİCİ\` yetkiniz olması lazım!"

      );
//Rowie Developer
    }

//Rowie Developer
//Rowie Developer
    if (!args[0]) {

      return message.channel.send("Lütfen bir prefix giriniz");

    }


//Rowie Developer
    if (args[1]) {

      return message.channel.send("İkinci bir prefix yapamazsın!");

    }


//Rowie Developer//Rowie Developer
    if (args[0].length > 3) {

      return message.channel.send("3 karakterden uzun bir prefix yapamazsın!");

    }
//Rowie Developer
//Rowie Developer

    if (args.join("") === prefix) {

      db.delete(`prefix_${message.guild.id}`);

      return await message.channel.send("Prefix sıfırlandı!");

    }

//Rowie Developer
//Rowie Developer
    db.set(`prefix_${message.guild.id}`, args[0]);

    await message.channel.send(

      `Bot prefixi değiştirildi. Yeni prefix: \`${args[0]}\``//Rowie Developer

    );
//Rowie Developer
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [""],
  permLevel: 0//Rowie Developer
};
//Rowie Developer
exports.help = {
  name: "prefix",//Rowie Developer
  description: "Rowie",//Rowie Developer
  usage: "prefix"//Rowie Developer
};