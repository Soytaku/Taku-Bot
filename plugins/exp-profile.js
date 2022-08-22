 import PhoneNumber from 'awesome-phonenumber'
 import { xpRange } from '../lib/levelling.js'
let handler = async (m, { conn, usedPrefix }) => {
  let pp = './src/avatar_contact.png'
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  try {
    pp = await conn.profilePictureUrl(who)
  } catch (e) {

  } finally {
    let { name, limit, exp, lastclaim, registered, regTime, age, level, role } = global.db.data.users[who]
    let { min, xp, max } = xpRange(level, global.multiplier)
    let username = conn.getName(who) 
    let math = max - xp
    let prem = global.prems.includes(who.split`@`[0])
    let str = `
╭☆━「*𝚃𝙰𝙺𝚄-𝙱𝙾𝚃-𝚇𝙳*」━☆  
│➺𝙽𝙾𝙼𝙱𝚁𝙴: ${username} ${registered ? '(' + name + ') ': ''}(@${who.replace(/@.+/, '')})
│➺𝙽𝚄𝙼𝙴𝚁𝙾: ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}
│➺𝙻𝙸𝙽𝙺: https://wa.me/${who.split`@`[0]}${registered ? '\nEdad: ' + age : ''}
│➺XP: TOTAL ${exp} (${exp - min} / ${xp}) [${math <= 0 ? `Listo para *${usedPrefix}levelup*` : `${math} XP restante para subir de nivel`}]
│➺𝙽𝙸𝚅𝙴𝙻: ${level}
│➺𝚁𝙾𝙻𝙴: *${role}*
│➺𝙻𝙸𝙼𝙸𝚃𝙴: ${limit}
│➺Registro: ${registered ? 'Sí (' + new Date(regTime) + ')': 'No'}
│➺Premium: ${prem ? 'Sí' : 'No'}${lastclaim > 0 ? '\nÚltimo Reclamo: ' + new Date(lastclaim) : ''}
╰☆━「*𝚃𝙰𝙺𝚄-𝙱𝙾𝚃-𝚇𝙳*」━☆
`.trim()
    let mentionedJid = [who]
    conn.sendFile(m.chat, pp, 'pp.jpg', str, m, false, { contextInfo: { mentionedJid }})
  }
}
handler.help = ['perfil']
handler.tags = ['exp y limites']
handler.command = /^profile|perfil$/i

export default handler
