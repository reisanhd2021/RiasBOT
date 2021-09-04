global.DeveloperMode = 'false' //true Or false
global.linkGC = ['https://chat.whatsapp.com/GhFzeiOGDyM9z20rPrU6Tz']
global.channelYT = ['https://youtube.com/channel/UC_GaCHzfGGH6Or_E87guvxQ'] 
global.owner = ['6281806695954']// Put your number here
global.mods = ['6281806695954'] // Want some help?
global.prems = ['13172021849','6281806695954','6289644913986','628978887128','6282180228860','6289654027829','6285812638897','6285156800599','6281230506190']// Premium user has unlimited limit
global.vip = ['6281806695954']//put your number Here
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  nzcha: 'http://nzcha-apii.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  fdci: 'https://api.fdci.se',
  dzx: 'https://api.dhamzxploit.my.id',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  pencarikode: 'https://pencarikode.xyz',
  aditapi: 'rias-api.heroku.app.com',
  zyapi:'zyura.herokuapp.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'HIRO',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.xyz': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://rias-api.herokuapp.com': 'Rias',
  'https://zyura.herokuapp.com': 'Zyura'
}

// Sticker WM
global.packname = 'Reisan'
global.author = 'ReiBots Is The Best'

global.multiplier = 1000 // The higher, The harder levelup

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
