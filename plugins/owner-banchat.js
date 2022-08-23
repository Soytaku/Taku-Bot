let handler = async (m, { participants }) => {
    // if (participants.map(v=>v.jid).includes(global.conn.user.jid)) {
    global.db.data.chats[m.chat].isBanned = true
    m.reply('*[❗]𝙴𝙻 𝙲𝙷𝙰𝚃 𝙵𝚄𝙴 𝙱𝙰𝙽𝙴𝙰𝙳𝙾 𝚈𝙰 𝙽𝙾 𝙿𝙾𝙳𝚁𝙰𝚂 𝚄𝚂𝙰𝚁 𝙴𝙻 𝙱𝙾𝚃*')
    // } else m.reply('Ada nomor host disini...')
}
handler.help = ['banchat']
handler.tags = ['owner menu']
handler.command = /^banchat$/i

handler.owner = true

export default handler