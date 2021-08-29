function handler(m) {
  // Ini cuma contoh, jgn di uncomment -_-
  // F this.sendContact(m.chat, '6283144570377', 'RakuChan', m)
  this.sendContact(m.chat, '6282180228860', 'Zyura', m)
}
handler.customPrefix = ['Owner']
handler.command = new RegExp

module.exports = handler