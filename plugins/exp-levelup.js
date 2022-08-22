import { canLevelUp, xpRange } from '../lib/levelling.js'
import { levelup } from '../lib/canvas.js'

let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender]
    if (!canLevelUp(user.level, user.exp, global.multiplier)) {
        let { min, xp, max } = xpRange(user.level, global.multiplier)
        throw `
Nivel *${user.level} (${user.exp - min}/${xp})*
𝚃𝚄 𝚇𝙿 𝙰𝙲𝚃𝚄𝙰𝙻: *${max - user.exp}*  𝙽𝙾 𝙴𝚂 𝚂𝚄𝙵𝙸𝙲𝙸𝙴𝙽𝚃𝙴 𝙿𝙰𝚁𝙰 𝚂𝚄𝙱𝙸𝚁 𝙳𝙴 𝙽𝙸𝚅𝙴𝙻 [✘], 𝚂𝙴 𝙼𝙰𝚂 𝙰𝙲𝚃𝙸𝚅𝙾 𝙲𝙾𝙽 𝚃𝙰𝙺𝚄-𝙱𝙾𝚃-𝚇𝙳 𝚈 𝚅𝚄𝙴𝙻𝚅𝙰 𝙸𝙽𝚃𝙴𝙽𝚃𝙰𝚁𝙻𝙾...
`.trim()
    }
    let before = user.level * 1
    while (canLevelUp(user.level, user.exp, global.multiplier)) user.level++
    if (before !== user.level) {
        let teks = `*𝙵𝙴𝙻𝙸𝙲𝙸𝙳𝙰𝙳𝙴𝚂 :D ${conn.getName(m.sender)} 𝙰𝚂 𝚂𝚄𝙱𝙸𝙳𝙾 𝙳𝙴 𝙽𝙸𝚅𝙴𝙻🥳🎖*️`
        let str = `
${teks} 
🥉 *𝙽𝙸𝚅𝙴𝙻 𝙰𝙽𝚃𝙴𝚁𝙸𝙾𝚁:* ${before}
🥇 *𝙽𝚄𝙴𝚅𝙾 𝙽𝙸𝚅𝙴𝙻:* ${user.level}
🕰️ *𝙷𝙾𝚁𝙰:* ${new Date().toLocaleString('id-ID')}
*𝙲𝚄𝙰𝙽𝚃𝙾 𝙼𝙰𝚂 𝙸𝙽𝚃𝙴𝚁𝙰𝚃𝚄𝙴𝚂🗣️ 𝙲𝙾𝙽 𝚃𝙰𝙺𝚄-𝙱𝙾𝚃-𝙼𝙳🤖, 𝙼𝙰𝚈𝙾𝚁 𝚇𝙿🙌🏻 𝙶𝙰𝙽𝙰𝚁𝙰𝚂 𝚈 𝚂𝚄𝙱𝙸𝚁𝙰𝚂 𝙳𝙴 𝙽𝙸𝚅𝙴𝙻🥇*
`.trim()
        try {
            const img = await levelup(teks, user.level)
            conn.sendFile(m.chat, img, 'levelup.jpg', str, m)
        } catch (e) {
            m.reply(str)
        }
    }
}


handler.help = ['levelup <sube de nivel>']
handler.tags = ['exp y limites']

handler.command = /^level(|up)$/i

export default handler