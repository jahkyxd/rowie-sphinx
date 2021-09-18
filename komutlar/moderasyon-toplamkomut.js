const Discord = require('discord.js')//Rowie Developer
exports.run = function(client, message, args) {

const embed = new Discord.MessageEmbed()
.setTimestamp()
.setFooter("Sphinx Moderasyon Sistemi", client.user.avatarURL())
.addField(`Botta Bulunan Toplam Komut Sayısı`,`${client.commands.size}`)
  message.channel.send(embed)
  
  
};//Rowie Developer
exports.conf = {
    enabled: false,
    guildOnly: false,
    aliases: ["toplam-komut","komut-sayısı","komutsayısı"],//Rowie Developer
    permLevel: 0
  };
  
  exports.help = {
    name: 'toplamkomut'//Rowie Developer

  };

