let handler = async (m, { conn, args }) => {
  let users = m.mentionedJid
  conn.groupMakeAdmin(m.chat, users)
}
let handler = async (m, { conn, text }) => {

    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
    else who = m.chat
    if (!who) throw `tag orangnya!`
    if (global.admin.includes(who.split`@`[0])) throw 'dia udah admin!'
    global.admin.push(`${who.split`@`[0]}`)
    conn.reply(m.chat, `@${who.split`@`[0]} sekarang admin!`, m, {
        contextInfo: {
            mentionedJid: [who]
        }
    })

}
handler.help = ['promote','pm'].map(v => v + ' @user')
handler.tags = ['group']
handler.command = /^(promote|pm)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = true
handler.botAdmin = true

handler.fail = null

module.exports = handler

