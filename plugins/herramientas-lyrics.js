import { lyrics, lyricsv2 } from '@bochilteam/scraper'

let handler = async (m, { conn, text, usedPrefix, command }) => {
    let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : ''
    if (!teks) throw `*[β] _πΏπ°ππ° π±πππ²π°π π»π° π»π΄πππ° π³π΄ ππ π²π°π½π²πΈπΎπ½ π΄ππ²ππΈπ±π΄ποΈ_* ${usedPrefix}${command} *π½πΎπΌπ±ππ΄ π³π΄ π»π° π²π°π½π²πΈπΎπ½*`
    const result = await lyricsv2(teks).catch(async _ => await lyrics(teks))
    m.reply(`
πΉLyrics *${result.title}*
πΉAuthor ${result.author}


${result.lyrics}


Url ${result.link}
`.trim())
}

handler.help = ['letras <cancion>']
handler.tags = ['herramientas']
handler.command = /letras/i

export default handler