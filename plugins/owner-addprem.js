let handler = async (m, { conn, text }) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
    else who = m.chat
    if (!who) throw `*[β] π΄ππΈπππ΄ππ° π°π»π° πΏπ΄πππΎπ½π°*`
    if (global.prems.includes(who.split`@`[0])) throw '*[β] π΄π» ππ° π΄π πΏππ΄πΌπΈππΌ*'
    global.prems.push(`${who.split`@`[0]}`)
    conn.reply(m.chat, `@${who.split`@`[0]} *[β] π°π·πΎππ° π΄π πΏππ΄πΌπΈππΌ, πΏππ΄π³π΄ πππ°π π΄π» π±πΎπ πΈπ»πΈπΌπΈππ°π³π°πΌπ΄π½ππ΄π*`, m, {
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
