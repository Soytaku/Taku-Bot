let handler = async (m, { conn, usedprefix }) => {
    let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    conn.sendButton(m.chat, '𝚃𝙾𝙼𝙰 𝚃𝚄 𝙻𝙾𝙻𝙸 𝙾𝙽𝙸𝙲𝙷𝙰𝙽', author, global.API('https://some-random-api.ml', '/canvas/lolice', {
        avatar: await conn.profilePictureUrl(who).catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'),
    }), [['ʟᴏʟɪᴄᴇ', `#lolice`]], m)
}

handler.help = ['lolice']
handler.tags = ['img edit']         

handler.command = /^(lolice)$/i

export default handler