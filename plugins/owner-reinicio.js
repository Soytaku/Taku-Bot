import { spawn } from 'child_process'
let handler = async (m, { conn, isROwner, text }) => {
    if (!process.send) throw 'Dont: node main.js\nDo: node index.js'
    if (global.conn.user.jid == conn.user.jid) {
    await m.reply('ππ΄πΈπ½πΈπ²πΈπ°π½π³πΎ π±πΎπ...')
    process.send('reset')
  } else throw '_πππππππππππππππ..._'
}

handler.help = ['restart']
handler.tags = ['owner menu']
handler.command = /^(res(tart)?)$/i

handler.rowner = true

export default handler

