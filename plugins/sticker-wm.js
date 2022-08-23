import { addExif } from '../lib/sticker.js'


let handler = async (m, { conn, text }) => {
  if (!m.quoted) throw '*[❗] 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴 𝙰 𝚄𝙽 𝚂𝚃𝙸𝙲𝙺𝙴𝚁*'
  let stiker = false
  try {
    let [packname, ...author] = text.split('|')
    author = (author || []).join('|')
    let mime = m.quoted.mimetype || ''
    if (!/webp/.test(mime)) throw '*[❗] 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴 𝙰𝙻 𝚂𝚃𝙸𝙲𝙺𝙴𝚁'
    let img = await m.quoted.download()
    if (!img) throw '*[❗] 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴 𝙰𝙻 𝚂𝚃𝙸𝙲𝙺𝙴𝚁'
    stiker = await addExif(img, packname || '', author || '')
  } catch (e) {
    console.error(e)
    if (Buffer.isBuffer(e)) stiker = e
  } finally {
    if (stiker) conn.sendFile(m.chat, stiker, 'wm.webp', '', m, false, { asSticker: true })
    else throw '*[❗] 𝙲𝙾𝙽𝚅𝙴𝚁𝙲𝙸𝙾𝙽 𝙵𝙰𝙻𝙻𝙸𝙳𝙰, 𝙸𝙽𝚃𝙴𝙽𝚃𝙰 𝙳𝙴 𝙽𝚄𝙴𝚅𝙾*'
  }
}
handler.help = ['wm <packname>|<author>']
handler.tags = ['sticker menu']
handler.command = /^wm$/i

export default handler
