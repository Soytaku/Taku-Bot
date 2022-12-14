import { addExif } from '../lib/sticker.js'


let handler = async (m, { conn, text }) => {
  if (!m.quoted) throw '*[β] ππ΄ππΏπΎπ½π³π΄ π° ππ½ πππΈπ²πΊπ΄π*'
  let stiker = false
  try {
    let [packname, ...author] = text.split('|')
    author = (author || []).join('|')
    let mime = m.quoted.mimetype || ''
    if (!/webp/.test(mime)) throw '*[β] ππ΄ππΏπΎπ½π³π΄ π°π» πππΈπ²πΊπ΄π'
    let img = await m.quoted.download()
    if (!img) throw '*[β] ππ΄ππΏπΎπ½π³π΄ π°π» πππΈπ²πΊπ΄π'
    stiker = await addExif(img, packname || '', author || '')
  } catch (e) {
    console.error(e)
    if (Buffer.isBuffer(e)) stiker = e
  } finally {
    if (stiker) conn.sendFile(m.chat, stiker, 'wm.webp', '', m, false, { asSticker: true })
    else throw '*[β] π²πΎπ½ππ΄ππ²πΈπΎπ½ π΅π°π»π»πΈπ³π°, πΈπ½ππ΄π½ππ° π³π΄ π½ππ΄ππΎ*'
  }
}
handler.help = ['wm <packname>|<author>']
handler.tags = ['sticker menu']
handler.command = /^wm$/i

export default handler
