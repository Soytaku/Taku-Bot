

let handler = async (m, { conn }) => {
    let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    conn.sendFile(m.chat, global.API('https://some-random-api.ml', '/canvas/gay', {
      avatar: await conn.profilePictureUrl(who).catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'),
    }), 'iss.png', '*π°ππΈ π΄π, ππΎπ πΆπ°ππ³οΈβπ π π΄πππ΄ π΅πΈπ»πππΎ π»πΎ π³π΄πΌππ΄ππππ°π₯΅*', m)
  }
  
  handler.help = ['gay2']
  handler.tags = ['juegos','img edit']
  
  handler.command = /^(gay2|gei2|maricoooon|homosexual)$/i
  
  export default handler