import { promises } from 'fs'
import { join } from 'path'
import { xpRange } from '../lib/levelling.js'
let tags = {
  'main': 'โฆ๐๐๐๐๐๐๐๐๐โฆ',
  'sticker menu': '๐๐๐๐๐๐๐๐ ๐๐๐๐๐',
  'descargas': '๐๐๐๐๐๐๐๐๐๐๐ค',
  'juegos': '๐๐๐๐๐๐๐ฎ',
  'img edit': '๐๐๐ ๐๐๐๐๐',
  'audios' : '๐๐๐๐๐๐๐ต',
  'herramientas': '๐๐๐๐๐ ๐๐๐๐๐ ',
  'grupos': '๐๐๐๐๐๐๐',
  'exp y limites': '๐๐๐/๐๐๐๐๐๐๐๐]',
  'audio mod': '๐๐๐๐๐ ๐๐๐๐ค',
  'menu 18': '๐๐๐๐+โโ',
  'owner menu': '๐๐๐๐๐๐ ๐๐๐๐๐'
}
const defaultMenu = {
  before: `
  title: 'แดส แดแดแดแดส สแดแด แดแด แดกสแดแดsแดแดแด',
body: 'ยฉ๐๐๐๐ข-๐ต๐๐ก', 
sourceUrl: `https://github.com/
โโโใ ๐๐๐๐-๐๐๐ ใโ
โโ ๐๐๐จ๐ฅ๐${name}โจ 
โโ ๐ ๐ต๐ด๐ฒ๐ท๐ฐ: ${week}, ${date}
โโ ๐๐๐ธ๐ด๐ผ๐ฟ๐พ ๐ฐ๐ฒ๐๐ธ๐๐พ: ${uptime}
โโ ๐ ๐๐๐๐ฐ๐๐ธ๐พ๐: ${rtotalreg}
โโโโโืโืโืโืโโโ
โโโใ ๐๐๐๐๐๐ ใโ
โโโโโฏ๐งโฉแญใญ๊ฅ cabron
โโโโโฏ๐งโฉแญใญ๊ฅ Te amo
โโโโโฏ๐งโฉแญใญ๊ฅ Calla Fan de BTS
โโโโโฏ๐งโฉแญใญ๊ฅ Fino seรฑores
โโโโโฏ๐งโฉแญใญ๊ฅ Muchachos
โโโโโฏ๐งโฉแญใญ๊ฅ Pasa pack Bot
โโโโโฏ๐งโฉแญใญ๊ฅ ya antojaron
โโโโโฏ๐งโฉแญใญ๊ฅ Siuuu
โโโโโฏ๐งโฉแญใญ๊ฅ Entrada รฉpica
โโโโโฏ๐งโฉแญใญ๊ฅ Esto va ser รฉpico papus
โโโโโฏ๐งโฉแญใญ๊ฅ Wtf
โโโโโฏ๐งโฉแญใญ๊ฅ Bueno si
โโโโโฏ๐งโฉแญใญ๊ฅ Nadie te preguntรณ
โโโโโฏ๐งโฉแญใญ๊ฅ Bien pensado Woody
โโโโโฏ๐งโฉแญใญ๊ฅ El pepe
โโโโโฏ๐งโฉแญใญ๊ฅ Me anda buscando anonymous
โโโโโฏ๐งโฉแญใญ๊ฅ Momento equisde | Momento XD
โโโโโฏ๐งโฉแญใญ๊ฅ Cambiate a Movistar
โโโโโฏ๐งโฉแญใญ๊ฅ Corte corte
โโโโโฏ๐งโฉแญใญ๊ฅ Te gusta el Pepino
โโโโโฏ๐งโฉแญใญ๊ฅ Elmo sabe donde vives
โโโโโฏ๐งโฉแญใญ๊ฅ Y este quien es
โโโโโฏ๐งโฉแญใญ๊ฅ Orale
โโโโโฏ๐งโฉแญใญ๊ฅ Quien es tu sempai botsito 7w7
โโโโโฏ๐งโฉแญใญ๊ฅ suspenso
โโโโโฏ๐งโฉแญใญ๊ฅ Miau
โโโโโฏ๐งโฉแญใญ๊ฅ Bienvenido
โโโโโฏ๐งโฉแญใญ๊ฅ a
โโโโโฏ๐งโฉแญใญ๊ฅ Hola
โโโโโฏ๐งโฉแญใญ๊ฅ ara ara
โโโโโฏ๐งโฉแญใญ๊ฅ atencion grupo
โโโโโฏ๐งโฉแญใญ๊ฅ Buenos dias
โโโโโฏ๐งโฉแญใญ๊ฅ cunumi
โโโโโฏ๐งโฉแญใญ๊ฅ duro 2 horas
โโโโโฏ๐งโฉแญใญ๊ฅ falda
โโโโโฏ๐งโฉแญใญ๊ฅ gemidos
โโโโโฏ๐งโฉแญใญ๊ฅ sexo2
โโโโโฏ๐งโฉแญใญ๊ฅ linda
โโโโโฏ๐งโฉแญใญ๊ฅ manden porno
โโโโโฏ๐งโฉแญใญ๊ฅ oh me vengo
โโโโโฏ๐งโฉแญใญ๊ฅ sexoo
โโโโโฏ๐งโฉแญใญ๊ฅ wtf y este
โโโโโืโืโืโืโโโ
*- ๐ด๐๐ฒ๐๐ธ๐ฑ๐ด ๐ป๐ฐ๐ ๐ฟ๐ฐ๐ป๐ฐ๐ฑ๐๐ฐ๐ ๐พ ๐ต๐๐ฐ๐๐ด๐ ๐๐ธ๐ฝ ๐ฝ๐ธ๐ฝ๐ถ๐๐ฝ ๐ฟ๐๐ด๐ต๐ธ๐น๐พ (#, /, *, .)*
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
    conn.sendHydrated(m.chat, text.trim(), author, pp, 'https://wa.me/5493772642152', '๐๐๐๐๐๐๐๐๐ค', null, null, [
      ['เฆเงฃอกอเฏอโฅอ๐ฝ๐๐๐ฝ๐๐ ๐ ๐๐ ๐๐๐๐๐๐', '/listmenu']
      ['๐ฐ๐๐๐๐ ๐๐๐๐๐๐๐๐๐ฐ','/allmenu']
    ], m)
  } catch (e) {
    conn.reply(m.chat, '*[โ๐๐๐๐โ] ๐ป๐ ๐๐๐๐๐๐,  ๐๐๐๐๐ ๐๐ ๐๐๐๐๐๐ ๐๐ ๐๐๐๐, ๐๐๐๐๐๐๐ ๐๐ ๐๐๐๐๐ ๐๐๐๐๐๐๐๐ ๐๐ ๐๐ ๐๐๐.*', m)
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
