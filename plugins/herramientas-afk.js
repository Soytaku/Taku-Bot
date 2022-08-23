let handler = async (m, { text }) => {
  let user = global.db.data.users[m.sender]
  user.afk = + new Date
  user.afkReason = text
  m.reply(`
${conn.getName(m.sender)}*[❗𝐈𝐍𝐅𝐎❗] 𝙰𝙷𝙾𝚁𝙰 𝚂𝙴 𝙴𝙽𝙲𝚄𝙴𝙽𝚃𝚁𝙰* 𝘼𝙁𝙆 ${text ? ': ' + text : ''}
`)
}
handler.help = ['afk [motivo]']
handler.tags = ['herramientas']
handler.command = /^afk$/i

export default handler
