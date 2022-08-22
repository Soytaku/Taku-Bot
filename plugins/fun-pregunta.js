let handler = async (m, { command, usedPrefix, text }) => { 
if (!text) throw `${mg}𝙴𝚂𝙲𝚁𝙸𝙱𝙰 𝚄𝙽𝙰 𝙿𝚁𝙴𝙶𝚄𝙽𝚃𝙰 𝙿𝙰𝚁𝙰 𝚂𝙴𝚁 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙸𝙳𝙰\n𝙀𝙅𝙀𝙈𝙋𝙇𝙊\n*${usedPrefix + command} Hoy va llover?`   
let pre = `
┌──「𝙋𝙍𝙀𝙂𝙐𝙉𝙏𝘼 」─
├❏𝙋𝙍𝙀𝙂𝙐𝙉𝙏𝘼 | 𝙌𝙐𝙀𝙎𝙏𝙄𝙊𝙉
⁉️ 𝙋𝙍𝙀𝙂𝙐𝙉𝙏𝘼
├❏───ׂ─ׂ─ׂ─ׂ─
├❏${text}
├❏✅𝙍𝙀𝙎𝙋𝙐𝙀𝙎𝙏𝘼 | 𝙍𝙀𝙎𝙋𝙊𝙉𝙎𝙀 
├❏───ׂ─ׂ─ׂ─ׂ─
├❏${['Si','Tal vez sí','Tal vez no','Posiblemente','Probablemente no','Probablemente no','Puede ser','No puede ser','No','Imposible','Depende','Creo que si','Creo que no','Claro no lo dudes','Hasta yo lo dudo','No tengo palabras jajaja','Es altamente posible','Es bajamente posible'].getRandom()}*
├❏${vs}
└────ׂ─ׂ─ׂ─ׂ──`.trim() 

conn.sendHydrated(m.chat, pre, wm, null, md, '𝚃𝙰𝙺𝚄-𝙱𝙾𝚃', null, null, [
['𝙾𝚃𝚁𝙰 𝚅𝙴𝚉🙃', `${usedPrefix + command} ${text}`],
], m, null, m.mentionedJid ? {
mentions: m.mentionedJid
} : {}) }
  
handler.help = ['pregunta <texto>?']
handler.tags = ['kerang']
handler.command = /^pregunta|preguntas|apakah$/i  
handler.limit = 1
export default handler
