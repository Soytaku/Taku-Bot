let handler = async (m, { conn }) => {
    let txt = ''
    for (let [jid, chat] of Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats)) txt += `${await conn.getName(jid)}\n🪪${jid} [${chat?.metadata?.read_only ? 'Left' : 'Joined'}]\n\n`
    m.reply(`*𝙷𝙾𝙻𝙰👋 𝚄𝚂𝚄𝙰𝚁𝙸𝙾,👤 𝙰𝚀𝚄𝙸 𝚃𝙸𝙴𝙽𝙴𝚂 𝙻𝙰 𝙻𝙸𝚂𝚃𝙰 𝙳𝙴 𝙶𝚁𝚄𝙿𝙾𝚂 𝙳𝙴𝙻 𝙱𝙾𝚃🤖*
${txt}
`.trim())
}
handler.help = ['groups', 'grouplist']
handler.tags = ['owner menu']
handler.command = /^(group(s|list))$/i
handler.owner = true

export default handler