import { promises } from 'fs'
import { join } from 'path'
import { xpRange } from '../lib/levelling.js'
let tags = {
  'main': '♦𝐏𝐑𝐈𝐍𝐂𝐈𝐏𝐀𝐋♦',
  'sticker menu': '💟𝐒𝐓𝐈𝐂𝐊𝐄𝐑 𝐌𝐄𝐍𝐔💟',
  'descargas': '𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐄𝐑📤',
  'juegos': '𝐉𝐔𝐄𝐆𝐎𝐒🎮',
  'img edit': '𝐈𝐌𝐆 𝐄𝐃𝐈𝐓📝',
  'audios' : '𝐀𝐔𝐃𝐈𝐎𝐒🎵',
  'herramientas': '𝐓𝐎𝐎𝐋𝐒 𝐌𝐄𝐍𝐔🛠',
  'grupos': '𝐆𝐑𝐔𝐏𝐎𝐒💎',
  'exp y limites': '𝐄𝐗𝐏/𝐋𝐈𝐌𝐈𝐓𝐄𝐒🎁]',
  'audio mod': '𝐀𝐔𝐃𝐈𝐎 𝐌𝐎𝐃🎤',
  'menu 18': '𝐌𝐄𝐍𝐔+➊➑',
  'owner menu': '👑𝐎𝐖𝐍𝐄𝐑 𝐌𝐄𝐍𝐔👑'
}
const defaultMenu = {
  before: `
  title: 'ᴇʟ ᴍᴇᴊᴏʀ ʙᴏᴛ ᴅᴇ ᴡʜᴀᴛsᴀᴘᴘ',
body: '©𝑇𝑎𝑘𝑢-𝐵𝑜𝑡', 
sourceUrl: `https://github.com/
┌──「 𝐓𝐀𝐊𝐔-𝐁𝐎𝐓 」─
├❏ 👋𝐇𝐨𝐥𝐚${name}✨ 
├❏ 📅 𝙵𝙴𝙲𝙷𝙰: ${week}, ${date}
├❏ 🔋𝚃𝙸𝙴𝙼𝙿𝙾 𝙰𝙲𝚃𝙸𝚅𝙾: ${uptime}
├❏ 📊 𝚄𝚂𝚄𝙰𝚁𝙸𝙾𝚂: ${rtotalreg}
└────ׂ─ׂ─ׂ─ׂ───
┌──「 𝐀𝐔𝐃𝐈𝐎𝐒 」─
├❏⃔⃝⃯🎧✩᭄꥓〭 cabron
├❏⃔⃝⃯🎧✩᭄꥓〭 Te amo
├❏⃔⃝⃯🎧✩᭄꥓〭 Calla Fan de BTS
├❏⃔⃝⃯🎧✩᭄꥓〭 Fino señores
├❏⃔⃝⃯🎧✩᭄꥓〭 Muchachos
├❏⃔⃝⃯🎧✩᭄꥓〭 Pasa pack Bot
├❏⃔⃝⃯🎧✩᭄꥓〭 ya antojaron
├❏⃔⃝⃯🎧✩᭄꥓〭 Siuuu
├❏⃔⃝⃯🎧✩᭄꥓〭 Entrada épica
├❏⃔⃝⃯🎧✩᭄꥓〭 Esto va ser épico papus
├❏⃔⃝⃯🎧✩᭄꥓〭 Wtf
├❏⃔⃝⃯🎧✩᭄꥓〭 Bueno si
├❏⃔⃝⃯🎧✩᭄꥓〭 Nadie te preguntó
├❏⃔⃝⃯🎧✩᭄꥓〭 Bien pensado Woody
├❏⃔⃝⃯🎧✩᭄꥓〭 El pepe
├❏⃔⃝⃯🎧✩᭄꥓〭 Me anda buscando anonymous
├❏⃔⃝⃯🎧✩᭄꥓〭 Momento equisde | Momento XD
├❏⃔⃝⃯🎧✩᭄꥓〭 Cambiate a Movistar
├❏⃔⃝⃯🎧✩᭄꥓〭 Corte corte
├❏⃔⃝⃯🎧✩᭄꥓〭 Te gusta el Pepino
├❏⃔⃝⃯🎧✩᭄꥓〭 Elmo sabe donde vives
├❏⃔⃝⃯🎧✩᭄꥓〭 Y este quien es
├❏⃔⃝⃯🎧✩᭄꥓〭 Orale
├❏⃔⃝⃯🎧✩᭄꥓〭 Quien es tu sempai botsito 7w7
├❏⃔⃝⃯🎧✩᭄꥓〭 suspenso
├❏⃔⃝⃯🎧✩᭄꥓〭 Miau
├❏⃔⃝⃯🎧✩᭄꥓〭 Bienvenido
├❏⃔⃝⃯🎧✩᭄꥓〭 a
├❏⃔⃝⃯🎧✩᭄꥓〭 Hola
├❏⃔⃝⃯🎧✩᭄꥓〭 ara ara
├❏⃔⃝⃯🎧✩᭄꥓〭 atencion grupo
├❏⃔⃝⃯🎧✩᭄꥓〭 Buenos dias
├❏⃔⃝⃯🎧✩᭄꥓〭 cunumi
├❏⃔⃝⃯🎧✩᭄꥓〭 duro 2 horas
├❏⃔⃝⃯🎧✩᭄꥓〭 falda
├❏⃔⃝⃯🎧✩᭄꥓〭 gemidos
├❏⃔⃝⃯🎧✩᭄꥓〭 sexo2
├❏⃔⃝⃯🎧✩᭄꥓〭 linda
├❏⃔⃝⃯🎧✩᭄꥓〭 manden porno
├❏⃔⃝⃯🎧✩᭄꥓〭 oh me vengo
├❏⃔⃝⃯🎧✩᭄꥓〭 sexoo
├❏⃔⃝⃯🎧✩᭄꥓〭 wtf y este
└────ׂ─ׂ─ׂ─ׂ───
*- 𝙴𝚂𝙲𝚁𝙸𝙱𝙴 𝙻𝙰𝚂 𝙿𝙰𝙻𝙰𝙱𝚁𝙰𝚂 𝙾 𝙵𝚁𝙰𝚂𝙴𝚂 𝚂𝙸𝙽 𝙽𝙸𝙽𝙶𝚄𝙽 𝙿𝚁𝙴𝙵𝙸𝙹𝙾 (#, /, *, .)*
`.trimStart(),after: `
*%npmname* | %version
${'```%npmdesc```'}
`,
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
      after
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
    conn.sendHydrated(m.chat, text.trim(), author, pp, 'https://wa.me/5493772642152', '𝐂𝐎𝐍𝐓𝐀𝐂𝐓𝐎👤', null, null, [
      ['ঔৣ͜͡ீ͜❥͜𝑽𝐎𝐋𝑽𝐄𝐑 𝐀 𝐋𝐀 𝐋𝐈𝐒𝐓𝐀📄', '/listmenu']
      ['🔰𝐌𝐄𝐍𝐔 𝐂𝐎𝐌𝐏𝐋𝐄𝐓𝐎🔰','/allmenu']
    ], m)
  } catch (e) {
    conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙻𝚘 𝚜𝚒𝚎𝚗𝚝𝚘,  𝚎𝚛𝚛𝚘𝚛 𝚊𝚕 𝚎𝚗𝚟𝚒𝚊𝚛 𝚎𝚕 𝚖𝚎𝚗𝚞, 𝚒𝚗𝚝𝚎𝚗𝚝𝚊 𝚍𝚎 𝚗𝚞𝚎𝚟𝚘 𝚌𝚘𝚗𝚝𝚊𝚌𝚝𝚊 𝚊𝚕 𝚘𝚠𝚗𝚎𝚛.*', m)
    throw e
  }
}
handler.help = ['menuaud']
handler.tags = ['main']
handler.command = ['menuaud']

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
