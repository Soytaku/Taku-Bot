let handler = async (m, { isAdmin, isOwner, conn, command }) => {
  if (!(isAdmin || isOwner)) {
                global.dfail('admin', m, conn)
                throw false
                }
  conn.groupRevokeInvite(m.chat)
  conn.reply(m.chat, ` *π»πΈπ½πΊ π³π΄π» πΆπππΏπΎ ππ΄ ππ΄πππ°π±π»π΄π²πΈπΎ π²πΎπππ΄π²ππ°πΌπ΄π½ππ΄, [β] ππ΄ π΄π½ππΈπΎ π°ππ π²π·π°π πΏππΈππ°π³πΎ πΏπΎπ ππ΄πΆπππΈπ³π°π³π€ͺ*`, m)
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