
import { createHash } from 'crypto'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { text, usedPrefix }) {
  let user = global.db.data.users[m.sender]
  if (user.registered === true) throw `*[❗] 𝚈𝙰 𝙴𝚂𝚃𝙰𝚂 𝚁𝙴𝙶𝙸𝚂𝚃𝚁𝙰𝙳𝙾*  \n𝙿𝙰𝚁𝙰 𝚅𝙾𝙻𝚅𝙴𝚁 𝙰 𝚁𝙴𝙶𝙸𝚂𝚃𝚁𝙰𝚁𝚃𝙴 𝙴𝚂𝙲𝚁𝙸𝙱𝙴 ${usedPrefix}unreg <SN|SERIAL NUMBER>`
  if (!Reg.test(text)) throw `*[❗] 𝙻𝙾 𝙴𝚂𝚃𝙰𝚂 𝙰𝙲𝙸𝙴𝙽𝙳𝙾 𝙼𝙰𝙻*✋🏻🥸🤚🏻\n*${usedPrefix}registrar nombre|edad*`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw '*[❗] 𝙴𝙻 𝙽𝙾𝙼𝙱𝚁𝙴 𝙽𝙾 𝙿𝚄𝙴𝙳𝙴 𝙴𝚂𝚃𝙰𝚁 𝚅𝙰𝙲𝙸𝙾* (alfanumérico)'
  if (!age) throw '*[❗] 𝙻𝙰 𝙴𝙳𝙰𝙳 𝙽𝙾 𝙿𝚄𝙴𝙳𝙴 𝙴𝚂𝚃𝙰𝚁 𝚅𝙰𝙲𝙸𝙰* (Número)'
  age = parseInt(age)
  if (age > 120) throw '*[❗] 𝙴𝚂𝚃𝙰𝚂 𝙼𝚄𝚈 𝚅𝙸𝙴𝙹𝙾, 𝚅𝚄𝙴𝙻𝚅𝙴 𝙲𝚄𝙰𝙽𝙳𝙾 𝙰𝚈𝙰𝚂 𝚁𝙴𝙴𝙽𝙲𝙰𝚁𝙽𝙰𝙳𝙾*'
  if (age < 5) throw '*[❗] 𝙴𝚁𝙴𝚂 𝙼𝚄𝚈 𝙹𝙾𝚅𝙴𝙽  𝙼𝙸𝙽𝙸𝙼𝙾 𝙳𝙴 𝙴𝙳𝙰𝙳 𝙿𝙰𝚁𝙰 𝚄𝚂𝙰𝚁 𝙴𝙻 𝙱𝙾𝚃* +15.'
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  m.reply(`
*𝚁𝙴𝚂𝙶𝙸𝚂𝚃𝚁𝙰𝙳𝙾 [✔]*

╭─「𝗧𝘂 𝗶𝗻𝗳𝗼𝗿𝗺𝗮𝗰𝗶𝗼𝗻 」
│❒༊ֶ֪⃟⃦⃕_𝙽𝙾𝙼𝙱𝚁𝙴: ${name}
│❒༊ֶ֪⃟⃦⃕ 𝙴𝙳𝙰𝙳: ${age} años
│❒༊ֶ֪⃟⃦⃕ 𝙽𝚂: ${sn}
╰────
*si falta su sn (numero de serie), escriba ${usedPrefix}sn
`.trim())
}
handler.help = ['reg <nombre>.<edad>'], 'register <nombre>.<edad>'
handler.tags = ['exp y limites']

handler.command = /^(registrar|reg(ister)?)$/i

export default handler
