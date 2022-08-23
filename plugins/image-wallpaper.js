import { wallpaper, wallpaperv2 } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `*[❗] ¿𝚀𝚄𝙴 𝙳𝙴𝚂𝙴𝙰𝚂 𝙱𝚄𝚂𝙲𝙰𝚁? 𝙿𝚊𝚛𝚊 𝚋𝚞𝚜𝚌𝚊𝚛 𝚞𝚗 𝚠𝚊𝚕𝚕𝚙𝚊𝚙𝚎𝚛 𝚞𝚜𝚊 𝚌𝚘𝚖𝚘 𝚎𝚓𝚎𝚖𝚙𝚕𝚘 ${usedPrefix}${command} Minecraft`
    const res = await (/2/.test(command) ? wallpaperv2 : wallpaper)(text)
    const img = res[Math.floor(Math.random() * res.length)]
    conn.sendFile(m.chat, img, 'wallpaper.jpg', `𝚁𝚎𝚜𝚞𝚕𝚝𝚊𝚍𝚘 𝚍𝚎 *${text}*`, m)
}
handler.help = ['wallpaper <texto>',]
handler.tags = ['descargas']

handler.command = /^(wallpaper2?)$/i

export default handler