let handler = async (m, { conn, args }) => {
 await conn.groupUpdateDescription(m.chat, `${args.join(" ")}`);
  m.reply('*[β] π»π° π³π΄ππ²ππΈπΏπ²πΈπΎπ½ π³π΄π» πΆπππΏπΎ π΅ππ΄ π²π°πΌπ±πΈπ°π³π°, π²πΎπππ΄π²ππ°πΌπ΄π½ππ΄*')
}

handler.help = ['descripcion <texto>']
handler.tags = ['grupos']
handler.command = /^descripcion$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false
handler.register = false
handler.admin = true
handler.botAdmin = true

export default handler