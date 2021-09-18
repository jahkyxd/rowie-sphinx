const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')
let prefix = ayarlar.prefix

exports.run = async (client, message, args) => { //Rowie Developer
  
  const embed = new Discord.MessageEmbed()
  .setColor("2d3136")//Rowie Developer
  .setAuthor(client.user.username, client.user.avatarURL())
  .setThumbnail(client.user.avatarURL())
  //.setFooter("Sphinx Yardım Menüsü", client.user.avatarURL())
  .setTitle('Sphinx Moderasyon Menüsü')
  .setImage('https://share.creavite.co/rDlVEbfzJvmRlneT.gif')
  .setDescription(`**Sphinx Moderasyon Menüsüne Hoşgeldin!\n\`Botun Moderasyon Kommutunu Kullanmak İçin Botun Rolünü Yukarı Taşıyınız.\`\n**━━━━━━━━━━━━━━━━━━━**\n• |\`${prefix}yargı\` : Sunucuda Bir Üyeyi Yargılar.**\n**━━━━━━━━━━━━━━━━━━━\n• |\`${prefix}yargı-yetkili-role\` : Yetkili Rolü.**\n**━━━━━━━━━━━━━━━━━━━\n• |\`${prefix}kick\`**:**Sunucudan Birisini Atar.**\n**━━━━━━━━━━━━━━━━━━━\n• |\`${prefix}kilit\`**:**Cheti Kilitler.**\n**━━━━━━━━━━━━━━━━━━━\n• |\`${prefix}kilit-aç\` : Cheti Kilitledikten Sonra Açmaya Yarar.**\n**━━━━━━━━━━━━━━━━━━━\n• |\`${prefix}kullanıcıbilgi\` : Kullanıcının Bilgilerini Gösterir.**\n**━━━━━━━━━━━━━━━━━━━\n• |\`${prefix}toplamkomut\` : Sphinx Botunun Komutlarını Gösterir.**\n**━━━━━━━━━━━━━━━━━━━\n• |\`${prefix}mute\` : Mute Atar.**\n**━━━━━━━━━━━━━━━━━━━\n• |\`${prefix}mute-yetkili-rol\` : Muteyi Hangi Rol Atabilir.**\n**━━━━━━━━━━━━━━━━━━━\n• |\`${prefix}muteyetki-sil\` : Mute Yetkili Rolü Sıfırlar.**\n**━━━━━━━━━━━━━━━━━━━\n• |\`${prefix}mute-log\` : Atılan Muteler Burda Gözükür.**\n**━━━━━━━━━━━━━━━━━━━\n• |\`${prefix}mute-log-kapat\` : Kayıtlı Olan Logu Sıfırlar.**\n`)
  
 message.channel.send(embed)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  permLevel: 0,//Rowie Developer
  aliases: ['mod', 'md', 'm', 'moderasyon-sistemi']
}

exports.help = {
  name: 'moderasyon',
  description: 'rowie',
  usage: 'moderasyon'
}



//const Discord = require("discord.js");
//const db = require("quick.db");
//
//
//exports.run = async (client, message, args) => {

//const yardım = new Discord.MessageEmbed()
//.setColor("2d3136")
//.setFooter("Sphinx Moderasyon Sistemi", client.user.avatarURL())
//.setImage('https://share.creavite.co/rDlVEbfzJvmRlneT.gif')
//.setTitle("<a:856449873972822046:866006099568099359> Sphinx Moderasyon Menüsü <a:856449873972822046:866006099568099359>")
 //.setTimestamp()
//.setDescription("**<a:Rowiee:866003422331535411> s!yargı**\n**<a:Rowiee:866003422331535411> s!yargı-yetkili-role**\n**<a:Rowiee:866003422331535411> s!yargı-yetkili-role-kapat**\n**<a:Rowiee:866003422331535411> s!kick **\n**<a:Rowiee:866003422331535411> s!kilit **\n**<a:Rowiee:866003422331535411> s!kilit-aç**\n**<a:Rowiee:866003422331535411> s!snipe**\n**<a:Rowiee:866003422331535411> s!kullanıcıbilgi**\n**<a:Rowiee:866003422331535411> s!toplamkomut**\n\n**<a:856449873972822046:866006099568099359> NOT: <a:856449873972822046:866006099568099359>**\n**<a:Rowiee:866003422331535411> s!davet ** = `Bot Davet.`")
//message.channel.send(yardım)
//}
//https://cdn.discordapp.com/attachments/860839431153778689/860839899841691668/Thor_Banner_Uzun.gif//
//exports.conf = {
 // enabled: true, 
//  guildOnly: false, 
 //  aliases: ["moderasyon","m"],
 // permLevel: `Yetki gerekmiyor.` 
//};

//exports.help = {
  //name: 'moderasyon',
  //category: 'moderasyon',
 // description: 'moderasyon Menüsü.',
//   usage:'moderasyon'
//}
