
const items = [
    'limit', 'exp',
]
let confirmation = {}
async function handler(m, { conn, args, usedPrefix, command }) {
    if (confirmation[m.sender]) return m.reply('*π΄πππ°π π°π²πΈπ΄π½π³πΎ ππ½π° πππ°π½ππ΅π΄ππ΄π½π²πΈπ°πΈ*')
    let user = global.db.data.users[m.sender]
    const item = items.filter(v => v in user && typeof user[v] == 'number')
    let lol = `*πΏπ°ππ° πππ°π½ππ΅π΄ππΈπ π΄ππΏ πΎ π»πΈπΌπΈππ΄π π΄ππ²ππΈπ±π΄:* 
*${usedPrefix + command}*  [tipo] [cantidad] [@user]
π *π΄πΉπ΄πΌπΏπ»πΎ* : ${usedPrefix + command} EXP 10 @USER
*π­π»πΈπππ° π³π΄ πππ°π½ππ΅π΄ππ΄π½π²πΈπ°π π³πΈππΏπΎπ½πΈπ±π»π΄π:* 
βββββββββββββββ
β’ *limit* = limites
β’ *exp* = experiencia de uso 
βββββββββββββββ
`.trim()
    const type = (args[0] || '').toLowerCase()
    if (!item.includes(type)) return m.reply(lol)
    const count = Math.min(Number.MAX_SAFE_INTEGER, Math.max(1, (isNumber(args[1]) ? parseInt(args[1]) : 1))) * 1
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : args[2] ? (args[2].replace(/[@ .+-]/g, '') + '@s.whatsapp.net') : ''
    if (!who) return m.reply('π΄ππΈπππ΄ππ° π°π» ππππ°ππΈπΎ')
    if (!(who in global.db.data.users)) return m.reply(`π»πΎ ππ΄π½ππΈπΌπΎπ, π΄π» ππππ°ππΈπΎ ${who} π½πΎ π΄πππ° π΄π½ π΄π» π±πΎπ.`)
    if (user[type] * 1 < count) return m.reply(`*[βππππβ] ππ π²π°π½ππΈπ³π°π³ π³π΄* *${type}* *π½πΎ π΄π πππ΅πΈπ²πΈπ΄π½ππ΄ πΏπ°ππ° πππ°π½π΅π΄ππΈπ* `)
    let confirm = `
πΉΒΏEstΓ‘ seguro de que desea transferir *${count}* ${type} a  *@${(who || '').replace(/@s\.whatsapp\.net/g, '')}* ? 
Tienes  *60* s
`.trim()
    let c = '@TAKU-BOT-XD2022'
    conn.sendButton(m.chat, confirm, c, null, [['SI[β]'], ['NO[β]']], m, { mentions: [who] })
    confirmation[m.sender] = {
        sender: m.sender,
        to: who,
        message: m,
        type,
        count,
        timeout: setTimeout(() => (m.reply('*[β] ππ΄ π°π²π°π±πΎ π΄π» ππΈπ΄πΌπΏπΎβ²οΈ*'), delete confirmation[m.sender]), 60 * 1000)
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
        if (previous > user[type] * 1 && _previous < _user[type] * 1) m.reply(`*[β] πππ°π½π΅π΄ππ΄π½π²πΈπ° π΄ππΈππΎππ°πΈ* π³π΄ \n\n*${count}* *${type}*  π° @${(to || '').replace(/@s\.whatsapp\.net/g, '')} [β] `, null, { mentions: [to] })
        else {
            user[type] = previous
            _user[type] = _previous
            m.reply(`*[β] π»πΎ ππ΄π½ππΈπΌπΎπ πΎπ²ππππΈπΎ ππ½ π΄πππΎπ π°π» πππ°π½ππ΅π΄ππΈππ΅* *${count}* ${type} πΏπ°ππ° *@${(to || '').replace(/@s\.whatsapp\.net/g, '')}* [β]`, null, { mentions: [to] })
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