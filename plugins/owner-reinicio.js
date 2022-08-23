import { spawn } from 'child_process'
let handler = async (m, { conn, isROwner, text }) => {
    if (!process.send) throw 'Dont: node main.js\nDo: node index.js'
    if (global.conn.user.jid == conn.user.jid) {
    await m.reply('𝚁𝙴𝙸𝙽𝙸𝙲𝙸𝙰𝙽𝙳𝙾 𝙱𝙾𝚃...')
    process.send('reset')
  } else throw '_𝚎𝚎𝚎𝚎𝚎𝚒𝚒𝚒𝚝𝚝𝚜𝚜𝚜𝚜𝚜..._'
}

handler.help = ['restart']
handler.tags = ['owner menu']
handler.command = /^(res(tart)?)$/i

handler.rowner = true

export default handler

