let handler = async (m, { conn, text }) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
    else who = m.chat
    if (!who) throw `*[β] π΄ππΈπππ΄ππ° π° π»π° πΏπ΄πππΎπ½π°`
    if (!global.prems.includes(who.split`@`[0])) throw '*[β] π΄π» π½πΎ π΄π πΏππ΄πΌπΈππΌ'
    let index = global.prems.findIndex(v => (v.replace(/[^0-9]/g, '') + '@s.whatsapp.net') === (who.replace(/[^0-9]/g, '') + '@s.whatsapp.net'))
    global.prems.splice(index, 1)
    conn.reply(m.chat, `@${who.split('@')[0]} *[β] ππ° π½πΎ π΄π πΏππ΄πΌπΈππΌ`, m, {
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
