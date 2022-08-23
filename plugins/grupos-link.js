import { areJidsSameUser } from '@adiwajshing/baileys'
let handler = async (m, { conn, args }) => {
    let group = m.chat
    if (/^[0-9]{5,16}-?[0-9]+@g\.us$/.test(args[0])) group = args[0]
    if (!/^[0-9]{5,16}-?[0-9]+@g\.us$/.test(group)) throw 'Hanya bisa dibuka di grup'
    let groupMetadata = await conn.groupMetadata(group)
    if (!groupMetadata) throw 'groupMetadata is undefined :\\'
    if (!('participants' in groupMetadata)) throw '*[❗] 𝙻𝙾𝚂 𝙿𝙰𝚁𝚃𝙸𝙲𝙸𝙿𝙰𝙽𝚃𝙴𝚂 𝙽𝙾 𝙴𝚂𝚃𝙰𝙽 𝙳𝙴𝙵𝙸𝙽𝙸𝙳𝙾𝚂* '
    let me = groupMetadata.participants.find(user => areJidsSameUser(user.id, conn.user.id))
    if (!me) throw '*[❗] 𝙽𝙾 𝙴𝚂𝚃𝙾𝚈 𝙴𝙽 𝙴𝚂𝙴 𝙶𝚁𝚄𝙿𝙾*'
    if (!me.admin) throw '*[❗] 𝙽𝙴𝙲𝙴𝚂𝙸𝚃𝙾 𝚂𝙴𝚁 𝙰𝙳𝙼𝙸𝙽𝚂 𝙿𝙰𝚁𝙰 𝙲𝚄𝙼𝙿𝙻𝙸𝚁 𝚃𝚄𝚂 𝙾𝚁𝙳𝙴𝙽𝙴𝚂*'
    m.reply('https://chat.whatsapp.com/' + await conn.groupInviteCode(group))
}
handler.admin = true
handler.help = ['invitacion link']
handler.tags = ['grupos']
handler.command = ['invitacion', 'invitación']
handler.botAdmin = true

export default handler