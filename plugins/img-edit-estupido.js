import { decryptGroupSignalProto } from "@adiwajshing/baileys"

let handler = async (m, { conn, args }) => {
let text = args.slice(1).join(' ')
  let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  conn.sendFile(m.chat, global.API('https://some-random-api.ml', '/canvas/its-so-stupid', {
    avatar: await conn.profilePictureUrl(who).catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'),
    dog: text || 'πππ’ ππππππππ :v'
  }), 'iss.png', 'πΌππ π΄ππππΏπΈπ³πΎπΉ', m)
}

handler.help = ['estupido']
handler.tags = ['img edit']

handler.command = ['estupido']

export default handler