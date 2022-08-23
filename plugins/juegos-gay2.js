

let handler = async (m, { conn }) => {
    let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    conn.sendFile(m.chat, global.API('https://some-random-api.ml', '/canvas/gay', {
      avatar: await conn.profilePictureUrl(who).catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'),
    }), 'iss.png', '*𝙰𝚂𝙸 𝙴𝚂, 𝚂𝙾𝚈 𝙶𝙰𝚈🏳️‍🌈 𝚈 𝙴𝚂𝚃𝙴 𝙵𝙸𝙻𝚃𝚁𝙾 𝙻𝙾 𝙳𝙴𝙼𝚄𝙴𝚂𝚃𝚁𝙰🥵*', m)
  }
  
  handler.help = ['gay2']
  handler.tags = ['juegos','img edit']
  
  handler.command = /^(gay2|gei2|maricoooon|homosexual)$/i
  
  export default handler