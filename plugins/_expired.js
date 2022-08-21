export async function all(m) {
    if (!m.isGroup)
        return
    let chats = global.db.data.chats[m.chat]
    if (!chats.expired)
        return !0
    if (+new Date() > chats.expired) {
        await this.reply(m.chat, '*𝙶𝙾𝙾𝙳 𝙱𝚈𝙴,👋 𝙴𝙻 𝚃𝙸𝙴𝙼𝙿𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃🤖 𝙴𝙽 𝙴𝚂𝚃𝙴 𝙶𝚁𝚄𝙿𝙾 𝙷𝙰 𝚃𝙴𝚁𝙼𝙸𝙽𝙰𝙳𝙾 ;)*')
        await this.groupLeave(m.chat)
        chats.expired = null
    }
}