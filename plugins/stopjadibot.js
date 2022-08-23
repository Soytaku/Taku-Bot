let handler  = async (m, { conn }) => {
  if (global.conn.user.jid == conn.user.jid) conn.reply(m.chat, '¿𝙿𝚘𝚛 𝚚𝚞𝚎 𝚗𝚘 𝚒𝚛 𝚍𝚒𝚛𝚎𝚌𝚝𝚊𝚖𝚎𝚗𝚝𝚎 𝚊 𝚕𝚊 𝚝𝚎𝚛𝚖𝚒𝚗𝚊𝚕?', m)
  else {
    await conn.reply(m.chat, '𝙰𝙳𝙸𝙾𝚂, 𝙱𝙾𝚃👋🏻 :\')', m)
    conn.close()
  }
}
handler.help = ['stopjadibot','stop']
handler.tags = ['jadibot']
handler.command = /^(stopjadibot|stop)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

