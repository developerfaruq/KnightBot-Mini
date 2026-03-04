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
    sessionID: process.env.SESSION_ID || 'KnightBot!H4sIAAAAAAAAA5VU2ZKiSBT9lYl81WhlVYmoiEEURRYRFJGJfsiCBFOQJUlw6fDfJ7CquvphpqfmLddzz73n3PsD5AWukY5uQPoBSoJbSFG3pLcSAQlMmzhGBPRBBCkEEujJArwqTXWwL3Lahspmu1ncq/IaKU7ApPl9dUlUOifIOMsv4NEHZfOa4fA3gFkc3nvWRq4CL9jKWJtbs9Fup3D0tA7ku+jc9WMx8OtRk3WAHSLEBOfJvDyiMyIw09HNhph8jf5ahmqpXhWhUXrH7WTAJ+FrtggvJ0cNs16wn5sWNnWeLv3ia/SZcmyshWUMVxwvsGp1KMZbM7jubMtTqoOYrgnaj2cxbPbpG/0aJzmKtAjlFNPbl+vOWylxhXuPOGRKrGAktGLvVKYRrw54jhEXp0F4Q87xqnjJ14ijAzby0YAZmy4/yPUB9a4r76o1qYj8oRuOtHm8uurcMjwVvxK3yYdX0v9T96Gd+nZlelk02thLg4F0aa+agl/T6WHqNzre3pOlxpotx3+NPtFH7klQPJPNYqO0GQtORX6Snc7CRSyNWveox2+z/VHw5U/6kDbkdywrUmAso92FjaNqJLqiHBjziyaUY397OAzhxdVlIbZmpVW1EYlbztifNpbiuLdhSI7+ULDnzmCmNGPjHjXHPPZwbkzll2dGKbppEZCYRx8QlOCaEkhxkT/PRn0Ao9ZFIUH0WV1QzQZxed5zbumWk7FvnibQFNckzNYz0w56JSqwgzR+7IqHF9AHJSlCVNcoWuKaFuRmorqGCaqB9Nf3PsjRlb7p1kXjmD6IManpLm/KrIDRh6gflzAMiyan7i0PlW6BCJCGn8eIUpwndVfGJockPOIWKUdIayDFMKvRzwQRQRGQKGnQz6ZViqiruyXOvI233YA+OD/1wBGQAMvxY0Zk2BHDCbzEMn/W3y4dLizLbzmioA9y2D0HkFBcw/yPGpEWgT7Int+ZMT+cCMJYmDDCUBQ6gO7i8ZN5FyhCFOKsBhJQdJa05UWZm35d1MPFQg4TWUlk8Jnph2PeJAnNALWZqu2K870x4yo1ZaZgVztbWHsMe1e1dskclWrd+OHLP4AACTQWFzhuGvcGLTavRpWE92NxGrmCviDJ6XydksXgEpS9iAQNgUuF5Fjd3Uzq93bOYZG3cJ9M9iO1Raribgqk29B5VTYvXbQItThEvwYjdrO2DNYT1trGcRZi28zZNSoPfmwoTOAPNsXErnIBaSzjicQy7QNGPcPg8PA2i/JM00x1by0UXSucmdtkS5XCVE7evPzspex9huGnzToNu22M0XMkvEv135q+Me+8N3z0fwF5nzL/0qlTf7bwieC4qr6qR6elWM5kC1rYm/W2WRTVV9e4Tg6b6kQyDjwe3/ugzCCNC3IGEqjPrxD0ASmazslaHhe/iaRMNU2RE7XLO4M1lT+7Y4vPqKbwXHYtPGJFkecm/NsrmxTlEtZHIAEusXerFDz+Brp4AyNqBwAA',
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
  
