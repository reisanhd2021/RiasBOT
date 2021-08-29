let handler = async (m, { conn }) => {
  m.reply('Sedang Diproses...')
  
let info = `
┏━━°❀❬ *PERATURAN BOT* ❭❀°━━┓
┃
┃> PERINGATAN :
┃• Telpon/VC = Blok Otomatis
┃ 
┃> BANNED + DENDA 5K :
┃• Spam Chat
┃• Spam Call
┃• Spam SMS
┃• Menghina Bot
┃
┃> BANNED SEMENTARA :
┃• Laporan Request Fitur Palsu/Main-Main
┃• Laporan Bug Pada Fitur Palsu/Main-Main
┃
┃> BANNED + BLOK PERMANEN :
┃• Merusak Nama Baik Bot
┃• Meniru/Menyalin Teks² Pesan Pada Bot Tanpa Izin
┃• Spam Menu Ga Jelas
┃
┃
┃> Note : Jika Tidak Membayar Denda
┃> Maka Bot Akan Banned User Permanen
┃
┗━━━━━━━━━━━━━━━━

┏━━°❀❬ *DENDA* ❭❀°━━┓
┣➥ *GOPAY:* [0821-8022-8860]
┣➥ *DANA:* [0821-8022-8860]
┗━━━━━━━━━━━━━━━━
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*BOT TERVERIFIKASI*', 'status@broadcast')
} 
handler.help = ['rules']
handler.tags = ['info']
handler.command = /^(rules)$/i

handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.fail = null
handler.exp = 100

module.exports = handler