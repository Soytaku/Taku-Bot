import uploadImage from '../lib/uploadImage.js'
import { sticker } from '../lib/sticker.js'
import MessageType from '@adiwajshing/baileys' 

let handler = async (m, { conn, text }) => {
 try {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw '*[β] π΅πΎππΎ π½πΎ ππΎπΏπΎπππ°π³π°*'
  if (!/image\/(jpe?g|png)/.test(mime)) throw `*π΄π» πΏπ΄ππΎ* ${mime} π³π΄ π»π° π΅πΎππΎ π½πΎ ππΎπΏπΎπππ°π³πΎ`
  let img = await q.download()
  let url = await uploadImage(img)
  let wanted = `https://api.dhamzxploit.my.id/api/canvas/wanted?url=${url}`
  let stiker = await sticker(null, wanted, global.packname,)
  conn.sendFile(m.chat, stiker, MessageType.sticker,  m)
 } catch (e) {
   m.reply('*[β] π²πΎπ½ππ΄ππ²πΈπΎπ½ π΅π°π»π»πΈπ³π°, ππ΄ππΏπΎπ½π³π΄ π° ππ½π° πΈπΌπ°πΆπ΄π½*')
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