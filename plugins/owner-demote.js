import { areJidsSameUser } from '@adiwajshing/baileys'
let handler = async (m, { conn, participants }) => {
    let users = m.mentionedJid.filter(u => !areJidsSameUser(u, conn.user.id))
     let user = m.mentionedJid && m.mentionedJid[0]
            await conn.groupParticipantsUpdate(m.chat, [user], 'degradar')
        
    m.reply('*[β] π΄π» π°π³πΌπΈπ½π π΅ππ΄ π³π΄πΆππ°π³π°π³πΎ, π°π·πΎππ° π΄π ππ½ πΌπΈπ΄πΌπ±ππΎ π²πΎπΌππ½*')

}
handler.help = ['degradar @usuario']
handler.tags = ['owner menu', 'grupos']
handler.command = /^(degradar)$/i

handler.admin = true
handler.group = true
handler.botAdmin = true

export default handler