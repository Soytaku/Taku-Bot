import { promises } from 'fs'
import { join } from 'path'
import { xpRange } from '../lib/levelling.js'
let tags = {
  'sticker menu': '*πππΈπ²πΊπ΄ππΌπ΄π½π*'

}
const defaultMenu = {
  before: `
ββγ ππππ-πππ γ
ββπκ°α΄α΄Κα΄: *%date*
ββππ·πΎπ»π°β¨${name}π₯°
βββ¨α΄α΄α΄α΄Κ xα΄ : *%totalexp* 
ββπΙ΄Ιͺα΄ α΄Κ : *%level*
βββββΧ
title: 'α΄Κ α΄α΄α΄α΄Κ Κα΄α΄ α΄α΄ α΄‘Κα΄α΄sα΄α΄α΄',
body: 'Β©ππππ’-π΅ππ‘', 
sourceUrl: `https://github.com/
`.trimStart()
}
let handler = async (m, { conn, usedPrefix: _p, __dirname }) => {
  try {
    const pp2 = './menu.jpg'
    let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
    let { exp, limit, level, role } = global.db.data.users[m.sender]
    let { min, xp, max } = xpRange(level, global.multiplier)
    let name = await conn.getName(m.sender)
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    for (let plugin of help)
      if (plugin && 'tags' in plugin)
        for (let tag of plugin.tags)
          if (!(tag in tags) && tag) tags[tag] = tag
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Powered by https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      footer,
    ].join()
    let text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      me: conn.getName(conn.user.jid),
      npmname: _package.name,
      npmdesc: _package.description,
      version: _package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp,
      github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
      level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])

    const pp = await conn.profilePictureUrl(pp2).catch(_ => './menu.jpg')

    const sections = [
      {
     title: `*πππππ πππ ππππ*`,
     rows: [
         {title: "βπ¬βπππππππππππππ", rowId: '.ayuda', description:'π°πΏππ΄π½π³π΄ π° πππ°π π»πΎπ π²πΎπΌπ°π½π³πΎπ π³π΄π» π±πΎπ π πππ ππ΄πΆπ»π°π' },
         {title: "ββ¨βππππ ππππππππ", rowId: '.allmenu', description:'πΌππππππ ππ πππππ πππ ππππππππππππ' },
         {title: "βπβππππππππ", rowId: '.menusticker', description:'πππππππ ππ πππππ ππππ ππππ πππππππ' },
         {title: "βπ₯βππππππππππ", rowId: '.menudes', description:'πΌππππππ ππ πππππ ππ πππππππππ' },
         {title: "βπ?βππππ ππππππ", rowId: '.menugames', description:'πππππππ ππ πππππ ππ ππππππ ππππ πππππππ ππ πππππ' },
         {title: "βπβπππ ππππ", rowId: '.menuimg', description:'πππππππ ππ πππππ ππ πππππ'
         },
         {title: "βπ§βππππππ", rowId: '.menuaud', description:'πππππππ ππ πππππ ππ ππππππ πππ πππ' },
         {title: "βπ βπππππ ππππ", rowId: '.menutools', description:'πΌππππππ ππ ππππ ππππππππππππ' }, 
         {title: "βπβππππ ππππππ", rowId: '.menugrup', description:'πππππππ ππ πππππ ππ ππππ ππ πππππ'
         },
         {title: "βπβπππ/πππππππ", rowId: '.menuexp', description:'πΌππ΄ππππ° π»π° π»πΈπππ° π΄ππΏ π π»πΈπΌπΈππ΄π' }, 
         {title: "βπβππππ +ββ", rowId: '.menu18', description:'π΄πππ ππππππ πππππππππ ππ ππππ πππππππππππππππ πππ πππππ π°π²ππΈππ°  π»πΎπ π²πΎπΌπ°π½π³πΎπ +π·πΎ' },
         {title: "βπβπππππ πππ", rowId: '.menudev', description:'πππππππ ππ πππππ πππ ππππ ππ πππππππππππ/ππ πππ πππππ' }, 
            {title: "βπ€΄βπΓππππ ππ ππ πππππππ", rowId: '.creador', description:'πππππππ ππ πΓΊππππ ππππ πππππππ' },
     ]
       }
   ]
   
   const listMessage = {
     text: text,
     footer: author,
     title: '-ππππ-πππ-',
     buttonText: "β¨πππππ ππππβ¨",
     sections
   }

   await conn.sendMessage(m.chat, listMessage, author, m)
  } catch (e) {
    conn.reply(m.chat, '*[βππππβ] π»π ππππππ,  πππππ ππ ππππππ ππ ππππ, πππππππ ππ πππππ ππππππππ ππ ππ πππ.*', m)
    throw e
  }
}
handler.help = ['menu']
handler.tags = ['main']
handler.command = /^(listmenu|menulist|ayuda|\?)$/i

handler.exp = 3

export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
