let handler = async (m) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    m.reply(`${global.db.data.users[who].limit} 𝙻𝙸𝙼𝙸𝚃𝙴𝚂 𝚁𝙴𝚂𝚃𝙰𝙽𝚃𝙴𝚂💬`)
}
handler.help = ['limit [@usuario] ']
handler.tags = ['exp y limites']
handler.command = /^(limit)$/i
export default handler