let database = require("quick.db")//Rowie Developer
let ayarlar = require("../ayarlar.json")//Rowie Developer
//Rowie Developer


exports.run = async(client, message) => {//Rowie Developer
  if(!message.member.hasPermission(`ADMINISTRATOR`)) return message.channel.send(`Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin.`)
  
  let rol = message.mentions.roles.first()//Rowie Developer
  if(!rol) return message.channel.send(`Bir rol etiketlemen gerekmekte örnek: ${ayarlar.prefix}abonerol @rol`)
  
  //Rowie Developer
  database.set(`abonerol.${message.guild.id}`, rol.id)//Rowie Developer//Rowie Developer
  message.channel.send(`Abone rolü başarıyla ${rol} olarak ayarlandı.`)
}

exports.conf = {//Rowie Developer
  enabled: true,//Rowie Developer//Rowie Developer//Rowie Developer
  guildOnly: false,//Rowie Developer
  aliases: ['abonerol'],
  perm: 0//Rowie Developer//Rowie Developer
}//Rowie Developer//Rowie Developer
exports.help = {
  name: 'abonerol'//Rowie Developer
}
//Rowie Developer
exports.play = {//Rowie Developer//Rowie Developer
  kullanım: 'abonerol @rol',
  açıklama: 'Abone Rolünü Ayarlarsınız',//Rowie Developer
  kategori: 'Abone'//Rowie Developer//Rowie Developer
}//Rowie Developer//Rowie Developer