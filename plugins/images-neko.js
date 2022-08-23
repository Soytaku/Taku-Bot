import fetch from "node-fetch"
let handler = async(m, { conn }) => {
  let res = await fetch('https://api.waifu.pics/sfw/neko')
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.url) throw 'Error!'
  conn.sendFile(m.chat, json.url, '', '*𝚃𝙾𝙼𝙰 𝚃𝚄 𝙽𝙴𝙺𝙾🫣*', m)
}
handler.help = ['neko']
handler.tags = ['menu 18']
handler.limit = true
handler.command = /^(neko)$/i
//BY ODIN
export default handler

