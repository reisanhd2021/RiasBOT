let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, args, usedPrefix, DevMode }) => {
    if (args.length < 2) {
        return conn.reply(m.chat, `Gunakan format ${usedPrefix}minta <type> <jumlah>\ncontoh penggunaan: *${usedPrefix}minta money 100*`.trim(), m)
    } else try {
        let type = (args[0] || '').toLowerCase()
        let count = args[1] && args[1].length > 0 ? Math.min(9999999999999999999, Math.max(parseInt(args[1]), 1)) : Math.min(1)
        let users = global.DATABASE._data.users
        switch (type) {
            case 'money':
                {
                        global.DATABASE._data.users[m.sender].money += count * 1
                        conn.reply(m.chat, `Berhasil Meminta money sebesar ${count}`.trim(), m)
                }
                break
            case 'potion':
                {
                    global.DATABASE._data.users[m.sender].potion += count * 1
                    conn.reply(m.chat, `Berhasil Meminta Potion sebesar ${count}`.trim(), m)
            }
            break
            case 'sampah':
                {
                    global.DATABASE._data.users[m.sender].sampah += count * 1
                    conn.reply(m.chat, `Berhasil Meminta Sampah sebesar ${count}`.trim(), m)
            }
            break
            case 'diamond':
                {
                    global.DATABASE._data.users[m.sender].diamond += count * 1
                    conn.reply(m.chat, `Berhasil Meminta Diamond sebesar ${count}`.trim(), m)
            }
            break
            case 'xp':
                {
                    global.DATABASE._data.users[m.sender].exp += count * 1
                    conn.reply(m.chat, `Berhasil Meminta Xp sebesar ${count}`.trim(), m)
            }
            break
            case 'limit':
                {
                    global.DATABASE._data.users[m.sender].limit += count * 1
                    conn.reply(m.chat, `Berhasil Meminta limit sebesar ${count}`.trim(), m)
            }
            break
            case 'common':
                {
                    global.DATABASE._data.users[m.sender].common += count * 1
                    conn.reply(m.chat, `Berhasil Meminta Create Common sebesar ${count}`.trim(), m)
            }
            break
            case 'uncommon':
                {
                    global.DATABASE._data.users[m.sender].uncommon += count * 1
                    conn.reply(m.chat, `Berhasil Meminta Create Uncommon sebesar ${count}`.trim(), m)
            }
            break
            case 'mythic':
                {
                    global.DATABASE._data.users[m.sender].mythic += count * 1
                    conn.reply(m.chat, `Berhasil Meminta Create Mythic sebesar ${count}`.trim(), m)
            }
            break
            case 'legendary':
                {
                    global.DATABASE._data.users[m.sender].legendary += count * 1
                    conn.reply(m.chat, `Berhasil Meminta Create Legendary sebesar ${count}`.trim(), m)
            }
            break
            case 'pet':
                {
                    global.DATABASE._data.users[m.sender].pet += count * 1
                    conn.reply(m.chat, `Berhasil Meminta Create Pet sebesar ${count}`.trim(), m)
            }
            break
            default:
                return conn.reply(m.chat, `Gunakan format ${usedPrefix}minta <type> <jumlah> \ncontoh penggunaan: *${usedPrefix}minta money 100 *\n\n*List yang bisa di minta*\nMoney\nXp\nPotion\nSampah\nDiamond\nCommon\nUncommon\nMythic\nLegendary`.trim(), m)
        }
    } catch (e) {
        conn.reply(m.chat, `Gunakan format ${usedPrefix}minta <type> <jumlah>\ncontoh penggunaan: *${usedPrefix}minta money 100*`.trim(), m)
        console.log(e)
        if (DevMode) {
            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                conn.sendMessage(jid, 'Transfer.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', MessageType.text)
            }
        }
    }
}
    
handler.help = ['minta <Args>']
handler.tags = ['premium']
handler.command = /^(minta)$/i
handler.owner = false
handler.mods = false
handler.premium = true
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.money = 0

module.exports = handler
