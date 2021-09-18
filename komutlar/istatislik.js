const Discord = require("discord.js");

exports.run = (client, message) => {//Rowie Developer
  let prex = new Discord.MessageEmbed()
    .addField(
      " <a:850263428609343528:861988274473533472> Sphinx Verileri <a:850263428609343528:861988274473533472>",
      ` <a:sphinx:866238657055424512> **Toplam sunucu:** **${client.guilds.cache.size}** \n <a:sphinx:866238657055424512> **Toplam kullanıcı:** **${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}** \n <a:sphinx:866238657055424512> **Toplam kanal:**  **${client.channels.cache.size}**`)
    .addField(
      "<a:850263428609343528:861988274473533472> Sphinx Yapımcısı <a:850263428609343528:861988274473533472>",
      ` <a:sphinx:866238657055424512> <@773521227117625366>`)
      
      .addField(//Rowie Developer
        "<a:850263428609343528:861988274473533472>Sphinx Yardımcısı <a:850263428609343528:861988274473533472>",
        ` <a:sphinx:866238657055424512> <@673235133675077692>`)
        
    .addField(//Rowie Developer
      "<a:850263428609343528:861988274473533472> Gecikmeler <a:850263428609343528:861988274473533472>",`
     ** <a:sphinx:866238657055424512> Bot pingi:** **${client.ws.ping}** 
    ** <a:sphinx:866238657055424512> Mesaj gecikmesi:** **${new Date().getTime() - message.createdTimestamp}**`)
    .setThumbnail(client.user.avatarURL())
    .setTimestamp()
    .setFooter("Sphinx Sistemi", client.user.avatarURL())
    .setColor("2d3136");
  message.channel.send(prex);
};
//Rowie Developer
exports.conf = {
  enabled: true,//Rowie Developer
  guildOnly: false,
  permLevel: 0,
  aliases: ["stat", "i","istatistik "]
};

exports.help = {
  name: "istatistik",
  description: "Botun İstatistiklerini Atar",//Rowie Developer
  usage: "!istatistik"//Rowie Developer
};