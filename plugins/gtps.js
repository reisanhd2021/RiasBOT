let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
*GrowZF*

-Server by: Zyura
- Co Server: xRynzyy and MReisanHD
 -Cpp Develped: ExRama
-Protect By : XDevil

*======================*

Price role:
> Vip 30wls <
> Mods 100wls <
> Admin 150wls <
> Dev 350wls<
> Owner 450wls <
> Founder 600wls <
> SC 850  <
*=====================*

LINK GROUP :
*https://chat.whatsapp.com/LbU9oSJ3uJHKjWhJpLViVf*

HOST: https://www.mediafire.com/file/rsfkw467hhohgdw/GrowZFV3.tar/file

LINK DISCORD:
https://discord.gg/Q9vwTWXMrj

DEPOSIT BUYING ROLE? = RYNZYYMC
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*BOT TERVERIFIKASI*', 'status@broadcast')
} 
handler.help = ['gtps']
handler.tags = ['info']
handler.command = /^(gtps)$/i

handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.fail = null
handler.exp = 100

module.exports = handler