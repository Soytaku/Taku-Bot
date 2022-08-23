let handler = async (m) => {
    global.db.data.chats[m.chat].isBanned = false
    m.reply('*[❗] 𝙱𝙰𝙽 𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰𝙳𝙾, 𝙰𝙷𝙾𝚁𝙰 𝙿𝚄𝙴𝙳𝙴𝚂 𝚄𝚂𝙰𝚁 𝙴𝙻 𝙱𝙾𝚃*')
}
handler.help = ['unbanchat']
handler.tags = ['owner menu']
handler.command = /^unbanchat$/i
handler.owner = true

export default handler