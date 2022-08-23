let handler = async (m, { conn, text, participants, isAdmin, isOwner }) => {
    let users = participants.map(u => u.id).filter(v => v !== conn.user.jid)
    m.reply(`𝙼𝙴𝙽𝚂𝙰𝙹𝙴: ${text ? `${text}\n` : ''}
    
┌─「 𝐈𝐍𝑽𝐎𝐂𝐀𝐍𝐃𝐎 𝐀𝐋 𝐆𝐑𝐔𝐏𝐎 」\n` + users.map(v => '│ঔৣ͜͡➳✪@' + v.replace(/@.+/, '')).join`\n` + '\n└────', null, {
mentions: users
    })
}

handler.help = ['invocar']
handler.tags = ['grupos']
handler.command = ['invocar', 'tagall']
handler.admin = true
handler.group = true

export default handler
