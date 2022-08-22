
const items = [
    'limit', 'exp',
]
let confirmation = {}
async function handler(m, { conn, args, usedPrefix, command }) {
    if (confirmation[m.sender]) return m.reply('*𝙴𝚂𝚃𝙰𝚂 𝙰𝙲𝙸𝙴𝙽𝙳𝙾 𝚄𝙽𝙰 𝚃𝚁𝙰𝙽𝚂𝙵𝙴𝚁𝙴𝙽𝙲𝙸𝙰💸*')
    let user = global.db.data.users[m.sender]
    const item = items.filter(v => v in user && typeof user[v] == 'number')
    let lol = `*𝙿𝙰𝚁𝙰 𝚃𝚁𝙰𝙽𝚂𝙵𝙴𝚁𝙸𝚁 𝙴𝚇𝙿 𝙾 𝙻𝙸𝙼𝙸𝚃𝙴𝚂 𝙴𝚂𝙲𝚁𝙸𝙱𝙴:* 
*${usedPrefix + command}*  [tipo] [cantidad] [@user]
📌 *𝙴𝙹𝙴𝙼𝙿𝙻𝙾* : ${usedPrefix + command} EXP 10 @USER
*🍭𝙻𝙸𝚂𝚃𝙰 𝙳𝙴 𝚃𝚁𝙰𝙽𝚂𝙵𝙴𝚁𝙴𝙽𝙲𝙸𝙰𝚂 𝙳𝙸𝚂𝙿𝙾𝙽𝙸𝙱𝙻𝙴𝚂:* 
┌──────────────
▢ *limit* = limites
▢ *exp* = experiencia de uso 
└──────────────
`.trim()
    const type = (args[0] || '').toLowerCase()
    if (!item.includes(type)) return m.reply(lol)
    const count = Math.min(Number.MAX_SAFE_INTEGER, Math.max(1, (isNumber(args[1]) ? parseInt(args[1]) : 1))) * 1
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : args[2] ? (args[2].replace(/[@ .+-]/g, '') + '@s.whatsapp.net') : ''
    if (!who) return m.reply('𝙴𝚃𝙸𝚀𝚄𝙴𝚃𝙰 𝙰𝙻 𝚄𝚂𝚄𝙰𝚁𝙸𝙾')
    if (!(who in global.db.data.users)) return m.reply(`𝙻𝙾 𝚂𝙴𝙽𝚃𝙸𝙼𝙾𝚂, 𝙴𝙻 𝚄𝚂𝚄𝙰𝚁𝙸𝙾 ${who} 𝙽𝙾 𝙴𝚂𝚃𝙰 𝙴𝙽 𝙴𝙻 𝙱𝙾𝚃.`)
    if (user[type] * 1 < count) return m.reply(`*[❗𝐈𝐍𝐅𝐎❗] 𝚃𝚄 𝙲𝙰𝙽𝚃𝙸𝙳𝙰𝙳 𝙳𝙴* *${type}* *𝙽𝙾 𝙴𝚂 𝚂𝚄𝙵𝙸𝙲𝙸𝙴𝙽𝚃𝙴 𝙿𝙰𝚁𝙰 𝚃𝚁𝙰𝙽𝙵𝙴𝚁𝙸𝚁* `)
    let confirm = `
🔹¿Está seguro de que desea transferir *${count}* ${type} a  *@${(who || '').replace(/@s\.whatsapp\.net/g, '')}* ? 
Tienes  *60* s
`.trim()
    let c = '@TAKU-BOT-XD2022'
    conn.sendButton(m.chat, confirm, c, null, [['SI[✔]'], ['NO[✘]']], m, { mentions: [who] })
    confirmation[m.sender] = {
        sender: m.sender,
        to: who,
        message: m,
        type,
        count,
        timeout: setTimeout(() => (m.reply('*[✘] 𝚂𝙴 𝙰𝙲𝙰𝙱𝙾 𝙴𝙻 𝚃𝙸𝙴𝙼𝙿𝙾⏲️*'), delete confirmation[m.sender]), 60 * 1000)
    }
}

handler.before = async m => {
    if (m.isBaileys) return
    if (!(m.sender in confirmation)) return
    if (!m.text) return
    let { timeout, sender, message, to, type, count } = confirmation[m.sender]
    if (m.id === message.id) return
    let user = global.db.data.users[sender]
    let _user = global.db.data.users[to]
    if (/no?/g.test(m.text.toLowerCase())) {
        clearTimeout(timeout)
        delete confirmation[sender]
        return m.reply('Cancelado')
    }
    if (/si?/g.test(m.text.toLowerCase())) {
        let previous = user[type] * 1
        let _previous = _user[type] * 1
        user[type] -= count * 1
        _user[type] += count * 1
        if (previous > user[type] * 1 && _previous < _user[type] * 1) m.reply(`*[✔] 𝚃𝚁𝙰𝙽𝙵𝙴𝚁𝙴𝙽𝙲𝙸𝙰 𝙴𝚇𝙸𝚃𝙾𝚂𝙰💸* 𝙳𝙴 \n\n*${count}* *${type}*  𝙰 @${(to || '').replace(/@s\.whatsapp\.net/g, '')} [✔] `, null, { mentions: [to] })
        else {
            user[type] = previous
            _user[type] = _previous
            m.reply(`*[❗] 𝙻𝙾 𝚂𝙴𝙽𝚃𝙸𝙼𝙾𝚂 𝙾𝙲𝚄𝚁𝚁𝙸𝙾 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝙰𝙻 𝚃𝚁𝙰𝙽𝚂𝙵𝙴𝚁𝙸𝚁💵* *${count}* ${type} 𝙿𝙰𝚁𝙰 *@${(to || '').replace(/@s\.whatsapp\.net/g, '')}* [✘]`, null, { mentions: [to] })
        }
        clearTimeout(timeout)
        delete confirmation[sender]
    }
}

handler.help = ['transferir <limit> <cantidad> <@user>']
handler.tags = ['exp y limites']
handler.command = ['transferir', 'transfer', 'darlimit'] 

handler.disabled = false

export default handler

function special(type) {
    let b = type.toLowerCase()
    let special = (['common', 'uncommon', 'mythic', 'legendary', 'pet'].includes(b) ? ' Crate' : '')
    return special
}

function isNumber(x) {
    return !isNaN(x)
}