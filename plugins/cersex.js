let axios = require("axios");
let handler = async(m, { conn, text }) => {

  await m.reply('Searching...')
     axios.get(`https://arugaz.herokuapp.com/api/cersex1`).then((res) => {
    let hasil = ` *Nih Cersex Kak :)*\n\n _${res.data.result}_ `
    conn.sendMessage(id, hasil ,MessageType.text)
   
handler.help = ['cersex']
handler.tags = ['dewasa']
handler.command = /^(cersex)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = true

module.exports = handler