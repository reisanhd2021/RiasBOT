let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
┏━━°❀❬ *INFO* ❭❀°━━┓
┃
┃> Bot Recoded By :
┃• PGID
┃
┃> Bot Dibuat Dengan :
┃• JavaScript via NodeJS
┃• FFmpeg
┃
┃> Thanks To :
┃• Nurutomo
┃• Drawl Nag
┃• RC047/Kuhong
┃
┣━━°❀❬ *DONASI* ❭❀°━━┓
┣➥ *TSL:* [0821-8022-8860]
┣➥ *Dana:* [0821-8022-8860]
┣➥ *Gopay:* [0821-8022-8860]
┃ 「 *Chat OWNER* 」
┃ > *Ingin donasi? https://wa.me/6282180228860*
┗━━━━━━━━━━━━━━━━
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*BOT TERVERIFIKASI*', 'status@broadcast')
}
handler.help = ['info']
handler.tags = ['info']
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
