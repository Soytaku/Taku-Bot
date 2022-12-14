import { randomBytes } from 'crypto'

let handler = async (m, { conn, text }) => {
  let groups = Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats && !chat.metadata?.read_only && !chat.metadata?.announce).map(v => v[0])
  let cc = text ? m : m.quoted ? await m.getQuotedObj() : false || m
  let teks = text ? text : cc.text
  conn.reply(m.chat, `π’π΄π½ππΈπ°π½π³πΎ πΌπ΄π½ππ°πΉπ΄ π³π΄ π³πΈπ΅ππ²πΈπΎπ½ π° ${groups.length} πΆπππΏπΎπ`, m)
  for (let id of groups) await conn.copyNForward(id, conn.cMod(m.chat, cc, /bc|broadcast/i.test(teks) ? teks : teks + '\n' + readMore + 'γπΌπ΄π½ππ°πΉπ΄ π³π΄ π³πΈπ΅ππ²πΈπΎπ½π£γ\n' + randomID(32)), true).catch(_ => _)
  m.reply('*πΌπ΄π½ππ°πΉπ΄ π΄π½ππΈπ°π³πΎ π²πΎπππ΄π²ππ°πΌπ΄π½ππ΄ [β]*')
}
handler.help = ['broadcastgroup <mensaje>', 'bcgc']
handler.tags = ['owner menu']
handler.command = /^(broadcast|bc)(group|grup|gc)$/i

handler.owner = true

export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

const randomID = length => randomBytes(Math.ceil(length * .5)).toString('hex').slice(0, length)
