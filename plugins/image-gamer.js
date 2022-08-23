

import fetch from 'node-fetch'
     let handler  = async (m, { conn, usedPrefix, heum, json,command }) => {
    heum = await fetch(`https://api-reysekha.herokuapp.com/api/wallpaper/gaming?apikey=APIKEY`)
    json = await heum.buffer()
   conn.sendButton(m.chat, '*𝚃𝙾𝙼𝙰 𝚃𝚄 𝚆𝙰𝙻𝙻𝙿𝙰𝙿𝙴𝚁🌌*', author, json, [['➡SIGUIENTE ➡', `${usedPrefix}gamer`]], m)
}

handler.tags = ['descargas']
handler.help = ['gamer']

handler.command = /^(gamer)$/i
handler.limit = true
export default handler
