let handler = async (m, { conn }) => {
  let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  conn.sendFile(m.chat, global.API('https://some-random-api.ml', '/canvas/horny', {
    avatar: await conn.profilePictureUrl(who).catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'),
  }), 'hornycard.png', '*π»πΈπ²π΄π½π²πΈπ° πΏπ°ππ° π°π½π³π°π π±πΈπ΄π½ π·πΎππ₯΅ππ»*', m)
}

handler.help = ['hornycard']
handler.tags = ['img edit']

handler.command = /^(horny(card|license))$/i

export default handler