let handler = async (m, { conn, text }) => {
  if (!text) throw '*[β] π΄ππ²ππΈπ±π° ππ½ π²πΎπΌπ΄π½ππ°ππΈπΎ*'
  conn.sendFile(m.chat, global.API('https://some-random-api.ml', '/canvas/youtube-comment', {
    avatar: await conn.profilePictureUrl(m.sender).catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'),
    comment: text,
    username: conn.getName(m.sender)
  }), 'yt-comment.png', '*βπ»π°πππΈ ππΈπ΄π½π΄π ππ π²πΎπΌπ΄π½ππ°ππΈπΎπ€*', m)
}

handler.help = ['ytcomment <comment>']
handler.tags = ['img edit']

handler.command = /^(ytcomment)$/i
handler.limit = true
export default handler
