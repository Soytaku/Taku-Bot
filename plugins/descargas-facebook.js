import { facebookdl, facebookdlv2 } from '@bochilteam/scraper'
let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `*[❗] 𝙿𝙰𝚁𝙰 𝙳𝙴𝚂𝙲𝙰𝚁𝙶𝙰𝚁 𝚅𝙸𝙳𝙴𝙾𝚂 𝙴𝙽 𝙵𝙰𝙲𝙴𝙱𝙾𝙾𝙺 𝚄𝚂𝙰 𝙲𝙾𝙼𝙾 𝙴𝙹𝙴𝙼𝙿𝙻𝙾*: ${usedPrefix}${command} https://fb.watch/azFEBmFRcy/`
    const { result } = await facebookdl(args[0]).catch(async _ => await facebookdlv2(args[0]))
    for (const { url, isVideo } of result.reverse()) conn.sendFile(m.chat, url, `facebook.${!isVideo ? 'bin' : 'mp4'}`, `🔗 *𝚄𝚁𝙻:* ${url}`, m)
}
handler.help = ['faceboock <link>']
handler.tags = ['descargas']

handler.command = /^((facebook|fb)(downloder|dl)?)$/i
handler.limit = 2
export default handler