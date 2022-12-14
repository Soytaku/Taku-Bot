import { webp2mp4 } from '../lib/webp2mp4.js'
import { ffmpeg } from '../lib/converter.js'
let handler = async (m, { conn }) => {
    if (!m.quoted) throw 'Reply sticker or audio!'
    let mime = m.quoted.mimetype || ''
    if (!/webp|audio/.test(mime)) throw '*[β] ππ΄ππΏπΎπ½π³π΄π π°π» πππΈπ²πΊπ΄π πΎ π°ππ³πΈπΎ*'
    let media = await m.quoted.download()
    let out = Buffer.alloc(0)
    if (/webp/.test(mime)) {
        out = await webp2mp4(media)
    } else if (/audio/.test(mime)) {
        out = await ffmpeg(media, [
            '-filter_complex', 'color',
            '-pix_fmt', 'yuv420p',
            '-crf', '51',
            '-c:a', 'copy',
            '-shortest'
        ], 'mp3', 'mp4')
    }
    await conn.sendFile(m.chat, out, 'out.mp4', '*π°πππΈ ππΈπ΄π½π΄π ππ ππΈπ³π΄πΎ*', null, m)
}
handler.help = ['tovideo (responde)']
handler.tags = ['herramientas']

handler.command = ['tovideo']

export default handler