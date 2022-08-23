let handler = async (m, { conn, text }) => {
  if (!text) throw '*[❗] 𝙴𝚂𝙲𝚁𝙸𝙱𝙰 𝚄𝙽 𝙲𝙾𝙼𝙴𝙽𝚃𝙰𝚁𝙸𝙾*'
  conn.sendFile(m.chat, global.API('https://some-random-api.ml', '/canvas/youtube-comment', {
    avatar: await conn.profilePictureUrl(m.sender).catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'),
    comment: text,
    username: conn.getName(m.sender)
  }), 'yt-comment.png', '*✍🏻𝙰𝚀𝚄𝙸 𝚃𝙸𝙴𝙽𝙴𝚂 𝚃𝚄 𝙲𝙾𝙼𝙴𝙽𝚃𝙰𝚁𝙸𝙾👤*', m)
}

handler.help = ['ytcomment <comment>']
handler.tags = ['img edit']

handler.command = /^(ytcomment)$/i
handler.limit = true
export default handler
