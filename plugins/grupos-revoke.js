let handler = async (m, { isAdmin, isOwner, conn, command }) => {
  if (!(isAdmin || isOwner)) {
                global.dfail('admin', m, conn)
                throw false
                }
  conn.groupRevokeInvite(m.chat)
  conn.reply(m.chat, ` *𝙻𝙸𝙽𝙺 𝙳𝙴𝙻 𝙶𝚁𝚄𝙿𝙾 𝚂𝙴 𝚁𝙴𝚂𝚃𝙰𝙱𝙻𝙴𝙲𝙸𝙾 𝙲𝙾𝚁𝚁𝙴𝙲𝚃𝙰𝙼𝙴𝙽𝚃𝙴, [✓] 𝚂𝙴 𝙴𝙽𝚅𝙸𝙾 𝙰𝚂𝚄 𝙲𝙷𝙰𝚃 𝙿𝚁𝙸𝚅𝙰𝙳𝙾 𝙿𝙾𝚁 𝚂𝙴𝙶𝚄𝚁𝙸𝙳𝙰𝙳🤪*`, m)
  await delay(1000)
  let linknya = await conn.groupInviteCode(m.chat)
  conn.reply(m.sender, 'https://chat.whatsapp.com/' + linknya, m)
}
handler.help = ['reestablecer']
handler.tags = ['grupos']
handler.command = /reestablecer/i

handler.group = true
handler.botAdmin = true

export default handler

const delay = time => new Promise(res => setTimeout(res, time))