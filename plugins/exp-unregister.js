
import { createHash } from 'crypto'
let handler = async function (m, { args, usedPrefix }) {
  if (!args[0]) throw `*[❗] 𝙽𝚄𝙼𝙴𝚁𝙾 𝙳𝙴 𝚂𝙴𝚁𝙸𝙴 𝚅𝙰𝙲𝙸𝙾*\n𝙿𝚘𝚛 𝚏𝚊𝚟𝚘𝚛, 𝚌𝚘𝚖𝚙𝚛𝚞𝚎𝚋𝚎 𝚜𝚞 𝚗𝚞𝚖𝚎𝚛𝚘 𝚍𝚎 𝚜𝚎𝚛𝚒𝚎..\n𝙴𝚂𝙲𝚁𝙸𝙱𝙰:\n${usedPrefix}sn`
  let user = global.db.data.users[m.sender]
  let sn = createHash('md5').update(m.sender).digest('hex')
  if (args[0] !== sn) throw '*[❗] 𝙽𝚄𝙼𝙴𝚁𝙾 𝙳𝙴 𝚂𝙴𝚁𝙸𝙴 𝙸𝙽𝙲𝙾𝚁𝚁𝙴𝙲𝚃𝙾*'
  user.registered = false
  m.reply(`¡𝚄𝙽𝚁𝙴𝙶 𝙷𝙴𝙲𝙷𝙾 𝙲𝙾𝙽 𝙴𝚇𝙸𝚃𝙾! [✔]`)
}
handler.help = ['unreg <sn|serial number>']
handler.tags = ['exp y limites']

handler.command = /^unreg(ister)?$/i
handler.register = true

export default handler

