let handler = async (m, { text }) => {
  let user = global.db.data.users[m.sender]
  user.afk = + new Date
  user.afkReason = text
  m.reply(`
${conn.getName(m.sender)}*[βππππβ] π°π·πΎππ° ππ΄ π΄π½π²ππ΄π½πππ°* πΌππ ${text ? ': ' + text : ''}
`)
}
handler.help = ['afk [motivo]']
handler.tags = ['herramientas']
handler.command = /^afk$/i

export default handler
