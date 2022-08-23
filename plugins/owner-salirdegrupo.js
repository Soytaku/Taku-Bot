let handler = async (m, { conn, args, command }) => {
	let group = m.chat
        await m.reply('*🤖👋𝙰𝙳𝙸𝙾𝚂 𝙰 𝚃𝙾𝙳𝙾𝚂 (≧ω≦)ゞ*', m.chat) 
        await  conn.groupLeave(group)
        }
handler.help = ['leave']
handler.tags = ['owner menu']
handler.command = /^(out|leavegc)$/i

handler.owner = true

export default handler

