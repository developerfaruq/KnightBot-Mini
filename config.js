/**
 * Global Configuration for WhatsApp MD Bot
 */

module.exports = {
    // Bot Owner Configuration
    ownerNumber: ['2348161271354','2348116533387'], // Add your number without + or spaces (e.g., 919876543210)
    ownerName: ['Knight Bot Mini', 'Professor'], // Owner names corresponding to ownerNumber array
    
    // Bot Configuration
    botName: 'Knight Bot Mini',
    prefix: '.',
    sessionName: 'session',
    sessionID: process.env.SESSION_ID || 'KnightBot!H4sIAAAAAAAAA5VU2bKiSBD9lYl61WgFRNSIGzGAC4gLKCoy0Q8lFFCyWlUg2OG/T+Dt290PMz133mo9eTLPyfwGshxTZKAGTL6BguAKMtQuWVMgMAFKGQSIgC7wIYNgApCxnir5qbme77N7FLHmrNf2cpe7jhnaKcpMqQ5ywt3GqfwGnl1QlJcEe78BFEXL4G/F2VOKo/9g9ngAhSDc7LTBfXbl9tHDdDmo3GNf67+BZ4sIMcFZOCsilCICEwM1JsTkc/QX2grxnVhLVLF0jkM3M6YOF58Cu0rGWA4feTMlN3/Hi5r1OfrWlRJX8E1UHXaaKyqqtUZLw92dTInjE94/hev8Pmb4iu/v9CkOM+TrPsoYZs2n6x6viBI3y9g4jfnd4zLeD53qtE2yy74TzsJCR16Axc1pa87vnyM+PFauTa6pZtZcflDzBalqaYbwCsNlOls+BNngxMTmirD/K3GTfHgl/j91v20pDlOE4QrrCYSLY6/QYybA3E2WkXm7eRTj3C+PzuGT9GvdcC7jaHvenRx9PrviTnNmFdP70Zk/rO26c92SznXfazjrJ33ISvI7lv5as9CqPo8UhZVT3bpK2Wm02oyCgh2PO4Eu+URJhFVWZmS7csf1yJGHibL15t5gN5JsVvaPa02MpDNXyiNl21kyNsLh2yujGDW6DybcswsICjFlBDKcZ+0Z3+e6APrVHnkEsVd5waoYQ922ypOl9bbitDGE3sCO4satIB+WsX3rTM/ipbHgcPYGuqAguYcoRb6GKctJs0aUwhBRMPnraxdkqGbvwrXhBK4LAkwoO2RlkeTQ/1D14xJ6Xl5mbN9kntouEAGT/s9jxBjOQtrWscwg8SJcITWCjIJJABOKfmSICPLBhJES/ehaNffbwgsKt3AURwZdkL4EwT6YAF4YjLghx0ucIA4mPP8n/XJvcWFRfMkQA12QwfY5gIRhCrM/KCIVAl2QvL5zo0F/LIojccyJ/aHYArQXzx/M20A+YhAnFEyAavCkKu7qbLtPC6+/WMhhKKthy+kj0w/LvEvirV1UJXP9kKePch3c4rXM5fzyYIrbI8c/5nqlcZF625aO9/YPIGACHGgrOb6EdjlSk33PePT4qVyHeZwONmsTuvPYVY2owUM0T6pNBRWWCGmn3jgSmR4SI4MVtBa5f+0Y1tTgHzUULpna+qsLfFRhD/0a7OjtxzLjH4F+JkPzcpWHaBwYYa/DJdk08/Y+vtk9uVnwa3t0EmvdjQdLwbWyRvJWm+JqS4fHYelQb7UtIM1X032R9qL7u5lfzZR8H2L4ZbNWw3YbYPSaCd+l+m9N35m33us/u7+AfB8z/9KqijNdOETc7efGkkpXbVhM5Q3c4OO0Yye+T+v9qh6frduVJAJ4Pr92QZFAFuQkBRNA0wsEXUDysnWyngX5byKpiq6rcjhv804gZfLP7rBxiiiDaQEmnCTxUn8w5KT3VybJCw3SqDV7aB6WMXj+DZ0aPa5rBwAA',
    newsletterJid: '120363161513685998@newsletter', // Newsletter JID for menu forwarding
    updateZipUrl: 'https://github.com/mruniquehacker/KnightBot-Mini/archive/refs/heads/main.zip', // URL to latest code zip for .update command
    
    // Sticker Configuration
    packname: 'Knight Bot Mini',
    
    // Bot Behavior
    selfMode: false, // Private mode - only owner can use commands
    autoRead: false,
    autoTyping: false,
    autoBio: false,
    autoSticker: false,
    autoReact: false,
    autoReactMode: 'bot', // set bot or all via cmd
    autoDownload: false,
    
    // Group Settings Defaults
    defaultGroupSettings: {
      antilink: false,
      antilinkAction: 'delete', // 'delete', 'kick', 'warn'
      antitag: false,
      antitagAction: 'delete',
      antiall: false, // Owner only - blocks all messages from non-admins
      antiviewonce: false,
      antibot: false,
      anticall: false, // Anti-call feature
      antigroupmention: false, // Anti-group mention feature
      antigroupmentionAction: 'delete', // 'delete', 'kick'
      welcome: false,
      welcomeMessage: '╭╼━≪•𝙽𝙴𝚆 𝙼𝙴𝙼𝙱𝙴𝚁•≫━╾╮\n┃𝚆𝙴𝙻𝙲𝙾𝙼𝙴: @user 👋\n┃Member count: #memberCount\n┃𝚃𝙸𝙼𝙴: time⏰\n╰━━━━━━━━━━━━━━━╯\n\n*@user* Welcome to *@group*! 🎉\n*Group 𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝚃𝙸𝙾𝙽*\ngroupDesc\n\n> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ botName*',
      goodbye: false,
      goodbyeMessage: 'Goodbye @user 👋 We will never miss you!',
      antiSpam: false,
      antidelete: false,
      nsfw: false,
      detect: false,
      chatbot: false,
      autosticker: false // Auto-convert images/videos to stickers
    },
    
    // API Keys (add your own)
    apiKeys: {
      // Add API keys here if needed
      openai: '',
      deepai: '',
      remove_bg: ''
    },
    
    // Message Configuration
    messages: {
      wait: '⏳ Please wait...',
      success: '✅ Success!',
      error: '❌ Error occurred!',
      ownerOnly: '👑 This command is only for bot owner!',
      adminOnly: '🛡️ This command is only for group admins!',
      groupOnly: '👥 This command can only be used in groups!',
      privateOnly: '💬 This command can only be used in private chat!',
      botAdminNeeded: '🤖 Bot needs to be admin to execute this command!',
      invalidCommand: '❓ Invalid command! Type .menu for help'
    },
    
    // Timezone
    timezone: 'Asia/Kolkata',
    
    // Limits
    maxWarnings: 3,
    
    // Social Links (optional)
    social: {
      github: 'https://github.com/mruniquehacker',
      instagram: 'https://instagram.com/yourusername',
      youtube: 'http://youtube.com/@mr_unique_hacker'
    }
};
  
