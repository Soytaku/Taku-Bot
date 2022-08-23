let handler = async (m, { conn, text }) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
    else who = m.chat
    if (!who) throw `*[❗] 𝙴𝚃𝙸𝚀𝚄𝙴𝚃𝙰 𝙰 𝙻𝙰 𝙿𝙴𝚁𝚂𝙾𝙽𝙰`
    if (!global.prems.includes(who.split`@`[0])) throw '*[❗] 𝙴𝙻 𝙽𝙾 𝙴𝚂 𝙿𝚁𝙴𝙼𝙸𝚄𝙼'
    let index = global.prems.findIndex(v => (v.replace(/[^0-9]/g, '') + '@s.whatsapp.net') === (who.replace(/[^0-9]/g, '') + '@s.whatsapp.net'))
    global.prems.splice(index, 1)
    conn.reply(m.chat, `@${who.split('@')[0]} *[❗] 𝚈𝙰 𝙽𝙾 𝙴𝚂 𝙿𝚁𝙴𝙼𝙸𝚄𝙼`, m, {
        contextInfo: {
            mentionedJid: [who]
        }
    })

}
handler.help = ['delprem [@user]']
handler.tags = ['owner menu']
handler.command = /^(remove|hapus|-|del)prem$/i

handler.owner = true

export default handler
