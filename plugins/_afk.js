let handler = m => m
handler.before = m => {
  let user = global.DATABASE.data.users[m.sender]
  if (user.afk > -1) {
    m.reply(`
*[β] π³π΄πΉπ°πππ΄ π³π΄ π΄πππ°π πΈπ½π°π²ππΈππΎ* (AFK)${user.afkReason ? ' α΄α΄sα΄α΄α΄s α΄α΄ α΄sα΄α΄Κ ΙͺΙ΄α΄α΄α΄Ιͺα΄ α΄ (AFK) α΄α΄Κ α΄Κ α΄α΄α΄Ιͺα΄ α΄: ' + user.afkReason : ''}_*

*_β ππππππ ππ πππππππππππ*: ${clockString(new Date - user.afk)}_*
`.trim())
    user.afk = -1
    user.afkReason = ''
  }
  let jids = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
  for (let jid of jids) {
    let user = global.DATABASE.data.users[jid]
    if (!user) continue
    let afkTime = user.afk
    if (!afkTime || afkTime < 0) continue
    let reason = user.afkReason || ''
    m.reply(`
*[β οΈ] π½πΎ πΌπΎπ»π΄πππ°π*

*[βππππ β] π΄π» ππππ°ππΈπΎ πΌπ΄π½π²πΈπΎπ½π°π³πΎ ππ΄ π΄π½π²ππ΄π½πππ° (AFK)*

*Β ββββββ―βββ€β―ΜΆΜ΅Μ±Μ΅Μ±Μ²ΝβΊ_${reason ? 'Motivo de inactividad: ' + reason : 'Motivo de inactividad: No se especifico ningun motivo'}*

*β π²πππππππ ππ ππππππ ππππππππππππ:* ${clockString(new Date - afkTime)}*
`.trim())
  }
  return true
}



export default handler

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
