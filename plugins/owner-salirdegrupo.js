let handler = async (m, { conn, args, command }) => {
	let group = m.chat
        await m.reply('*π€ππ°π³πΈπΎπ π° ππΎπ³πΎπ (β§Οβ¦)γ*', m.chat) 
        await  conn.groupLeave(group)
        }
handler.help = ['leave']
handler.tags = ['owner menu']
handler.command = /^(out|leavegc)$/i

handler.owner = true

export default handler

