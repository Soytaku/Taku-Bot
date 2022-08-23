import gtts from 'node-gtts'
import { readFileSync, unlinkSync } from 'fs'
import { join } from 'path'

const defaultLang = 'id'
let handler = async (m, { conn, args, usedPrefix, command }) => {

  let lang = args[0]
  let text = args.slice(1).join(' ')
  if ((args[0] || '').length !== 2) {
    lang = defaultLang
    text = args.join(' ')
  }
  if (!text && m.quoted?.text) text = m.quoted.text

  let res
  try { res = await tts(text, lang) }
  catch (e) {
    m.reply(e + '')
    text = args.join(' ')
    if (!text) throw `*[❗] _𝙿𝙰𝚁𝙰 𝚃𝚁𝙰𝙳𝚄𝙲𝙸𝚁 𝚄𝙽 𝚃𝙴𝚇𝚃𝙾 𝙰 𝚅𝙾𝚉 𝚄𝚂𝙰 𝙲𝙾𝙼𝙾 𝙴𝙹𝙴𝙼𝙿𝙻𝙾_* ${usedPrefix}${command} 𝙴𝚂 Hola`
    res = await tts(text, defaultLang)
  } finally {
    if (res) conn.sendFile(m.chat, res, 'tts.opus', null, m, true)
  }
}
handler.help = ['tts es <texto a voz>']
handler.tags = ['herramientas']
handler.command = /^g?tts$/i

export default handler

function tts(text, lang = 'id') {
  console.log(lang, text)
  return new Promise((resolve, reject) => {
    try {
      let tts = gtts(lang)
      let filePath = join(global.__dirname(import.meta.url), '../tmp', (1 * new Date) + '.wav')
      tts.save(filePath, text, () => {
        resolve(readFileSync(filePath))
        unlinkSync(filePath)
      })
    } catch (e) { reject(e) }
  })
}