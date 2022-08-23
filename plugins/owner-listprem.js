

let handler = async (m, { conn }) => {
  let prem = global.prems.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)
  conn.reply(m.chat, `V͇̿I͇̿P͇̿「 *𝙻𝙸𝚂𝚃𝙰 𝙳𝙴 𝚄𝚂𝚄𝙰𝚁𝙸𝙾𝚂 𝙿𝚁𝙴𝙼𝙸𝚄𝙼" 」V͇̿I͇̿P͇̿
` + prem.map(v => '- @' + v.replace(/@.+/, '')).join`\n`, m, { contextInfo: { mentionedJid: prem } })
}
handler.help = ['premlist']
handler.tags = ['owner menu']
handler.command = /^(listprem|premlist)$/i
handler.owner = true

export default handler
