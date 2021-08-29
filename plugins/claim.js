let handler = async (m, { conn }) => {
    let __timers = (new Date - global.DATABASE._data.users[m.sender].lastclaim)
    let _timers = (60 - __timers)
    let timers = clockString(_timers) 
    let user = global.DATABASE._data.users[m.sender]
    if (new Date - global.DATABASE._data.users[m.sender].lastclaim > 43200000) {
        conn.reply(m.chat, `Kamu sudah mengclaim dan mendapatkan *1000* money , *1* potion , *1000* EXP, *5* Tiket  dan *50* Health `, m)
        user.money += 1000
        user.potion += 1
        user.exp += 1000
        user.limit += 5
        user.health += 50
        user.lastclaim = new Date * 1
    } else conn.reply(m.chat, `Silahkan Menunggu *${timers}* Lagi Untuk Bisa Claim Hadiah Lagi`, m)
}
handler.help = ['claim']
handler.tags = ['xp','rpg']
handler.command = /^(claim)$/i

handler.fail = null

module.exports = handler

function clockString(ms) {
  let h = Math.floor(ms / 36000)
  let m = Math.floor(ms / 6000) % 60
  let s = Math.floor(ms / 100) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
