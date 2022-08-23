import fetch from "node-fetch"

let handler = async (m, { conn }) => {
  let res = await fetch (`https://api.xteam.xyz/randomimage/ppcouple?APIKEY=cristian9407`)
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.status) throw json
  await conn.sendFile(m.chat, json.result.male, '', '𝙴𝙻', m)
  await conn.sendFile(m.chat, json.result.female, '', '𝙴𝙻𝙻𝙰', m)
}
handler.help = ['match']
handler.tags = ['juegos', 'descargas']
handler.command = /^(match)$/i

export default handler
