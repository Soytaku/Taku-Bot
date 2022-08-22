
import { mediafiredl } from '@bochilteam/scraper'
let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `*[❗𝐈𝐍𝐅𝐎❗] 𝙸𝙽𝙶𝚁𝙴𝚂𝙴 𝚄𝙽 𝙴𝙽𝙻𝙰𝙲𝙴 𝚅𝙰𝙻𝙸𝙳𝙾 𝙳𝙴 𝙼𝙴𝙳𝙸𝙰𝙵𝙸𝚁𝙴, 𝙴𝙹𝙴𝙼𝙿𝙻𝙾:  ${usedPrefix}${command} https://www.mediafire.com/ *_- 𝙰𝚁𝙲𝙷𝙸𝚅𝙾𝚂 𝙼𝙰𝚈𝙾𝚁𝙴𝚂 𝙰 𝟷00 𝙼𝙱 𝙿𝚄𝙴𝙳𝙴 𝚀𝚄𝙴 𝙽𝙾 𝚂𝙴𝙰𝙽 𝙴𝙽𝚅𝙸𝙰𝙳𝙾𝚂_*`
    let res = await mediafiredl(args[0])
    let { url, url2, filename, ext, aploud, filesize, filesizeH } = res
    let caption = `
┌「𝐓𝐀𝐊𝐔-𝐁𝐎𝐓」
├❏❤${eg}
├❏📁𝙽𝙾𝙼𝙱𝚁𝙴: ${filename}
├❏💪𝙿𝙴𝚂𝙾: ${filesizeH}
├❏🚀𝚃𝙸𝙿𝙾: ${ext}
└────ׂ─ׂ─ׂ─ׂ───
⌛ _Cargando..._
■■■■■■□80%⏳`.trim() 
    m.reply(caption)
    await conn.sendFile(m.chat, url, filename, '', m, null, { mimetype: ext, asDocument: true })
}
handler.help = ['mediafire <link>']
handler.tags = ['descargas']
handler.command = /^(mediafire|mf)$/i

handler.limit = 3

export default handler