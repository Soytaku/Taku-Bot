let handler = async (m, { conn, text, isROwner, isOwner }) => {
if (text) {
global.db.data.chats[m.chat].sBye = text
conn.sendHydrated(m.chat, `${eg} πππππππππ πππππππππππ [β]`, wm, null, md, 'ππππ-πππ', null, null, [
['ΰ¦ΰ§£Ν‘Νπ½πππ½ππ π ππ ππππππ', '/listmenu']
], m,)
} else throw `${iig}πππ΄ π»πΎ πππ΄ π΄πππ° π²πΎπ½ *"@"* πΏπ°ππ° π³π°π π»πΎπ ππΈπΆππΈπ΄π½ππ΄π ππΈπΆπ½πΈπ΅πΈπ²π°π³πΎπ:\n*β¨ @user (MenciΓ³n al usuario(a))*\n*β¨ @subject (Nombre de grupo)*\n*β¨ @desc (Description de grupo)*\n\nππππππππ πππ πππ *"@"* πππ πππππ ππππππ ππ πππ ππππ½πππππππ ππ ππππππππππ.`
}
handler.help = ['setbye <text>']
handler.tags = ['group']
handler.command = ['setbye'] 
handler.botAdmin = true
handler.admin = true
export default handler
