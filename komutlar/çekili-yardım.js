const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')
let prefix = ayarlar.prefix

exports.run = async (client, message, args) => { //Rowie Developer
  
  const embed = new Discord.MessageEmbed()//Rowie Developer
  .setColor("2d3136")
  .setAuthor(client.user.username, client.user.avatarURL())//Rowie Developer
  .setThumbnail(client.user.avatarURL())//Rowie Developer
  //.setFooter("Sphinx Yardım Menüsü", client.user.avatarURL())
  .setTitle('Sphinx Çekiliş Menüsü')
  .setImage('https://share.creavite.co/rDlVEbfzJvmRlneT.gif')
  .setDescription(`**Sphinx Çekiliş Menüsüne Hoşgeldin!\n\`Botun Çekiliş Kommutunu Kullanmak İçin Botun Rolünü Yukarı Taşıyınız.\`\n**━━━━━━━━━━━━━━━━━━━**\n• |\`${prefix}start\` : Çekilişi Başlatırsınız.**\n**━━━━━━━━━━━━━━━━━━━\n• |\`${prefix}yenile\` : Yeniden Başlatır.**\n**━━━━━━━━━━━━━━━━━━━\n• |\`${prefix}sonlandır\`**:**Çekilişi Bitirir.**\n**━━━━━━━━━━━━━━━━━━━\n• |\`${prefix}davet\` : Davet Linkini Görürsünüz.**\n`)
  
 message.channel.send(embed)
}
//Rowie Developer
exports.conf = {//Rowie Developer
  enabled: true,//Rowie Developer
  guildOnly: false,
  permLevel: 0,
  aliases: ['r', 'r', 'cs', 'çekiliş-sistemi']
}

exports.help = {
  name: 'çekiliş',
  description: 'rowie',
  usage: 'çekiliş'
}

