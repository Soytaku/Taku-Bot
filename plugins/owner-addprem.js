let handler = async (m, { conn, text }) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
    else who = m.chat
    if (!who) throw `*[❗] 𝙴𝚃𝙸𝚀𝚄𝙴𝚃𝙰 𝙰𝙻𝙰 𝙿𝙴𝚁𝚂𝙾𝙽𝙰*`
    if (global.prems.includes(who.split`@`[0])) throw '*[❗] 𝙴𝙻 𝚈𝙰 𝙴𝚂 𝙿𝚁𝙴𝙼𝙸𝚄𝙼*'
    global.prems.push(`${who.split`@`[0]}`)
    conn.reply(m.chat, `@${who.split`@`[0]} *[❗] 𝙰𝙷𝙾𝚁𝙰 𝙴𝚂 𝙿𝚁𝙴𝙼𝙸𝚄𝙼, 𝙿𝚄𝙴𝙳𝙴 𝚄𝚂𝙰𝚁 𝙴𝙻 𝙱𝙾𝚃 𝙸𝙻𝙸𝙼𝙸𝚃𝙰𝙳𝙰𝙼𝙴𝙽𝚃𝙴😉*`, m, {
        contextInfo: {
            mentionedJid: [who]
        }
    })

}
handler.help = ['addprem [@user]']
handler.tags = ['owner menu']
handler.command = /^(add|tambah|\+)prem$/i

handler.rowner = true

export default handler
