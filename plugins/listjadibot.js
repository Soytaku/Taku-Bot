async function handler(m, { usedPrefix }) {
  let users = [...new Set([...global.conns.filter(conn => conn.user && conn.state !== 'close').map(conn => conn.user)])]
  m.reply(`π *πΏππΈπ½π²πΈπΏπ°π»* \n\nβ’ https://wa.me/${global.conn.user.jid.split('@')[0]}?text=${usedPrefix}menu (${global.conn.user.name}) \n\n *π€πππ± π±πΎππ* \n\n` + users.map(v => 'β’ https://wa.me/' + v.jid.replace(/[^0-9]/g, '') + `?text=${usedPrefix}menu (${v.name})`).join('\n'))
}
handler.command = handler.help = ['listjadibot']
handler.tags = ['jadibot']

module.exports = handler
