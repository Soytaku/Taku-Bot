let handler = async (m, { conn, usedprefix }) => {
    let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    conn.sendButton(m.chat, 'ππΎπΌπ° ππ π»πΎπ»πΈ πΎπ½πΈπ²π·π°π½', author, global.API('https://some-random-api.ml', '/canvas/lolice', {
        avatar: await conn.profilePictureUrl(who).catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'),
    }), [['Κα΄ΚΙͺα΄α΄', `#lolice`]], m)
}

handler.help = ['lolice']
handler.tags = ['img edit']         

handler.command = /^(lolice)$/i

export default handler