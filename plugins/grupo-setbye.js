let handler = async (m, { conn, text, isROwner, isOwner }) => {
if (text) {
global.db.data.chats[m.chat].sBye = text
conn.sendHydrated(m.chat, `${eg} 𝐃𝐄𝐒𝐏𝐄𝐃𝐈𝐃𝐀 𝐂𝐎𝐍𝐅𝐈𝐆𝐔𝐑𝐀𝐃𝐀 [✓]`, wm, null, md, '𝐓𝐀𝐊𝐔-𝐁𝐎𝐓', null, null, [
['ঔৣ͜͡𝑽𝐎𝐋𝑽𝐄𝐑 𝐀 𝐋𝐀 𝐋𝐈𝐒𝐓𝐀📄', '/listmenu']
], m,)
} else throw `${iig}𝚄𝚂𝙴 𝙻𝙾 𝚀𝚄𝙴 𝙴𝚂𝚃𝙰 𝙲𝙾𝙽 *"@"* 𝙿𝙰𝚁𝙰 𝙳𝙰𝚁 𝙻𝙾𝚂 𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝚃𝙴𝚂 𝚂𝙸𝙶𝙽𝙸𝙵𝙸𝙲𝙰𝙳𝙾𝚂:\n*✨ @user (Mención al usuario(a))*\n*✨ @subject (Nombre de grupo)*\n*✨ @desc (Description de grupo)*\n\n𝐑𝐄𝐂𝐔𝐄𝐑𝐃𝐄 𝐐𝐔𝐄 𝐋𝐎𝐒 *"@"* 𝐋𝐎𝐒 𝐏𝐔𝐄𝐃𝐄 𝐎𝐌𝐈𝐓𝐈𝐑 𝐃𝐄 𝐒𝐄𝐑 𝐂𝐎𝐍𝑽𝐄𝐍𝐈𝐄𝐍𝐓𝐄 𝐀𝐋 𝐂𝐎𝐍𝐅𝐈𝐆𝐔𝐑𝐀𝐑.`
}
handler.help = ['setbye <text>']
handler.tags = ['group']
handler.command = ['setbye'] 
handler.botAdmin = true
handler.admin = true
export default handler
