import { lyrics, lyricsv2 } from '@bochilteam/scraper'

let handler = async (m, { conn, text, usedPrefix, command }) => {
    let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : ''
    if (!teks) throw `*[❗] _𝙿𝙰𝚁𝙰 𝙱𝚄𝚂𝙲𝙰𝚁 𝙻𝙰 𝙻𝙴𝚃𝚁𝙰 𝙳𝙴 𝚃𝚄 𝙲𝙰𝙽𝙲𝙸𝙾𝙽 𝙴𝚂𝙲𝚁𝙸𝙱𝙴🖊️_* ${usedPrefix}${command} *𝙽𝙾𝙼𝙱𝚁𝙴 𝙳𝙴 𝙻𝙰 𝙲𝙰𝙽𝙲𝙸𝙾𝙽*`
    const result = await lyricsv2(teks).catch(async _ => await lyrics(teks))
    m.reply(`
🔹Lyrics *${result.title}*
🔹Author ${result.author}


${result.lyrics}


Url ${result.link}
`.trim())
}

handler.help = ['letras <cancion>']
handler.tags = ['herramientas']
handler.command = /letras/i

export default handler