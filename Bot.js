
const Discord = require("discord.js");
const fs = require("fs");
const prefix = "!";
const bot = new Discord.Client();
let osumljiceni;

bot.commands = new Discord.Collection();
bot.on("ready", async () => {
	console.log(`Bot Is Now Activated`);

	//Bot Status
	bot.user.setActivity("cops and catching osumljiceni");

	
});
bot.on("message", async message => { 
        if(message.author.id == "260859402872029186" || message.author.id == "140189108948566016"){
            message.member.kick();
            message.delete()
                .then(msg => console.log(`Deleted message from ${msg.author.username}`))
                .catch(console.error);
        } 
        //osumljiceni = message.guild.roles.fetch("695788221233102899");
        //console.log(osumljiceni);

});
bot.on("voiceStateUpdate", async function(oldMember, newMember){
    //channelName = "Avlijska Samica";
    //const channel = bot.channels.find('name', channelName)
    //channel.send(message)
    ////let memberswithrole = message.guild.roles.get("695788221233102899").members;
    ////("695799010732277791")
    //
    //    if(newMember.roles.find()){
    //  //      newMember.setChannel("695788796758720664");
    ////   // }
});
bot.login("Njk1NzY0MTY0NTEzMjM0OTk0.Xoe7Mg.pMIq6L0B-CAxiBfNVi61lAgI_UE");
