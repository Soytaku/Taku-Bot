import fetch from "node-fetch"
let handler = async(m, { conn }) => {
  let res = await fetch('https://api.waifu.pics/sfw/waifu')
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.url) throw 'Error!'
  conn.sendFile(m.chat, json.url, '', '*ππΎπΌπ° ππ ππ°πΈπ΅ππ«£*', m)
}
handler.help = ['waifu']
handler.tags = ['descargas']
handler.command = /^(waif)$/i
//MADE IN ERPAN 1140 BERKOLABORASI DENGAN BTS
export default handler
