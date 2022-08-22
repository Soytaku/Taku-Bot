let handler = async (m, { conn, participants, args }) => {
    const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/avatar_contact.png'
    const { isBanned, welcome, detect, sWelcome, sBye, sPromote, sDemote, antiLink, delete: del } = global.db.data.chats[m.chat]
    const groupAdmins = participants.filter(p => p.admin)
    const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
   
    let text = args.join` `
    let oi = `*𝙈𝙀𝙉𝙎𝘼𝙅𝙀:* ${text}`
        let textt = `
「* 𝐈𝐍𝐕𝐎𝐂𝐀𝐍𝐃𝐎 𝐀𝐃𝐌𝐈𝐍𝐒 *」

${oi}

${listAdmin}


`.trim()
       const ownernya = [`${m.chat.split`-`[0]}@s.whatsapp.net`]
        let mentionedJid = groupAdmins.concat(ownernya)
      
        conn.sendFile(m.key.remoteJid, pp, 'pp.jpg', textt, m, false, { contextInfo: { mentionedJid } })
    }

handler.help = ['admins']
handler.tags = ['grupos']

handler.command = /^(admins|@admins)$/i

handler.group = true

export default handler
