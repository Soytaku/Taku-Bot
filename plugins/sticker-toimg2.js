import { webp2png } from '../lib/webp2mp4.js'
let handler = async (m, { conn, usedPrefix, command }) => {
    const notStickerMessage = `*[❗] 𝙿𝙰𝚁𝙰 𝙲𝙾𝙽𝚅𝙴𝚁𝚃𝙸𝚁 𝚄𝙽 𝚂𝚃𝙸𝙲𝙺𝙴𝚁 𝙰 𝙸𝙼𝙰𝙶𝙴𝙽 𝚄𝚂𝙰 𝙲𝙾𝙼𝙾 𝙴𝙹𝙴𝙼𝙿𝙻𝙾*: *${usedPrefix + command}*`
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