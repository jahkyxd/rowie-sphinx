const Discord = require('discord.js');
exports.run = async (client, message, args) => {
  
   if (!message.member.hasPermission("BAN_MEMBERS"))
    return message.channel.send(` Bu komutu kullanabilmek için \`Üyeleri Yasakla\` yetkisine sahip olmalısın!`);
  //Rowie Developer
 let kullanici = message.mentions.users.first()//Rowie Developer
 if(!kullanici) return message.channel.send("Yargı kişiyi etiketlemelisin!")//Rowie Developer

const embed = new Discord.MessageEmbed()//Rowie Developer
.setColor("2d3136")//Rowie Developer
.setTitle(` ${kullanici.tag} adlı kullanıcı Yargı.`)//Rowie Developer//Rowie Developer
.setImage(`https://c.tenor.com/0On0_pw3TkQAAAAC/banned-thor.gif`)
message.channel.send(embed)
  message.guild.members.ban(kullanici)//Rowie Developer
}

    exports.conf = {//Rowie Developer//Rowie Developer
        enabled: true,//Rowie Developer
        guildOnly: false,
        aliases: [],//Rowie Developer
        permLevel: 0,//Rowie Developer
    kategori: "moderasyon",
    };
      //Rowie Developer
    exports.help = {//Rowie Developer
        name: 'yargı',//Rowie Developer
        description: 'yargı',//Rowie Developer
        usage: 'yargı',//Rowie Developer
    
    };