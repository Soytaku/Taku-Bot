let handler = async (m) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    m.reply(`${global.db.data.users[who].limit} π»πΈπΌπΈππ΄π ππ΄πππ°π½ππ΄ππ¬`)
}
handler.help = ['limit [@usuario] ']
handler.tags = ['exp y limites']
handler.command = /^(limit)$/i
export default handler