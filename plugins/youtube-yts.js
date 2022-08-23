import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { text }) => {
  if (!text) throw '*¿𝚀𝚄𝙴 𝙴𝚂𝚃𝙰𝚂 𝙱𝚄𝚂𝙲𝙰𝙽𝙳𝙾?*'
  const { video, channel } = await youtubeSearch(text)
  let teks = [...video, ...channel].map(v => {
    switch (v.type) {
      case 'video': return `
📌 *${v.title}* (${v.url})
⌚ 𝙳𝚞𝚛𝚊𝚝𝚒𝚘𝚗: ${v.durationH}
⏲️ 𝚂𝚄𝙱𝙸𝙳𝙾: ${v.publishedTime}
👁️ ${v.view} views
      `.trim()
      case 'channel': return `
📌 *${v.channelName}* (${v.url})
🧑‍🤝‍🧑 _${v.subscriberH} (${v.subscriber}) 𝚂𝚞𝚜𝚌𝚛𝚒𝚙𝚝𝚘𝚛𝚎𝚜
🎥 ${v.videoCount} video
`.trim()
    }
  }).filter(v => v).join('\n\n========================\n\n')
  m.reply(teks)
}
handler.help = ['buscaryt']
handler.tags = ['descargas', 'herramientas']
handler.command = /buscaryt/i
handler.limit = false
export default handler
