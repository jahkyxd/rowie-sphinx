const ms = require('ms');
const Discord = require('discord.js');

exports.run = async (client, message, args) => {

    if(!message.member.hasPermission('MANAGE_SERVER')){
        return message.channel.send(':x: Bu Komutu Kullanmak İçin "Sunucuyu Yönet" Yetkisine Sahip Olman Gerekiyor.');
    }

    let giveawayChannel = message.mentions.channels.first();
    if(!giveawayChannel){
        return message.channel.send('Lütfen Bir Kanal Etiketleyin!').then(m => m.delete({timeout: 5000, reason:"It had to be done"}));
                message.delete({timeout: 6000, reason:"It had to be done"});
    }

    let giveawayDuration = args[1];
    if(!giveawayDuration || isNaN(ms(giveawayDuration))){
        return message.channel.send(' Bir süre belirtiniz!').then(m => m.delete({timeout: 5000, reason:"It had to be done"}));
                message.delete({timeout: 6000, reason:"It had to be done"});
    }

    let giveawayNumberWinners = args[2];
    if(isNaN(giveawayNumberWinners) || (parseInt(giveawayNumberWinners) <= 0)){
        return message.channel.send('Bir kazanan sayısı belirtmediniz!').then(m => m.delete({timeout: 5000, reason:"It had to be done"}));
                message.delete({timeout: 6000, reason:"It had to be done"});
    }

    let giveawayPrize = args.slice(3).join(' ');
    if(!giveawayPrize){
        return message.channel.send('Peki ödül ne olacak? Onu belirtmen gerek!').then(m => m.delete({timeout: 5000, reason:"It had to be done"}));
                message.delete({timeout: 6000, reason:"It had to be done"});
    }

    client.giveawaysManager.start(giveawayChannel, {
        time: ms(giveawayDuration),
        prize: giveawayPrize,
        winnerCount: giveawayNumberWinners,
        hostedBy: client.ayarlar.hostedBy ? message.author : null,
        messages: {
            giveaway: (client.ayarlar.everyoneMention ? "@everyone\n\n" : "")+"🎉 **ÇEKİLİŞ BAŞLADI** 🎉",
            giveawayEnded: (client.ayarlar.everyoneMention ? "@everyone\n\n" : "")+"🎉 **ÇEKİLİŞ BİTTİ** 🎉",
            timeRemaining: "Kalan süre: **{duration}**!",
            inviteToParticipate: "Katılmak için 🎉 tepkisine tıklayın!",
            winMessage: "Tebrikler, {winners}! **{prize}** Ödülünü Kazandın!",
            embedFooter: "Çekiliş",
            noWinner: "Giveaway iptal edildi, geçerli katılım yok.",
            hostedBy: "Çekilişi Yapan: {user}",
            winners: "Kazanan",
            endedAt: "Sona Erdi",
            units: {
                seconds: "saniye",
                minutes: "dakika",
                hours: "saat",
                days: "gün",
                pluralS: false
            }
        }
    });

    message.channel.send(`Çekiliş ${giveawayChannel} Kanalında Başlatıldı!`).then(m => m.delete({timeout: 5000, reason:"It had to be done"}));
                message.delete({timeout: 6000, reason:"It had to be done"});

};

exports.conf = {
  aliases: ['start'],
  permLevel: 0,
};
exports.help = {
  name: 'başlat',
   description: 'Çekilişi Başlatır.',
  usage: 'başlat #kanal <Süre> <Kazanacak Kişi Sayısı> <Ödül Adı>'
};