const linkRegex = /chat.whatsapp.com\/(?:invite\/)?([0-9A-Za-z]{20,24})/i
export async function before(m, { isAdmin, isBotAdmin }) {
    if (m.isBaileys && m.fromMe)
        return !0
    if (!m.isGroup) return !1
    let chat = global.db.data.chats[m.chat]
    let bot = global.db.data.settings[this.user.jid] || {}
    const isGroupLink = linkRegex.exec(m.text)

    if (chat.antiLink && isGroupLink && !isAdmin) {
        if (isBotAdmin) {
            const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`
            if (m.text.includes(linkThisGroup)) return !0
        }
        await conn.sendButton(m.chat, `*[❗] 𝙻𝙸𝙽𝙺 𝙳𝙴𝚃𝙴𝙲𝚃𝙰𝙳𝙾!!*${isBotAdmin ? '' : '\n\nʟᴏ sɪᴇɴᴛᴏ, ᴇʟ ʙᴏᴛ ᴅᴇʙᴇ sᴇʀ ᴀᴅᴍɪɴɪsᴛʀᴀᴅᴏʀ ᴅᴇʟ ɢʀᴜᴘᴏ ᴘᴀʀᴀ ᴇʟɪᴍɪɴᴀʀ ☑. '}`, author, ['✘𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰𝚁 𝙰𝙽𝚃𝙸𝙻𝙸𝙽𝙺✘', '/disable antilink'], m)
        if (isBotAdmin && bot.restrict) {
            await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        } else if (!bot.restrict) return m.reply('‼𝙴𝚛𝚛𝚘𝚛, 𝚎𝚕 𝚙𝚛𝚘𝚙𝚒𝚎𝚝𝚊𝚛𝚒𝚘 𝚝𝚒𝚎𝚗𝚎 𝚍𝚎𝚜𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘 #restrict, 𝚙𝚊𝚛𝚊 𝚊𝚌𝚝𝚒𝚟𝚊𝚛 𝚎𝚜𝚌𝚛𝚒𝚋𝚎 #enable restrict o #sistemas')
    }
    return !0
}