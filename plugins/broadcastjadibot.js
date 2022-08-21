let handler = async (m, { conn, text }) => {
  if (conn.user.jid === global.conn.user.jid) {
    let users = [...new Set([...global.conns.filter(conn => conn.user && conn.state !== 'close').map(conn => conn.user.jid)])]
    let content = await conn.cMod(m.chat, m, /bc|broadcast/i.test(text) ? text : text + '\n' + readMore + '「 ' + conn.getName(conn.user.jid) + ' Broadcast 」')
    for (let id of users) conn.copyNForward(id, content)
    conn.reply(m.chat, `*[❗] 𝚃𝚁𝙰𝙽𝚂𝙼𝙸𝚂𝙸𝙾𝙽 𝙴𝙽𝚅𝙸𝙰𝙳𝙰 𝙲𝙾𝙽 𝙴𝚇𝙸𝚃𝙾 𝙰* ${users.length} *𝙴𝙻 𝙽𝚄𝙼𝙴𝚁𝙾 𝚂𝙴 𝙲𝙾𝙽𝚅𝙸𝚁𝚃𝙸𝙾 𝙴𝙽 𝙱𝙾𝚃*
${users.map(v => 'wa.me/' + v.replace(/[^0-9]/g,'') + '?text=.menu').join('\n')}`.trim(), m)
  } else conn.reply(m.chat, '*[❗] 𝙴𝚂𝚃𝙰 𝙵𝚄𝙽𝙲𝙸𝙾𝙽 𝙴𝚂 𝚂𝙾𝙻𝙾 𝙿𝙰𝚁𝙰 𝙷𝙾𝚂𝚃𝚂 𝙱𝙾𝚃*',  m)
}
handler.help = ['broadcastjadibot','bcbot'].map(v => v + ' <teks>')
handler.tags = ['host']
handler.command = /^(broadcast|bc)(jadi)?bot$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

