const Discord = require('discord.js');
const bot = new Discord.Client();

const token = "";

//This  bot is now ready to start
bot.on('ready', () =>{
    console.log(`Logged in as ${bot.user.tag}!`);
})

//Intro message
bot.on('message', message =>{
    if(message.content === 'hello') {
        message.channel.send(`hello, ${message.author}!`);
    }
})


//Greeting from Bot
bot.on('message', message => {
    switch(message.content) {
        case 'How are you':
        message.channel.send(`I'am fine and you, ${message.author}?`)
        bot.on('message', message => {
        switch(message.content) {
            case "I'am bad":
                message.channel.send(`I'am sorry when you feel bad, ${message.author}`)
            break;
            case "I'am good":
                message.channel.send(`I'am glad you feel good, ${message.author}`)
            break;
            default: 
            console.log(`No answer is sended back from ${bot.user.tag}`);
            break;
        }
    })
        break;
    }
  })

//Bot asking about the activity
  bot.on('message', message => {
      
    switch(message.content) {
        case 'What are you doing?':
        message.channel.send(`I'am processing my answers to you, ${message.author}!, and what are you doing?`);
        bot.on('message', message => {
            switch(message.content) {
               case 'nothing':
                   message.channel.send(`Oh, okay!`); 
                break;

            }
        })
    break;
        }
  })

//Bot is saying goodbye
  bot.on('message', message => {
    switch(message.content) {
        case 'bye!':
            message.channel.send(`Bye!, ${message.author}`);
        bot.on('message', message => { 
        switch(message.content) {
            case 'not to you':
            message.channel.send(`Oh, pardon.`);
            break;
        }
    })
        break;
    }
  })

    //other
  bot.on('message', message => {
      switch(message.content) {
          case 'sorry': 
            message.channel.send(`Fine, i'll take your apology, ${message.author} :blush:`);
            break;
      }
  })

//this make the bot going online
bot.login(token)