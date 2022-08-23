import { decryptGroupSignalProto } from "@adiwajshing/baileys"

let handler = async (m, { conn, args }) => {
let text = args.slice(1).join(' ')
  let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  conn.sendFile(m.chat, global.API('https://some-random-api.ml', '/canvas/its-so-stupid', {
    avatar: await conn.profilePictureUrl(who).catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'),
    dog: text || '𝚂𝚘𝚢 𝚎𝚜𝚝𝚞𝚙𝚒𝚍𝚘 :v'
  }), 'iss.png', '𝙼𝚄𝚈 𝙴𝚂𝚃𝚄𝙿𝙸𝙳𝙾😹', m)
}

handler.help = ['estupido']
handler.tags = ['img edit']

handler.command = ['estupido']

export default handler