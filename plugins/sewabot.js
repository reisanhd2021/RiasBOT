const sewabot = () => { 
	return `
*OPEN JASA SEWA BOT*

Sewa Seminggu : 10k
Sewa Sebulan : 25k

*Payment :*
_Pulsa Dan Dana_

Minat?PC
Wa.me/6282180228860
`
}
handler.help = ['sewa']
handler.tags = ['info']
handler.command = /^(sewa)$/i

module.exports = handler