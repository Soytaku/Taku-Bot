let handler = m => m
handler.before = m => {
  let user = global.DATABASE.data.users[m.sender]
  if (user.afk > -1) {
    m.reply(`
*[❗] 𝙳𝙴𝙹𝙰𝚂𝚃𝙴 𝙳𝙴 𝙴𝚂𝚃𝙰𝚁 𝙸𝙽𝙰𝙲𝚃𝙸𝚅𝙾* (AFK)${user.afkReason ? ' ᴅᴇsᴘᴜᴇs ᴅᴇ ᴇsᴛᴀʀ ɪɴᴀᴄᴛɪᴠᴏ (AFK) ᴘᴏʀ ᴇʟ ᴍᴏᴛɪᴠᴏ: ' + user.afkReason : ''}_*

*_⌛ 𝚃𝚒𝚎𝚖𝚙𝚘 𝚍𝚎 𝚒𝚗𝚊𝚌𝚝𝚒𝚟𝚒𝚍𝚊𝚍*: ${clockString(new Date - user.afk)}_*
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
*[⚠️] 𝙽𝙾 𝙼𝙾𝙻𝙴𝚂𝚃𝙰𝚁*

*[❗𝐈𝐍𝐅𝐎 ❗] 𝙴𝙻 𝚄𝚂𝚄𝙰𝚁𝙸𝙾 𝙼𝙴𝙽𝙲𝙸𝙾𝙽𝙰𝙳𝙾 𝚂𝙴 𝙴𝙽𝙲𝚄𝙴𝙽𝚃𝚁𝙰 (AFK)*

* ⁞⁞⁞⁞⃙⃯⃕⃟⃤̶̵̵⃯̱̱̲͞➺_${reason ? 'Motivo de inactividad: ' + reason : 'Motivo de inactividad: No se especifico ningun motivo'}*

*⌛ 𝙲𝚊𝚗𝚝𝚒𝚍𝚊𝚍 𝚍𝚎 𝚝𝚒𝚎𝚖𝚙𝚘 𝚝𝚛𝚊𝚗𝚜𝚌𝚞𝚛𝚛𝚒𝚍𝚊:* ${clockString(new Date - afkTime)}*
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
