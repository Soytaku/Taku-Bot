import axiostal from "axios"
import fetch from 'node-fetch'
let handler = async(m, { conn, text, xteamkey }) => {
if (!text) throw '*[❗] 𝙸𝙽𝙶𝚁𝙴𝚂𝙰 𝚄𝙽 𝙻𝙸𝙽𝙺 𝚀𝚄𝙴 𝙳𝙴𝚂𝙴𝙰 𝙰𝙲𝙾𝚁𝚃𝙰𝚁,* 𝙴𝙹𝙴𝙼𝙿𝙻𝙾 #acortar www.google.com*'
let json = await (await fetch(`https://api.xteam.xyz/shorturl/tinyurl?url=${text}&apikey=cb15ed422c71a2fb`)).json()
if (!json.status) throw json
let hasil = `**[✔] 𝙻𝙸𝙽𝙺 𝙰𝙲𝙾𝚁𝚃𝙰𝙳𝙾 𝙲𝙾𝙽 𝙴𝚇𝙸𝚃𝙾*\n\n*𝙴𝙻𝙰𝙽𝙲𝙴 𝙰𝙽𝚃𝙴𝚁𝙸𝙾𝚁:*\n${text}\n*𝙻𝙸𝙽𝙺 𝙰𝙲𝙾𝚁𝚃𝙰𝙳𝙾:*\n*${json.result}*`.trim()   
m.reply(hasil)
}
handler.help = ['acortar <link>']
handler.tags = ['herramientas']
handler.command = /^(tinyurl|short|acortar|corto)$/i
handler.fail = null
export default handler
