let database = require("quick.db")
let ayarlar = require("../ayarlar.json")
//Rowie Developer


exports.run = async(client, message) => {//Rowie Developer
  if(!message.member.hasPermission(`ADMINISTRATOR`)) return message.channel.send(`Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin.`)
  
  let rol = message.mentions.roles.first()
  if(!rol) return message.channel.send(`Bir rol etiketlemen gerekmekte örnek: ${ayarlar.prefix}abone-y-rol @rol`)
  //Rowie Developer
  
  database.set(`aboneyetkilisi.${message.guild.id}`, rol.id)//Rowie Developer
  message.channel.send(`Abone yetkilisi başarıyla ${rol} olarak ayarlandı.`)//Rowie Developer
}//Rowie Developer//Rowie Developer
//Rowie Developer
exports.conf = {
  enabled: true,
  guildOnly: false,//Rowie Developer//Rowie Developer//Rowie Developer
  aliases: ['aboneyetkili'],
  perm: 0//Rowie Developer//Rowie Developer
}//Rowie Developer
exports.help = {//Rowie Developer
  name: 'aboneyetkili'
}//Rowie Developer
//Rowie Developer
exports.play = {//Rowie Developer
  kullanım: 'aboneyetkili @rol',//Rowie Developer
  açıklama: 'Abone Yetkili Rolünü Ayarlarsınız',//Rowie Developer//Rowie Developer
  kategori: 'Abone'//Rowie Developer//Rowie Developer
}//Rowie Developer
