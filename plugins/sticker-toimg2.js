import { webp2png } from '../lib/webp2mp4.js'
let handler = async (m, { conn, usedPrefix, command }) => {
    const notStickerMessage = `*[β] πΏπ°ππ° π²πΎπ½ππ΄πππΈπ ππ½ πππΈπ²πΊπ΄π π° πΈπΌπ°πΆπ΄π½ πππ° π²πΎπΌπΎ π΄πΉπ΄πΌπΏπ»πΎ*: *${usedPrefix + command}*`
    if (!m.quoted) throw notStickerMessage
    const q = m.quoted || m
    let mime = q.mediaType || ''
    if (!/sticker/.test(mime)) throw notStickerMessage
    let media = await q.download()
    let out = await webp2png(media).catch(_ => null) || Buffer.alloc(0)
    await conn.sendFile(m.chat, out, 'out.png', '*DONE*', m)
}
handler.help = ['toimg (reply)']
handler.tags = ['sticker menu']
handler.command = ['toimg']

export default handler