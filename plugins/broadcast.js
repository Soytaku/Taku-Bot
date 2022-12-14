import { randomBytes } from 'crypto'

let handler = async (m, { conn, text }) => {
  let chats = Object.entries(conn.chats).filter(([_, chat]) => chat.isChats).map(v => v[0])
  let cc = conn.serializeM(text ? m : m.quoted ? await m.getQuotedObj() : false || m)
  let teks = text ? text : cc.text
  conn.reply(m.chat, `π’π΄π½ππΈπ°π πΌπ΄π½ππ°πΉπ΄ π³π΄ π³πΈπ΅ππ²πΈπΎπ½ π°  ${chats.length} π²π·π°ππ`, m)
  for (let id of chats) await conn.copyNForward(id, conn.cMod(m.chat, cc, /bc|broadcast/i.test(teks) ? teks : teks + '\n' + readMore + 'γ ' + author + 'πΌπ΄π½ππ°πΉπ΄ π³π΄ π³πΈπ΅ππ²πΈπΎπ½π’   γ\n' + randomID(32)), true).catch(_ => _)
  m.reply('*πΌπ΄π½ππ°πΉπ΄ π΄π½ππΈπ°π³πΎ π²πΎπππ΄π²ππ°πΌπ΄π½ππ΄ [β]*')
}
handler.help = ['.broadcast <mensaje>', 'bc']
handler.tags = ['owner menu']
handler.command = /^(broadcast|bc)$/i

handler.owner = true

export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

const randomID = length => randomBytes(Math.ceil(length * .5)).toString('hex').slice(0, length)