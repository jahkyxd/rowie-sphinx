const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')
let prefix = ayarlar.prefix

exports.run = async (client, message, args) => { //Rowie Developer
  
  const embed = new Discord.MessageEmbed()//Rowie Developer
  .setColor("2d3136")
  .setAuthor(client.user.username, client.user.avatarURL())//Rowie Developer
  .setThumbnail(client.user.avatarURL())//Rowie Developer
  //.setFooter("Sphinx Yardım Menüsü", client.user.avatarURL())
  .setTitle('Sphinx Yardım Menüsü')
  .setImage('https://share.creavite.co/rDlVEbfzJvmRlneT.gif')
  .setDescription(`**Sphinx Yardım Menüsüne Hoşgeldin!\n\`Botun Kommutlarını Kullanmak İçin Botun Rolünü Yukarı Taşıyınız.\`\n**━━━━━━━━━━━━━━━━━━━**\n• |\`${prefix}moderasyon-sistemi\` : Moderasyon Sisteminiz Açar.**\n**━━━━━━━━━━━━━━━━━━━\n• |\`${prefix}user-sistemi\` : kullanıcı Sistemini Açarsınız.**\n**━━━━━━━━━━━━━━━━━━━\n• |\`${prefix}çekiliş-sistemi\`**:**çekiliş Sistemini Açar.**\n**━━━━━━━━━━━━━━━━━━━\n• |\`${prefix}abone-sistemi\`**:**Abone Siteminiz Açar.**\n**━━━━━━━━━━━━━━━━━━━\n• |\`${prefix}davet\` : Davet Linkini Görürsünüz.**\n`)
  
 message.channel.send(embed)
}
//Rowie Developer
exports.conf = {//Rowie Developer
  enabled: true,//Rowie Developer
  guildOnly: false,
  permLevel: 0,
  aliases: ['help', 'h', 'y', 'yardım']
}

exports.help = {
  name: 'yardım',
  description: 'rowie',
  usage: 'yardım'
}



//const Discord = require("discord.js");
//const db = require("quick.db");


//exports.run = async (client, message, args) => {

//const yardım = new Discord.MessageEmbed()
//.setColor("2d3136")
////.setImage('https://share.creavite.co/rDlVEbfzJvmRlneT.gif')
//.setTitle("<a:850263428609343528:861988274473533472> Sphinx Yardım Menüsü <a:850263428609343528:861988274473533472>")
// .setTimestamp()
//.setDescription("**<a:856541534228578324:861992543692390411> s!ticket-sistemi** = `ticket komutlarını gösterir`\n**<a:856541534228578324:861992543692390411> s!kayıt** = `kayıt sistemini Gösterir  `\n**<a:856541534228578324:861992543692390411> s!eğlence** = `Eğlence Komutlarını Gösterir`\n**<a:856541534228578324:861992543692390411> s!moderasyon** = `Moderasyon Komutlarını Gösterir`\n**<a:856541534228578324:861992543692390411> s!abone** = `Abone Komutları Gösterir`\n**<a:856541534228578324:861992543692390411> s!sphinx ** = `sphinx Komutlarını Gösterir.`\n**<a:856541534228578324:861992543692390411> s!güvenlik ** = `Sunucuyu Güzelleştiri.`\n**<a:856541534228578324:861992543692390411> s!şablon ** = `Güzel Şablonlar.`\n\n**<a:850263428609343528:861988274473533472> NOT: <a:850263428609343528:861988274473533472>**\n**<a:856541534228578324:861992543692390411> s!davet ** = `Bot Davet.`\n**<a:856541534228578324:861992543692390411> s!yapımcım ** = `Botun Yapımcısı.`\n**<a:856541534228578324:861992543692390411> s!prefix ** = `prefix değişir.`")
//message.channel.send(yardım)
//}

//exports.conf = {
//  enabled: true, 
//  guildOnly: false, 
//   aliases: ["help","y"],
// permLevel: `Yetki gerekmiyor.` 
//};
//
//exports.help = {
//  name: 'yardım',
//  category: 'kullanıcı',
//  description: 'Yardım Menüsü.',
 //  usage:'yardım'
//}
