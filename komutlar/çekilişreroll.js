const ms = require('ms');
const Discord = require('discord.js');

exports.run = async (client, message, args) => {

    if(!message.member.hasPermission('MANAGE_SERVER')){
        return message.channel.send(':x: Bu Komutu Kullanmak İçin Sunucuyu Yönet" Yetkisine Sahip Olman Gerekiyor.');
    }
    if(!args[0]){
        return message.channel.send(':x: Lütfen Yapılan Çekilişin Mesaj IDsini Belirtin!').then(m => m.delete({timeout: 5000, reason:"It had to be done"}));
                message.delete({timeout: 6000, reason:"It had to be done"});
    }
    let giveaway = 
    client.giveawaysManager.giveaways.find((g) => g.prize === args.join(' ')) ||
    client.giveawaysManager.giveaways.find((g) => g.messageID === args[0]);

    if(!giveaway){
        return message.channel.send('Çekiliş Mesajı Bulunamadı `'+ args.join(' ') +'`.').then(m => m.delete({timeout: 5000, reason:"It had to be done"}));
                message.delete({timeout: 6000, reason:"It had to be done"});
    }
    client.giveawaysManager.reroll(giveaway.messageID)
    .then(() => {
        message.channel.send('Çekiliş Kazananı Yenilendi!').then(m => m.delete({timeout: 5000, reason:"It had to be done"}));
                message.delete({timeout: 6000, reason:"It had to be done"});
       })

    .catch((e) => {
        if(e.startsWith(`${giveaway.messageID} ID'li Çekiliş Sona Ermedi.`)){
            message.channel.send('Bu çekiliş henüz bitmedi!')
        } else {
            console.error(e);
            message.channel.send('Bir Hata Oluştu...');
        }
    });

};

exports.conf = {
  aliases: ['yenile'],
  permLevel: 0,
};
exports.help = {
  name: 'reroll',
   description: 'Çekilişi yeniler.',
  usage: 'reroll <id>'
};