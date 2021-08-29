let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
     「 BUY ROLE GrowZF」
*======================*

Price role:
> Vip 30wls <
> Mods 100wls <
> Admin 150wls <
> Dev 350wls<
> Owner 450wls <
> Founder 600wls <
> SC 850  <
Mau Main Gtps?Ketik #Gtps
*=====================* 
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*BOT TERVERIFIKASI*', 'status@broadcast')
} 
handler.help = ['pricerole']
handler.tags = ['info']
handler.command = /^(pricerole)$/i

handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.fail = null
handler.exp = 100

module.exports = handler