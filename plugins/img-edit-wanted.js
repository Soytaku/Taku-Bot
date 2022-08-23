import uploadImage from '../lib/uploadImage.js'
import { sticker } from '../lib/sticker.js'
import MessageType from '@adiwajshing/baileys' 

let handler = async (m, { conn, text }) => {
 try {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw '*[❗] 𝙵𝙾𝚃𝙾 𝙽𝙾 𝚂𝙾𝙿𝙾𝚁𝚃𝙰𝙳𝙰*'
  if (!/image\/(jpe?g|png)/.test(mime)) throw `*𝙴𝙻 𝙿𝙴𝚂𝙾* ${mime} 𝙳𝙴 𝙻𝙰 𝙵𝙾𝚃𝙾 𝙽𝙾 𝚂𝙾𝙿𝙾𝚁𝚃𝙰𝙳𝙾`
  let img = await q.download()
  let url = await uploadImage(img)
  let wanted = `https://api.dhamzxploit.my.id/api/canvas/wanted?url=${url}`
  let stiker = await sticker(null, wanted, global.packname,)
  conn.sendFile(m.chat, stiker, MessageType.sticker,  m)
 } catch (e) {
   m.reply('*[❗] 𝙲𝙾𝙽𝚅𝙴𝚁𝙲𝙸𝙾𝙽 𝙵𝙰𝙻𝙻𝙸𝙳𝙰, 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴 𝙰 𝚄𝙽𝙰 𝙸𝙼𝙰𝙶𝙴𝙽*')
  }
}
handler.help = ['wanted']
handler.tags = ['img edit']
handler.command = /^wanted$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

export default handler