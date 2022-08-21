import { randomBytes } from 'crypto'

let handler = async (m, { conn, text }) => {
  let chats = Object.entries(conn.chats).filter(([jid, chat]) => !jid.endsWith('@g.us') && chat.isChats).map(v => v[0])
  let cc = conn.serializeM(text ? m : m.quoted ? await m.getQuotedObj() : false || m)
  let teks = text ? text : cc.text
  conn.reply(m.chat, `📢𝙴𝙽𝚅𝙸𝙰𝙽𝙳𝙾 𝙼𝙴𝙽𝚂𝙰𝙹𝙴 𝙳𝙴 𝙳𝙸𝙵𝚄𝙲𝙸𝙾𝙽 𝙰 ${chats.length} 𝙲𝙷𝙰𝚃𝚂`, m)
  for (let id of chats) await conn.copyNForward(id, conn.cMod(m.chat, cc, /bc|broadcast/i.test(teks) ? teks : teks + '\n' + readMore + '「 ' + author + '🔹 𝙼𝙴𝙽𝚂𝙰𝙹𝙴 𝙳𝙴 𝙳𝙸𝙵𝚄𝙲𝙸𝙾𝙽 𝙿𝙰𝚁𝙰 𝚃𝙾𝙳𝙾𝚂📣 」\n' + randomID(32)), true).catch(_ => _)
  m.reply('*𝙼𝙴𝙽𝚂𝙰𝙹𝙴 𝙴𝙽𝚅𝙸𝙰𝙳𝙾 𝙲𝙾𝚁𝚁𝙴𝙲𝚃𝙰𝙼𝙴𝙽𝚃𝙴 [✔]*')
}
handler.help = ['broadcastchats <mensaje>', 'bcchats']
handler.tags = ['owner menu']
handler.command = /^(broadcastchats?|bcc(hats?)?)$/i

handler.owner = true

export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

const randomID = length => randomBytes(Math.ceil(length * .5)).toString('hex').slice(0, length)