import { areJidsSameUser } from '@adiwajshing/baileys'
let handler = async (m, { conn, participants }) => {
    let users = m.mentionedJid.filter(u => !areJidsSameUser(u, conn.user.id))
     let user = m.mentionedJid && m.mentionedJid[0]
            await conn.groupParticipantsUpdate(m.chat, [user], 'degradar')
        
    m.reply('*[❗] 𝙴𝙻 𝙰𝙳𝙼𝙸𝙽𝚂 𝙵𝚄𝙴 𝙳𝙴𝙶𝚁𝙰𝙳𝙰𝙳𝙾, 𝙰𝙷𝙾𝚁𝙰 𝙴𝚂 𝚄𝙽 𝙼𝙸𝙴𝙼𝙱𝚁𝙾 𝙲𝙾𝙼𝚄𝙽*')

}
handler.help = ['degradar @usuario']
handler.tags = ['owner menu', 'grupos']
handler.command = /^(degradar)$/i

handler.admin = true
handler.group = true
handler.botAdmin = true

export default handler