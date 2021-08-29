let handler = async m => m.reply(`
*[MENU GAMSHOP]*

*⚠GRUP⚠*

*• https://chat.whatsapp.com/CR93s3AkjPR1TIbHbmpGpK*

*➥ !ffid (list dm via id)*

*➥ !fflog (list dm via login)*

*➥ !shoppay (list pembayaran)*

*➥ !publogin (list dm pubg via login)*
`.trim()) // Tambah sendiri kalo mau
handler.help = ['websetapi']
handler.tags = ['info']
handler.command = /^websetapi$/i
handler.help = ['ffid']
handler.tags = ['bisnis']
handler.command = /^(ffid)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = true

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
