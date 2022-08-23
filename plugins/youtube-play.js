import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) throw `*[❗] 𝙿𝙰𝚁𝙰 𝙳𝙴𝚂𝙲𝙰𝚁𝙶𝙰𝚁 𝚄𝙽𝙰 𝙲𝙰𝙽𝙲𝙸𝙾𝙽 𝚄𝚂𝙰 𝙲𝙾𝙼𝙾 𝙴𝙹𝙴𝙼𝙿𝙻𝙾:*${usedPrefix}${command} i'm happy faraon ☑`
  let vid = (await youtubeSearch(text)).video[0]
  if (!vid) throw '*[❗] 𝙻𝙾 𝚂𝙴𝙽𝚃𝙸𝙼𝙾𝚂, 𝚅𝙸𝙳𝙴𝙾/𝙰𝚄𝙳𝙸𝙾 𝙽𝙾 𝙴𝙽𝙲𝙾𝙽𝚃𝚁𝙰𝙳𝙾, 𝙸𝙽𝚃𝙴𝙽𝚃𝙴 𝙲𝙾𝙽 𝙷𝙾𝚃𝚁𝙾 𝙽𝙾𝙼𝙱𝚁𝙴'
  let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
  const url = 'https://www.youtube.com/watch?v=' + videoId
  await conn.sendHydrated(m.chat, `
「 𝙰𝚀𝚄𝙸 𝚃𝙸𝙴𝙽𝙴𝚂 」
📌 *𝚃𝙸𝚃𝚄𝙻𝙾:* ${title}
🔗 *𝚄𝚁𝙻:* ${url}
🖹 *𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝙲𝙸𝙾𝙽:* ${description}
⏲️ *𝙿𝚄𝙱𝙻𝙸𝙲𝙰𝙳𝙾 𝙴𝙽:* ${publishedTime}
⌚ *𝙳𝚄𝚁𝙰𝙲𝙸𝙾𝙽:* ${durationH}
👁️ *𝚅𝙸𝚂𝚃𝙰𝚂:* ${viewH}
「 𝙱𝚈 𝚃𝙰𝙺𝚄-𝙱𝙾𝚃 」
  `.trim(), author, thumbnail, url, '*📺𝚅𝙴𝚁 𝙴𝙽 𝚈𝙾𝚄𝚃𝚄𝙱𝙴*', null, null, [
    ['𝙰𝚄𝙳𝙸𝙾 🎧', `${usedPrefix}yta ${url} yes`],
    ['𝚅𝙸𝙳𝙴𝙾 🎥', `${usedPrefix}ytv ${url} yes`],
    ['𝙼𝙰𝚂 𝚁𝙴𝚂𝚄𝙻𝚃𝙰𝙳𝙾𝚂🔄', `${usedPrefix}playlist ${text}`]  
], m)
}
handler.help = ['play <titulo>','play2']
handler.tags = ['descargas']
handler.command = /^play|play2?$/i

handler.exp = 0

export default handler

