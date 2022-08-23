// adaptado by odin kkkkkkkkkkkkkk

import uploadImage from '../lib/uploadImage.js'
import { sticker } from '../lib/sticker.js'
import MessageType from '@adiwajshing/baileys' 

let handler = async (m, { conn, text }) => {
 try {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw '*[❗] ɪᴍᴀɢᴇɴ ɴᴏ sᴏᴘᴏʀᴛᴀᴅᴀ*'
  if (!/image\/(jpe?g|png)/.test(mime)) throw `*𝙴𝙻 𝙿𝙴𝚂𝙾* ${mime} *𝙽𝙾 𝚂𝙾𝙿𝙾𝚁𝚃𝙰𝙳𝙾*`
  let img = await q.download()
  let url = await uploadImage(img)

  let glass = `https://some-random-api.ml/canvas/glass?avatar=${url}`
  let stiker = await sticker(null, glass, 'glass', '©INFINIXBOT')
  conn.sendFile(m.chat, stiker, MessageType.sticker, {
    quoted: m
  })
 } catch (e) {
   m.reply('*[❗] 𝙲𝙾𝙽𝚅𝙴𝚁𝙲𝙸𝙾𝙽 𝙵𝙰𝙻𝙻𝙸𝙳𝙰, 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴 𝙰 𝚄𝙽𝙰 𝙸𝙼𝙰𝙶𝙴𝙽*')
  }
}
handler.help = ['glass']
handler.tags = ['img edit']
handler.command = /^glass$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

export default handler

