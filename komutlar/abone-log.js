let database = require("quick.db")//Rowie Developer
let ayarlar = require("../ayarlar.json")



exports.run = async(client, message) => {
  if(!message.member.hasPermission(`ADMINISTRATOR`)) return message.channel.send(`Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin.`)
  //Rowie Developer
  let log = message.mentions.channels.first()//Rowie Developer
  if(!log) return message.channel.send(`Bir kanal etiketlemen gerekmekte örnek: ${ayarlar.prefix}abonelog #kanal`)
  //Rowie Developer//Rowie Developer
  
  database.set(`abonelog.${message.guild.id}`, log.id)
  message.channel.send(`Abone kanalı başarıyla ${log} olarak ayarlandı.`)//Rowie Developer
}

exports.conf = {//Rowie Developer//Rowie Developer//Rowie Developer
  enabled: true,//Rowie Developer
  guildOnly: false,
  aliases: ['abonelog'],//Rowie Developer
  perm: 0//Rowie Developer
}
exports.help = {//Rowie Developer//Rowie Developer//Rowie Developer
  name: 'abonelog'//Rowie Developer
}

exports.play = {//Rowie Developer
  kullanım: '!abonelog #kanal',//Rowie Developer
  açıklama: 'Abone Logunu Ayarlarsınız',
  kategori: 'Abone'
}//Rowie Developer