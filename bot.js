const Discord = require(`discord.js`);
const client = new Discord.Client();
const keep_alive = require(`./keep_alive.js`)
const token = process.env.DISCORD_BOT_SECRET;

client.once(`ready`, () => {
  console.log(`ready to work again!`);
});

// Create an event listener for messages
client.on(`message`, message => {
console.log(message.content);
  


if (message.content === `cmds miku`) {
    message.channel.send("```here all my commands which is available for writing\n\nhell\nhells\ninv\nmember count\nserver\nuser-info\nimma eat some mochi\nlol\nwanna play osu?\ndamn\nTbh\nehh\nabuse\nloli\nmiku is flat\nreset\nhug\nwhats <442019078824001537>s grade\nstfu miku\nstella power\nbeat stella\nkekw\nrin power\nwasted\nwasted!\n\nthese are the command open for normies```")
  }

  if (message.content === `hell`) {
  
    message.channel.send(`heaven`);
  }

  if (message.content === `hells`) {
    message.channel.send(`user ${message.guild.name} heaven`)
    message.channel.send(`heavens`);
    }
    
  if (message.content === `inv`) {
  
    message.channel.send(`here is a invite link for inviting me https://discord.com/oauth2/authorize?client_id=735771411020382239&permissions=0&scope=bot`);
  }

  if (message.content === `member count`) {

    message.channel.send (`Total members: ${message.guild.memberCount}`);
  }

  if (message.content === `server`) {
	message.channel.send(`This server's name is: ${message.guild.name}`);
}

  if (message.content === `user-info`) {
	message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
}

 if (message.content === `imma eat some mochi`) {
  
    message.channel.send(`I wish I had some Mochi... sorry!`);
  }
 if (message.content === `lol`) {
  
    message.channel.send(`truly lol`);
  }


  if (message.content === `wanna play osu?`) {
    message.channel.send(`nah... i am not interested in playing with dumbs like you! :joy: :rofl: :joy: :rofl:`);
  }

  if (message.content === `damn`) {
    message.channel.send(`Yeah! Damn... thats tough :joy: :rofl: :joy: :rofl:`);
  }

  if (message.content === `Tbh`) {
    message.channel.send(`thank you for being honest! :joy: :rofl: :joy: :rofl:`);
  }

if (message.content === `ehh`) {
	message.channel.send(`hmm? what's wrong?`);
}

if (message.content === `abuse`) {
	message.channel.send(`ok, here you go!\nki bolli, ei, ei kuttar baccha, ei tui ki bolli, tui ki bolli, ei tui ki bolli, ei, ei, ei kuttar baccha, kuttar baccha eaiiiiii\n https://youtu.be/tcNbVs6esUM?t=59 `);
}


if (message.content === `abuse`) {
	message.channel.send(`I think this much is enough! i am embarrassed, forget about, ow!`);
}

if (message.content === `loli`) {
	message.channel.send(`:rage:are you reffering to me? damn, do you want to die! i am not flat just so you do know... so dont call me loli again:rage:`);
}


if (message.content === `miku is flat`) {
  message.channel.send(`what! are you insane, why are you calling me flat? i am not flat, you are sexually abusing me, just a sec let me report you to the police!`)
}

if (message.content === `reset`) {
  message.channel.send(`what? you want to reset? damn no! imma kill you`)
}


if (message.content === `hug`) {
  message.channel.send(`here i hug you <@${message.author.id}>\n but don't ask for it again`)
}

if (message.content === `tell em my grade`) {
  message.channel.send(`<@442019078824001537> is 8th grader`)
}

if (message.content === `whats <442019078824001537>s grade`) {
  message.channel.send(`<@442019078824001537> is 8th grader`)
}

if (message.content === `stfu miku`) {
  message.channel.send(`yeah, ik, you dont like me <@${message.author.id}>... and jealous of my beauty`)
}

if (message.content === `stella power`) {
  message.channel.send(`huh? who is stella <@${message.author.id}>?... i dont know her`)
}

if (message.content === `beat stella`) {
  message.channel.send(`done... she is too weak!! kekw... I asked rin to beat stella... do you know what happend...\n stella couldn't even bear the first blow... damn she died in the first blow! seriously?...`)
}

if (message.content === `kekw`) {
  message.channel.send(`why are you laughing so hard? you goddamn <@${message.author.id}>!`)
}

if (message.content === `rin power`) {
  message.channel.send(`do you want to see Rin's power <@${message.author.id}> too bad! you can't cause she is too powerful for you to handle... only miku can handle it but here a bit of her power\nhttps://cdn.discordapp.com/attachments/724345223517569155/740884590226571284/unknown.png`)
}

if (message.content === `wasted`) {
  message.channel.send(`you sure likeed  gta v wasted screen very much  https://thumbs.gfycat.com/CarefulFarawayIndochinahogdeer.webp)`)
}

if (message.content === `wasted!`) {
  message.channel.send(`https://thumbs.gfycat.com/CarefulFarawayIndochinahogdeer.webp`)
}

if (message.content === `roast stella`) {

 let MB = new Discord.MessageEmbed();
            MB.setTitle("Stella is so weak");
            MB.setDescription("Stella is so weak that she cant bear Rin's first blow");
            MB.setFooter(`Stella bot a utter trash!`);
            MB.setColor("#de0000");
            message.channel.send(MB)
}


if (message.content === `miku cmds`) {

 let MB = new Discord.MessageEmbed();
            MB.setTitle("these are my commands");
            MB.setDescription("here all my commands which is available for writing\n\nhell\nhells\ninv\nmember count\nserver\nuser-info\nimma eat some mochi\nlol\nwanna play osu?\ndamn\nTbh\nehh\nabuse\nloli\nmiku is flat\nreset\nhug\nwhats <442019078824001537>s grade\nstfu miku\nstella power\nbeat stella\nkekw\nrin power\nwasted\nwasted!\nyou are cute miku");
            MB.setFooter(`these are the command open for normies!`);
            MB.setColor("#de0000");
            message.channel.send(MB)
}


if (message.content === `call the cops miku`) {
  message.channel.send(`moshi moshi.... keisatsu desu ka?  https://media1.tenor.com/images/54c1a5e11b6871b6578d5315af79bd1f/tenor.gif?itemid=17101208)`)
}

if (message.content === `do you love the way i am mad? miku?`) {
  message.channel.send(`https://youtu.be/x61-mXQ5HVA?list=RDx61-mXQ5HVA`)
}

if (message.content === `you are cute miku`) {
  message.channel.send(`awww.... thank you, ikr! i am so pretty, yeah.... thank you tbh.... ahh! i am feeling so shy, stop staring at me... jeez`)
}




});
client.login(token)