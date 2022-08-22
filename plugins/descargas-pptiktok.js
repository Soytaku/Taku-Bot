import fetch from 'node-fetch'
let handler = async (m, { conn, args, text, command, usedPrefix }) => {
if (!text) throw `${mg}𝐄𝐒𝐂𝐑𝐈𝐁𝐀 𝐄𝐋 𝐍𝐎𝐌𝐁𝐑𝐄 𝐃𝐄 𝐔𝐒𝐔𝐀𝐑𝐈𝐎 𝐃𝐄 𝐓𝐈𝐊𝐓𝐎𝐊
𝙎𝙞𝙣 𝙪𝙨𝙖𝙧 "@"\n𝙀𝙟𝙚𝙢𝙥𝙡𝙤\n*${usedPrefix + command} mundo_dos_animes81*`
let res = `https://api.lolhuman.xyz/api/pptiktok/${text}?apikey=9b817532fadff8fc7cb86862`
await conn.sendFile(m.chat, res, 'error.jpg', `[✓] 𝐅𝐎𝐓𝐎 𝐃𝐄 𝐏𝐄𝐑𝐅𝐈𝐋*${text}*`, m, false)
  
}
handler.help = ['tiktokfoto'].map(v => v + ' <username>')
handler.tags = ['downloader']
handler.command = /^(tiktokfoto|tiktokphoto)$/i
handler.limit = 1
handler.exp = 68
export default handler
