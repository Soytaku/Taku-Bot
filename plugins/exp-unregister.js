
import { createHash } from 'crypto'
let handler = async function (m, { args, usedPrefix }) {
  if (!args[0]) throw `*[β] π½ππΌπ΄ππΎ π³π΄ ππ΄ππΈπ΄ ππ°π²πΈπΎ*\nπΏππ πππππ, πππππππππ ππ ππππππ ππ πππππ..\nπ΄ππ²ππΈπ±π°:\n${usedPrefix}sn`
  let user = global.db.data.users[m.sender]
  let sn = createHash('md5').update(m.sender).digest('hex')
  if (args[0] !== sn) throw '*[β] π½ππΌπ΄ππΎ π³π΄ ππ΄ππΈπ΄ πΈπ½π²πΎπππ΄π²ππΎ*'
  user.registered = false
  m.reply(`Β‘ππ½ππ΄πΆ π·π΄π²π·πΎ π²πΎπ½ π΄ππΈππΎ! [β]`)
}
handler.help = ['unreg <sn|serial number>']
handler.tags = ['exp y limites']

handler.command = /^unreg(ister)?$/i
handler.register = true

export default handler

