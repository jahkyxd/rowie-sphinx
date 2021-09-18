const Discord = require('discord.js')
const data = require('croxydb');//Rowie Developer
exports.run = async(client, message, args) => {
if(!message.member.permissions.has('ADMINISTRATOR'))//Rowie Developer
        return message.channel.send(new Discord.MessageEmbed()
        .setThumbnail(message.author.avatarURL({dynamic:true}))
        .setImage('https://cdn.glitch.com/0c8ef551-5187-48a8-9daf-f2cc35630f21%2Fyoneticigif.gif')//Rowie Developer
        .setColor("2d3136")
        .setTitle('Bir hata oldu! ')
        .setDescription(`Bu komutu kullanmak için gerekli yetkiye sahip değilsiniz.`))
        
        
        if(!message.mentions.channels.first()) 
        return message.channel.send(new Discord.MessageEmbed()
        .setColor("2d3136")//Rowie Developer
        .setTitle('Bir hata oldu! ')
        .setThumbnail(message.author.avatarURL({dynamic:true}))
        .setDescription('Bir kanal etiketlemeyi unuttunuz.'));
  //Rowie Developer
  
        let mentionChannel = message.mentions.channels.first();
  
        data.set(`mute.log.${message.guild.id}`, mentionChannel.id);
  
        message.channel.send(new Discord.MessageEmbed()
        .setTitle('Başarılı!')//Rowie Developer//Rowie Developer
        .setColor("2d3136")
        .setThumbnail(message.author.avatarURL({dynamic:true}))//Rowie Developer
        .setDescription(`Mute sistemi başarıyla ${mentionChannel} kanalı olarak seçtiniz.`));
}

exports.conf = {
  enabled: true,
  guildOnly: false,//Rowie Developer
  aliases: [],
  permLevel: 0
};//Rowie Developer

exports.help = {
  name: 'mute-log',
};