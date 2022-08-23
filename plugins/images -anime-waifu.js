import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix }) => {
    let res = await fetch('https://api.waifu.pics/sfw/waifu')
    if (!res.ok) throw await res.text()
    let json = await res.json()
    if (!json.url) throw 'Error!'
    conn.sendButton(m.chat, '*𝚃𝙾𝙼𝙰 𝚃𝚄 𝚆𝙰𝙸𝙵𝚄🫣*', author, json.url, [['➡SIGUIENTE ➡', `${usedPrefix}waifu`]], m)
}
handler.help = ['waifu']
handler.tags = ['menu 18']
handler.limit = true
handler.command = /^(waifu)$/i
//MADE IN ERPAN 1140 BERKOLABORASI DENGAN BTS
export default handler