import { promises } from 'fs'
import { join } from 'path'
import { xpRange } from '../lib/levelling.js'
let tags = {
  'sticker menu': '*𝚂𝚃𝙸𝙲𝙺𝙴𝚁𝙼𝙴𝙽𝚄*'

}
const defaultMenu = {
  before: `
┌─「 𝐓𝐀𝐊𝐔-𝐁𝐎𝐓-𝐗𝐃 」
├❏📆ꜰᴇᴄʜᴀ: *%date*
├❏👋𝙷𝙾𝙻𝙰✨${name}🥰
├❏✨ᴛᴏᴛᴀʟ xᴘ : *%totalexp* 
├❏🎖ɴɪᴠᴇʟ : *%level*
└────ׂ
title: 'ᴇʟ ᴍᴇᴊᴏʀ ʙᴏᴛ ᴅᴇ ᴡʜᴀᴛsᴀᴘᴘ',
body: '©𝑇𝑎𝑘𝑢-𝐵𝑜𝑡-𝑥𝐷', 
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
     title: `*𝐋𝐈𝐒𝐓𝐀 𝐃𝐄𝐋 𝐌𝐄𝐍𝐔*`,
     rows: [
         {title: "│💬│𝐈𝐍𝐒𝐓𝐑𝐔𝐂𝐂𝐈𝐎𝐍𝐄𝐒", rowId: '.ayuda', description:'𝙰𝙿𝚁𝙴𝙽𝙳𝙴 𝙰 𝚄𝚂𝙰𝚁 𝙻𝙾𝚂 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 𝙳𝙴𝙻 𝙱𝙾𝚃 𝚈 𝚂𝚄𝚂 𝚁𝙴𝙶𝙻𝙰𝚂' },
         {title: "│✨│𝐌𝐄𝐍𝐔 𝐂𝐎𝐌𝐏𝐋𝐄𝐓𝐎", rowId: '.allmenu', description:'𝙼𝚞𝚎𝚜𝚝𝚛𝚊 𝚕𝚊 𝚕𝚒𝚜𝚝𝚊 𝚍𝚎𝚕 𝚖𝚎𝚗𝚎𝚌𝚘𝚖𝚙𝚕𝚎𝚝𝚘' },
         {title: "│💟│𝐒𝐓𝐈𝐂𝐊𝐄𝐑𝐒", rowId: '.menusticker', description:'𝚖𝚞𝚎𝚜𝚝𝚛𝚊 𝚕𝚊 𝚕𝚒𝚜𝚝𝚊 𝚙𝚊𝚛𝚊 𝚌𝚛𝚎𝚊 𝚜𝚝𝚒𝚌𝚔𝚎𝚛' },
         {title: "│📥│𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐄𝐑", rowId: '.menudes', description:'𝙼𝚞𝚎𝚜𝚝𝚛𝚊 𝚕𝚊 𝚕𝚒𝚜𝚝𝚊 𝚍𝚎 𝚍𝚎𝚜𝚌𝚊𝚛𝚐𝚊𝚛' },
         {title: "│🎮│𝐌𝐄𝐍𝐔 𝐉𝐔𝐄𝐆𝐎𝐒", rowId: '.menugames', description:'𝚖𝚞𝚎𝚜𝚝𝚛𝚊 𝚕𝚊 𝚕𝚒𝚜𝚝𝚊 𝚍𝚎 𝚓𝚞𝚎𝚐𝚘𝚜 𝚙𝚊𝚛𝚊 𝚍𝚒𝚟𝚎𝚛𝚝𝚒 𝚝𝚞 𝚐𝚛𝚞𝚙𝚘' },
         {title: "│📝│𝐈𝐌𝐆 𝐄𝐃𝐈𝐓", rowId: '.menuimg', description:'𝚖𝚞𝚎𝚜𝚝𝚛𝚊 𝚕𝚊 𝚕𝚒𝚜𝚝𝚊 𝚍𝚎 𝚕𝚘𝚐𝚘𝚜'
         },
         {title: "│🎧│𝐀𝐔𝐃𝐈𝐎𝐒", rowId: '.menuaud', description:'𝚖𝚞𝚎𝚜𝚝𝚛𝚊 𝚕𝚊 𝚕𝚒𝚜𝚝𝚊 𝚍𝚎 𝚊𝚞𝚍𝚒𝚘𝚜 𝚍𝚎𝚕 𝚋𝚘𝚝' },
         {title: "│🛠│𝐓𝐎𝐎𝐋𝐒 𝐌𝐄𝐍𝐔", rowId: '.menutools', description:'𝙼𝚞𝚎𝚜𝚝𝚛𝚊 𝚎𝚕 𝚖𝚎𝚗𝚞 𝚑𝚎𝚛𝚛𝚊𝚖𝚒𝚎𝚗𝚝𝚊𝚜' }, 
         {title: "│💎│𝐌𝐄𝐍𝐔 𝐆𝐑𝐔𝐏𝐎𝐒", rowId: '.menugrup', description:'𝚖𝚞𝚎𝚜𝚝𝚛𝚊 𝚕𝚊 𝚕𝚒𝚜𝚝𝚊 𝚍𝚎 𝚖𝚎𝚗𝚞 𝚍𝚎 𝚐𝚛𝚞𝚙𝚘'
         },
         {title: "│🎟│𝐄𝐗𝐏/𝐋𝐈𝐌𝐈𝐓𝐄𝐒", rowId: '.menuexp', description:'𝙼𝚄𝙴𝚂𝚃𝚁𝙰 𝙻𝙰 𝙻𝙸𝚂𝚃𝙰 𝙴𝚇𝙿 𝚈 𝙻𝙸𝙼𝙸𝚃𝙴𝚂' }, 
         {title: "│🔞│𝐌𝐄𝐍𝐔 +➊➑", rowId: '.menu18', description:'𝙴𝚜𝚝𝚊 𝚘𝚙𝚌𝚒𝚘𝚗 𝚜𝚘𝚕𝚊𝚖𝚎𝚗𝚝𝚎 𝚎𝚜 𝚙𝚊𝚛𝚊 𝚊𝚍𝚖𝚒𝚗𝚒𝚜𝚝𝚛𝚊𝚍𝚘𝚛𝚎𝚜 𝚍𝚎𝚕 𝚐𝚛𝚞𝚙𝚘 𝙰𝙲𝚃𝙸𝚅𝙰  𝙻𝙾𝚂 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 +𝟷𝟾' },
         {title: "│👑│𝐎𝐖𝐍𝐄𝐑 𝐁𝐎𝐓", rowId: '.menudev', description:'𝚖𝚞𝚎𝚜𝚝𝚛𝚊 𝚕𝚊 𝚕𝚒𝚜𝚝𝚊 𝚚𝚞𝚎 𝚜𝚘𝚕𝚘 𝚎𝚕 𝚙𝚛𝚘𝚙𝚒𝚎𝚝𝚊𝚛𝚒𝚘/𝚘𝚠𝚗𝚎𝚛 𝚙𝚞𝚎𝚍𝚎' }, 
            {title: "│🤴│𝐍Ú𝐌𝐄𝐑𝐎 𝐃𝐄 𝐌𝐈 𝐂𝐑𝐄𝐀𝐃𝐎𝐑", rowId: '.creador', description:'𝚖𝚞𝚎𝚜𝚝𝚛𝚊 𝚎𝚕 𝚗ú𝚖𝚎𝚛𝚘 𝚍𝚎𝚖𝚒 𝚌𝚛𝚎𝚊𝚍𝚘𝚛' },
     ]
       }
   ]
   
   const listMessage = {
     text: text,
     footer: author,
     title: '-𝐓𝐀𝐊𝐔-𝐁𝐎𝐓-',
     buttonText: "✨𝐂𝐋𝐈𝐂𝐊 𝐀𝐐𝐔𝐈✨",
     sections
   }

   await conn.sendMessage(m.chat, listMessage, author, m)
  } catch (e) {
    conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙻𝚘 𝚜𝚒𝚎𝚗𝚝𝚘,  𝚎𝚛𝚛𝚘𝚛 𝚊𝚕 𝚎𝚗𝚟𝚒𝚊𝚛 𝚎𝚕 𝚖𝚎𝚗𝚞, 𝚒𝚗𝚝𝚎𝚗𝚝𝚊 𝚍𝚎 𝚗𝚞𝚎𝚟𝚘 𝚌𝚘𝚗𝚝𝚊𝚌𝚝𝚊 𝚊𝚕 𝚘𝚠𝚗𝚎𝚛.*', m)
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
