import { googleImage } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `π΄πΉπ΄πΌπΏπ»πΎ π³π΄ π±πππππ΄π³π°: ${usedPrefix}${command} Minecraft`
    const res = await googleImage(text)
    let { url, width, height } = pickRandom(res) || {}
    conn.sendFile(m.chat, res.getRandom(), 'gimage.jpg', `
*ββ γ Ιͺα΄α΄Ι’α΄Ι΄ Ι’α΄α΄Ι’Κα΄γ ββ*

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
  