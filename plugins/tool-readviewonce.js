let handler = async (m, { conn }) => {
    if (!m.quoted) throw '*[❗] ¿𝙳𝙾𝙽𝙳𝙴 𝙴𝚂𝚃𝙰 𝙴𝙻 𝙼𝙴𝙽𝚂𝙰𝙹𝙴?'
    if (m.quoted.mtype !== 'viewOnceMessage') throw '*[❗] 𝙴𝚂𝙾 𝙽𝙾 𝙴𝚂 𝚄𝙽 𝙼𝙴𝙽𝚂𝙰𝙹𝙴 viewOnce'
    const msg = await conn.loadMessage(m.quoted.id)
    if (!msg) throw '*[❗] 𝙽𝙾 𝙿𝚄𝙴𝙳𝙾 𝙰𝙱𝚁𝙸𝚁 𝙼𝙴𝙽𝚂𝙰𝙹𝙴𝚂'
    await conn.copyNForward(m.chat, msg, true, { readViewOnce: true })
}

handler.help = ['readviewonce']
handler.tags = ['herramientas']
handler.command = /^readviewonce/i

export default handler