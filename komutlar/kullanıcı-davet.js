const RowieDiscord = require('discord.js');
const RowieClient = new RowieDiscord.Client();
exports.run = (client, message) => {//Rowie Developer
  const RowieEmbed = new RowieDiscord.MessageEmbed();
  RowieEmbed.setColor("2d3136")
  .setFooter("Sphinx Sistemi", client.user.avatarURL())
  RowieEmbed.setDescription(`
  ═══════◥◣**Sphinx Davet Linkleri**◢◤═════
  ➤ [** SPHİNX DAVET LİNKİ**](https://discord.com/api/oauth2/authorize?client_id=851148996772364299&permissions=8&scope=bot)
   
  ➤ [** DİSCORD SUNUCUMUZUN LİNKİ**](https://discord.gg/FCBAkUhGJE)
  
  ➤ [** SPHİNX WEB SİTESİ LİNKİ**](https://bit.ly/sphinxsite)
   
  ➤ [** SPHİNX'SE OY VERMEK İÇİN TIKLAYIN**](https://bit.ly/Sphinxx)
  ═══════◥◣**Sphinx Davet Linkleri**◢◤══════
  `)
  .setImage("https://share.creavite.co/rDlVEbfzJvmRlneT.gif")
  message.channel.send(RowieEmbed)//Rowie Developer
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],//Rowie Developer
  kategori: "Bot",//Rowie Developer
  permLevel: 0
};//Rowie Developer//Rowie Developer

exports.help = {//Rowie Developer//Rowie Developer
  name: 'davet',
  description: 'Bot ile ilgili bilgi verir.',//Rowie Developer
  usage: 'bilgi'
};