let handler = async m => m.reply(`
┏━━°❀❬ *DONASI* ❭❀°━━┓
┣➥ *TSL:* [0821-8022-8860]
┣➥ *Dana:* ['0821-8022-8860']
┣➥ *Gopay:* [0821-8022-8860]
┣➥ *Ovo:* [~~~~~~~~~~]
┃ 「 *Chat OWNER* 」
┃ > *Ingin donasi? Wa.me/6282180228860*
┗━━━━━━━━━━━━━━━━
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
