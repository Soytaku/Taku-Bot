
import { toDataURL } from 'qrcode'

let handler = async (m, { conn, text }) => conn.sendFile(m.chat, await toDataURL(text.slice(0, 2048), { scale: 8 }), 'qrcode.png', '¯\\*😜𝙰𝚀𝚄𝙸 𝚃𝙸𝙴𝙽𝙴𝚂 𝚃𝚄 𝚀𝚁 𝙲𝙾𝙳𝙴*', m)

handler.help = ['Qr <texto>']
handler.tags = ['herramientas']
handler.command = /^qr(code)?$/i


export default handler