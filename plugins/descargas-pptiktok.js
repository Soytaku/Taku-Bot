import fetch from 'node-fetch'
let handler = async (m, { conn, args, text, command, usedPrefix }) => {
if (!text) throw `${mg}ššššššš šš šššššš šš ššššššš šš šššššš
ššš£ šŖšØšš§ "@"\nšššš¢š„š”š¤\n*${usedPrefix + command} mundo_dos_animes81*`
let res = `https://api.lolhuman.xyz/api/pptiktok/${text}?apikey=9b817532fadff8fc7cb86862`
await conn.sendFile(m.chat, res, 'error.jpg', `[ā] šššš šš šššššš*${text}*`, m, false)
  
}
handler.help = ['tiktokfoto'].map(v => v + ' <username>')
handler.tags = ['downloader']
handler.command = /^(tiktokfoto|tiktokphoto)$/i
handler.limit = 1
handler.exp = 68
export default handler
