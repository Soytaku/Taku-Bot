import { wallpaper, wallpaperv2 } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `*[β] ΒΏπππ΄ π³π΄ππ΄π°π π±πππ²π°π? πΏπππ ππππππ ππ π ππππππππ πππ ππππ πππππππ ${usedPrefix}${command} Minecraft`
    const res = await (/2/.test(command) ? wallpaperv2 : wallpaper)(text)
    const img = res[Math.floor(Math.random() * res.length)]
    conn.sendFile(m.chat, img, 'wallpaper.jpg', `πππππππππ ππ *${text}*`, m)
}
handler.help = ['wallpaper <texto>',]
handler.tags = ['descargas']

handler.command = /^(wallpaper2?)$/i

export default handler