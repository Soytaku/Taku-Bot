import { googleImage } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `𝙴𝙹𝙴𝙼𝙿𝙻𝙾 𝙳𝙴 𝙱𝚄𝚂𝚀𝚄𝙴𝙳𝙰: ${usedPrefix}${command} Minecraft`
    const res = await googleImage(text)
    let { url, width, height } = pickRandom(res) || {}
    conn.sendFile(m.chat, res.getRandom(), 'gimage.jpg', `
*── 「 ɪᴍᴀɢᴇɴ ɢᴏᴏɢʟᴇ」 ──*

El resultado de *${text}*

${author}
`.trim(), m)
}
handler.help = ['gimage <texto>', 'image']
handler.tags = ['descargas']
handler.command = /^(gimage|image)$/i
handler.limit   = true
export default handler

function pickRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
  }
  