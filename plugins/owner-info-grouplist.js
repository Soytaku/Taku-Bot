let handler = async (m, { conn }) => {
    let txt = ''
    for (let [jid, chat] of Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats)) txt += `${await conn.getName(jid)}\nπͺͺ${jid} [${chat?.metadata?.read_only ? 'Left' : 'Joined'}]\n\n`
    m.reply(`*π·πΎπ»π°π ππππ°ππΈπΎ,π€ π°πππΈ ππΈπ΄π½π΄π π»π° π»πΈπππ° π³π΄ πΆπππΏπΎπ π³π΄π» π±πΎππ€*
${txt}
`.trim())
}
handler.help = ['groups', 'grouplist']
handler.tags = ['owner menu']
handler.command = /^(group(s|list))$/i
handler.owner = true

export default handler