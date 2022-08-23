import { pinterest } from '@bochilteam/scraper'

let handler = async(m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `*[❗] ¿𝚀𝚄𝙴 𝙴𝚂𝚃𝙰𝚂 𝙱𝚄𝚂𝙲𝙰𝙽𝙳𝙾? 𝙸𝙽𝙶𝚁𝙴𝚂𝙰 𝚀𝚄𝙴 𝙳𝙴𝚂𝙴𝙰𝚂 𝙱𝚄𝚂𝙲𝙰𝚁, 𝙴𝙹𝙴𝙼𝙿𝙻𝙾: ${usedPrefix + command} caballo blanco`
  const json = await pinterest(text)
  conn.sendFile(m.chat, json.getRandom(), 'pinterest.jpg', `
*Resultados para:*
${text}
`.trim(), m)
}
handler.help = ['pinterest <texto>']
handler.tags = ['descargas']
handler.command = /^(pinterest)$/i

export default handler