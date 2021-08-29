function handler(m) {
╭─「 BUY PREMIUM 」
│ 
│ > Keuntungan :
│• Limit Tidak Terbatas!
│• Fitur Premium Dapat Digunakan!
│• Dapat Menambahkan Bot Ke Grup!
│
│ > Bonus :
│• Diberi 5 Limit Setiap Hari
│
│ > Harga :
│• 10K / Bulan (4 Minguu)
│• 30K / Tahun (12 Bulan)
│• 50K / VIP (Permanen)
│
│ > Pembayaran :
│• TSL : 6282180228860
│• Dana : 6282180228860
╰────
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*BOT TERVERIFIKASI*', 'status@broadcast')
} 
handler.customPrefix = ['Test']
handler.command = new RegExp

module.exports = handler