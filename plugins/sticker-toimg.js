import { spawn } from 'child_process'
import { format } from 'util'

let handler = async (m, { conn, usedPrefix, command }) => {
    if (!global.support.convert &&
        !global.support.magick &&
        !global.support.gm) return handler.disabled = true // Disable if doesnt support
    const notStickerMessage = `*[❗] 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴 𝙰𝙻 𝚂𝚃𝙸𝙲𝙺𝙴𝚁 𝙲𝙾𝙽 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾*: *${usedPrefix + command}*`
    if (!m.quoted) throw notStickerMessage
    let q = m.quoted
    if (/sticker/.test(q.mediaType)) {
        let sticker = await q.download()
        if (!sticker) throw sticker
        let bufs = []
        const [_spawnprocess, ..._spawnargs] = [...(global.support.gm ? ['gm'] : global.support.magick ? ['magick'] : []), 'convert', 'webp:-', 'png:-']
        let im = spawn(_spawnprocess, _spawnargs)
        im.on('error', e => m.reply(format(e)))
        im.stdout.on('data', chunk => bufs.push(chunk))
        im.stdin.write(sticker)
        im.stdin.end()
        im.on('exit', () => {
            conn.sendFile(m.chat, Buffer.concat(bufs), 'image.png', author, m)
        })
    } else throw notStickerMessage
}
handler.help = ['topng (responde)']
handler.tags = ['sticker menu']
handler.command = /^topng$/i

export default handler