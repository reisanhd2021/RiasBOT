let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn }) => {
const buttons = [
{buttonId: 'id1', buttonText: {displayText: 'Menu'}, type: 1}, 
{buttonId: 'id2', buttonText: {displayText: 'Owner'}, type: 1},  
]
const buttonMessage = {
    contentText: "*RiasBOTZ*\n\n*Join Group WhatsApp*\n\https://chat.whatsapp.com/GhFzeiOGDyM9z20rPrU6Tz\n\n*Subscribe Me*\n\https://youtube.com/channel/UC_GaCHzfGGH6Or_E87guvxQ\n\n\*LinkTree*\n\https://linktr.ee/Litebot", 
    footerText: '©Zyura', 
    buttons: buttons,
    headerType: 1
}
conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage)
}

handler.help = ['menu']
handler.tags = ['jdhsnaj'] 
handler.command = /^(menu)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false
handler.register = true

handler.fail = null
handler.exp = 20

module.exports = handler