let handler = async (m, { conn, args, participants }) => {
  let users = Object.entries(global.db.data.users).map(([key, value]) => {
    return {...value, jid: key}
  })
  let sortedExp = users.map(toNumber('exp')).sort(sort('exp'))
  let sortedLim = users.map(toNumber('limit')).sort(sort('limit'))
  let sortedLevel = users.map(toNumber('level')).sort(sort('level'))
  let usersExp = sortedExp.map(enumGetKey)
  let usersLim = sortedLim.map(enumGetKey)
  let usersLevel = sortedLevel.map(enumGetKey)
  console.log(participants)
  let len = args[0] && args[0].length > 0 ? Math.min(100, Math.max(parseInt(args[0]), 5)) : Math.min(5, sortedExp.length)
  let text = `
β’ *ππΎπΏβ¨ ${len} ππππ°ππΈπΎππ₯ π²πΎπ½ πΌπ°ππΎπ ππΏπ±* β’
ππππ°ππΈπΎπ: *${usersExp.indexOf(m.sender) + 1}* π³π΄ππ³π΄ *${usersExp.length}*

${sortedExp.slice(0, len).map(({ jid, exp }, i) => `${i + 1}. ${participants.some(p => jid === p.jid) ? `(${conn.getName(jid)}) wa.me/` : '@'}${jid.split`@`[0]} *${exp} Exp*`).join`\n`}

β’ *ππΎπΏβ¨ ${len} ππππ°ππΈπΎππ₯ π²πΎπ½ πΌπ°ππΎπ π»πΈπΌπΈππ΄π π³π΄π» π±πΎππ±* β’
ππππ°ππΈπΎπ: *${usersLim.indexOf(m.sender) + 1}* π³π΄ππ³π΄ *${usersLim.length}*

${sortedLim.slice(0, len).map(({ jid, limit }, i) => `${i + 1}. ${participants.some(p => jid === p.jid) ? `(${conn.getName(jid)}) wa.me/` : '@'}${jid.split`@`[0]} *${limit} Limit*`).join`\n`}

β’ *ππΎπΏβ¨ ${len} ππππ°ππΈπΎππ₯ π²πΎπ½ πΌπ°ππΎπ π½πΈππ΄π» π³π΄π» π±πΎππ± ${len}* β’
α΄κ±α΄α΄ΚΙͺα΄κ±: *${usersLevel.indexOf(m.sender) + 1}* desde *${usersLevel.length}*

${sortedLevel.slice(0, len).map(({ jid, level }, i) => `${i + 1}. ${participants.some(p => jid === p.jid) ? `(${conn.getName(jid)}) wa.me/` : '@'}${jid.split`@`[0]} *Level ${level}*`).join`\n`}
`.trim()
  conn.reply(m.chat, text, m, {
    contextInfo: {
      mentionedJid: [...usersExp.slice(0, len), ...usersLim.slice(0, len), ...usersLevel.slice(0, len)].filter(v => !participants.some(p => v === p.jid))
    }
  })
}
handler.help = ['#lb [numero de usuario]']
handler.tags = ['exp y limites']
handler.command = /^(leaderboard|lb|clasiuser)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
export default handler

function sort(property, ascending = true) {
  if (property) return (...args) => args[ascending & 1][property] - args[!ascending & 1][property]
  else return (...args) => args[ascending & 1] - args[!ascending & 1]
}

function toNumber(property, _default = 0) {
  if (property) return (a, i, b) => {
    return {...b[i], [property]: a[property] === undefined ? _default : a[property]}
  }
  else return a => a === undefined ? _default : a
}

function enumGetKey(a) {
  return a.jid
}
