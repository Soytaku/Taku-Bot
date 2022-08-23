import { sticker } from '../lib/sticker.js'
import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'
import { webp2png } from '../lib/webp2mp4.js'

let handler = async (m, { conn, args, usedPrefix, command }) => {
  let stiker = false
  try {
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || q.mediaType || ''
    if (/webp|image|video/g.test(mime)) {
      if (/video/g.test(mime)) if ((q.msg || q).seconds > 11) return m.reply('*𝟷𝟶 𝚂𝙴𝙶𝚄𝙽𝙳𝙾𝚂 𝙲𝙾𝙼𝙾 𝙼𝙰𝚇𝙸𝙼𝙾*')
      let img = await q.download?.()
      if (!img) throw `*[❗] 𝚁𝙴𝙲𝚄𝙴𝚁𝙳𝙰 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴𝚁 𝙰 𝚄𝙽𝙰 𝙸𝙼𝙰𝙶𝙴𝙽 𝙾 𝚅𝙸𝙳𝙴𝙾 𝙲𝙾𝙽 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾* ${usedPrefix + command}`
      let out
      try {
        if (/webp/g.test(mime)) out = await webp2png(img)
        else if (/image/g.test(mime)) out = await uploadImage(img)
        else if (/video/g.test(mime)) out = await uploadFile(img)
        if (typeof out !== 'string') out = await uploadImage(img)
        stiker = await sticker(false, out, global.packname)
      } catch (e) {
        console.error(e)
      } finally {
        if (!stiker) stiker = await sticker(img, false, global.packname)
      }
    } else if (args[0]) {
      if (isUrl(args[0])) stiker = await sticker(false, args[0], global.packname)
      else return m.reply('*[❗] 𝚄𝚁𝙻 𝙸𝙽𝚅𝙰𝙻𝙸𝙳𝙰')
    }
  } catch (e) {
    console.error(e)
    if (!stiker) stiker = e
  } finally {
    if (stiker) conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
    else throw '*[❗] 𝙻𝙰 𝙲𝙾𝙽𝚅𝙴𝚁𝙲𝙸𝙾𝙽 𝙵𝙰𝙻𝙻𝙾, 𝚁𝙴𝙲𝚄𝙴𝚁𝙳𝙰 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴𝚁 𝙰 𝚄𝙽𝙰 𝙸𝙼𝙰𝙶𝙴𝙽'
  }
}
handler.help = ['sticker <etiqueta>']
handler.tags = ['sticker menu']
handler.command = /^s(tic?ker)?(gif)?(wm)?$/i

export default handler

const isUrl = (text) => {
  return text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png)/, 'gi'))
}
