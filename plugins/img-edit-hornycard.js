let handler = async (m, { conn }) => {
  let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  conn.sendFile(m.chat, global.API('https://some-random-api.ml', '/canvas/horny', {
    avatar: await conn.profilePictureUrl(who).catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'),
  }), 'hornycard.png', '*𝙻𝙸𝙲𝙴𝙽𝙲𝙸𝙰 𝙿𝙰𝚁𝙰 𝙰𝙽𝙳𝙰𝚁 𝙱𝙸𝙴𝙽 𝙷𝙾𝚃🥵👌🏻*', m)
}

handler.help = ['hornycard']
handler.tags = ['img edit']

handler.command = /^(horny(card|license))$/i

export default handler