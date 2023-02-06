const Discord = require('discord.js');
const JavaParser = require("java-parser");


const client = new Discord.Client({
    
    intents:131071,
    partials:[
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS",
        "GUILD_MESSAGE_REACTIONS",
        "GUILD_MESSAGE_TYPING"
    ]
})
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', (message) => {
    if (message.content.startsWith("!compile ")) {
        const code = message.content.substr("!compile ".length);
        try {
          const parsedCode = JavaParser.parse(code);
          console.log(parsedCode);
          // Implement logic to compile and run the parsed code
          message.channel.send("Compilation and execution successful.");
        } catch (error) {
          console.error(error);
          message.channel.send("Compilation failed: " + error);
        }
      } else if (message.content === "!compile") {
        message.channel.send("Please provide a Java code to compile and run.");
      }
    });


client.login('MTA3MDA1NjkxMTA4NjU3MTY4MQ.GOCoPb.TnOnRXnKtFSc4-9HSjk1ejsshROqsc0sBJTsnc');
