let handler  = async (m, { conn }) => {
  conn.reply(m.chat,`Kamu${pickRandom(global.w)}`, m)
}
handler.help = ['w']
handler.tags = ['rpg']
handler.command = /^(w)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.money = 200000
handler.anakkucing = 1

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.w = [
" Melamar Pekerjaan Menjadi *Penebang Pohon* Dan Kamu Mendapatkan 15740 Money Dan Anak Kucing",
" Selesai *Mengcoding* Dan Kamu mendapatkan 10000 Money Dan Anak Kucing",
" Melamar Pekerjaan Menjadi *Kuli Bangunan* Dan Kamu Mendapat 12000 Money Dan Anak Kucing",
" Hanya Mendapatkan Pekerjaan Sebagai *Tukang Sampah* Maaf Kamu Hanya Dapat 3000 Money Dan Anak Kucing",
" Sangat Beruntung Dan Mendapat Pekerjaan Sebagai *Direktur* Dan Kamu Mendapat 200000 Money Dan Anak Kucing",
" *Tidak Mendapatkan Pekerjaan* Sama Sekali Tetapi Kamu Mendapatkan Anak Kucing Untuk Menghibur Diri",
" Baru Saja *Mengantar Penumpang* Dan Mendapatkan 10000 Money Dan Anak Kucing",
" Baru Saja Selesai C0L* Dan Kamu Mendapatkan Anak Kucing :)",
" Baru Saja *Mengambil Barang Tetangga* Dan Mendapatkan 200000 Money Dan Seekor Anak Kucing ( Ingat Itu Haram Ngab )",
]
