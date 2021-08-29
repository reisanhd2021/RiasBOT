let handler = async m => m.reply(`
*⚠GRUP BOT⚠*

1. https://chat.whatsapp.com/GhFzeiOGDyM9z20rPrU6Tz
`.trim()) // Tambah sendiri kalo mau
handler.help = ['gcbot']
handler.tags = ['info']
handler.command = /^gcbot$/i

module.exports = handler
