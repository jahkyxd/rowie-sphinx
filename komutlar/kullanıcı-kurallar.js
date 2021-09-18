
const Discord = require("discord.js");


exports.run = async (client, message, args) => {
  
let user = message.mentions.users.first() || message.author  
//Rowie Developer
const exampleEmbed = new Discord.MessageEmbed()
.setColor("2d3136")//Rowie Developer
 .setFooter(" Sphinx Kurallar ", client.user.avatarURL())//Rowie Developer
 //.setTitle(`${client.user.username}`)
 .setDescription(`**<a:kralrowie:880140797335461988>「 Sphinx Kurallar 」<a:kralrowie:880140797335461988>**

 ** Reklam **
:white_small_square:  Sözlü reklamlar, link ile reklam, özelden reklam, resim ile reklam ve benzeri şekilde reklamlar yapmak yasaktır.

** Küfür, Argo, Hakaret **
:white_small_square:  Her kanalda küfür etmek ve argo kullanmak yasaktır.
:white_small_square:  Üyelere karşı hakaret etmek ve dalga geçme yasaktır.

** Yetkililer ve Yetki **
:white_small_square:  Yetki istemek yasaktır.
:white_small_square:  Yetkili alımları ile ilgili soru sormak yasaktır.
:white_small_square:  Yetkilileri boş yere @etiketlemek ve @etiketleyerek spam yapmak yasaktır.
:white_small_square:  Yetkililere saygılı olun.

** Spam, Flood, Etiketleme **
:white_small_square:  Spam yapmak yasaktır.
:white_small_square:  Bir kelimeyi sürekli bir mesajda yazmak yasaktır.
:white_small_square:  Flood yapmak alt alta yazmak yasaktır.
:white_small_square:  Bir üyeyi sürekli @etiketlemek yasaktır.

** Din, Siyaset, Cinsellik **
:white_small_square:  Din ile ilgili konuşmak, tartışmak, kullanıcı adlarını din ile ilgili koymak yasaktır.
:white_small_square:  Siyaset ile ilgili konuşmak, tartışmak, kullanıcı adlarını siyaset ile ilgili koymak yasaktır.
:white_small_square:  18+ fotoğraflar paylaşmak ve konuşmak yasaktır.

** Kavga, Tartışmak **
:white_small_square:  Kavga etmek, kavgaya dahil olmak ve tartışmak yasaktır.
:white_small_square:  Herhangi bir sorununuz varsa yetkiliye danışınız`)

message.channel.send(exampleEmbed)
  
  //Rowie Developer
}
  
exports.conf = {//Rowie Developer
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 1//Rowie Developer
};

exports.help = {
  name: 'kurallar',//Rowie Developer
  description: 'kuralları atar',//Rowie Developer
  usage: 'kurallar'
}; 