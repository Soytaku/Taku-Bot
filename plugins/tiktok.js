let fetch = require('node-fetch')
let handler = async (m, {command, conn, text, args}) => {
if (!text) throw `*[❗] 𝙿𝙰𝚁𝙰 𝙳𝙴𝚂𝙲𝙰𝚁𝙶𝙰𝚁 𝚅𝙸𝙳𝙴𝙾𝚂 𝙳𝙴 𝚃𝙸𝙺𝚃𝙾𝙺 𝙸𝙽𝙶𝚁𝙴𝚂𝙴 𝚄𝙽 𝙴𝙻𝙰𝙽𝙲𝙴/𝙻𝙸𝙽𝙺 𝙳𝙴 𝙰𝙻𝙶𝚄𝙽 𝚃𝙸𝙺𝚃𝙾𝙺*\n\n*𝙴𝙹𝙴𝙼𝙿𝙻𝙾:*\n*#tiktok https://vm.tiktok.com/ZML42vSnn/*`
if (command == 'tiktok') {
let espera = '*[❗] 𝙴𝙽𝚅𝙸𝙰𝙽𝙳𝙾 𝚂𝚄 𝚃𝙸𝙺𝚃𝙾𝙺, 𝙿𝙾𝚁𝙵𝙰𝚅𝙾𝚁 𝙰𝙶𝚄𝙰𝚁𝙳𝙴 𝚄𝙽 𝙼𝙾𝙼𝙴𝙽𝚃𝙾...*'
m.reply(espera)
let res = await fetch("https://api.dhamzxploit.my.id/api/tiktod/?url="+args[0])
let json = await res.json()
conn.sendFile(m.chat, json.result.nowatermark, 'error.mp4', `*©𝑇𝑎𝑘𝑢-𝐵𝑜𝑡-𝑥𝐷*`, m)}
}
handler.help = ['tiktok'].map(v => v + ' <url>')
handler.tags = ['general']
handler.command = /^(tiktok)$/i
module.exports = handler
