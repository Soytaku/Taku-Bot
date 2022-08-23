

import fetch from 'node-fetch'
     let handler  = async (m, { conn, usedPrefix, heum, json,command }) => {
    heum = await fetch(`https://api-reysekha.herokuapp.com/api/wallpaper/tatasurya?apikey=APIKEY`)
    json = await heum.buffer()
   conn.sendButton(m.chat, '*𝚃𝙾𝙼𝙰 𝚃𝚄 𝚆𝙰𝙻𝙻𝙿𝙰𝙿𝙴𝚁🌌*', author, json, [['➡SIGUIENTE ➡', `${usedPrefix}planeta`]], m)
}

handler.tags = ['descargas']
handler.help = ['planeta']

handler.command = /^(planeta)$/i
handler.limit = true
export default handler
