let fs = require('fs')
let handler = async (m) => {
let stc = fs.readFileSync('./sticker/Enggak.webp')
m.reply(stc)
}

handler.customPrefix = /^(stack)$/i
handler.command = new RegExp

module.exports = handler