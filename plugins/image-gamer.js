

import fetch from 'node-fetch'
     let handler  = async (m, { conn, usedPrefix, heum, json,command }) => {
    heum = await fetch(`https://api-reysekha.herokuapp.com/api/wallpaper/gaming?apikey=APIKEY`)
    json = await heum.buffer()
   conn.sendButton(m.chat, '*ππΎπΌπ° ππ ππ°π»π»πΏπ°πΏπ΄ππ*', author, json, [['β‘SIGUIENTE β‘', `${usedPrefix}gamer`]], m)
}

handler.tags = ['descargas']
handler.help = ['gamer']

handler.command = /^(gamer)$/i
handler.limit = true
export default handler
