import { canLevelUp } from '../lib/levelling.js'
export function before(m) {
    let user = global.db.data.users[m.sender]
    if (!user.autolevelup)
        return !0
    let before = user.level * 1
    while (canLevelUp(user.level, user.exp, global.multiplier))
        user.level++

    if (before !== user.level) {
        m.reply(`
𝙵𝙴𝙻𝙸𝙲𝙸𝚃𝙰𝙲𝙸𝙾𝙽𝙴𝚂,🥳 𝙷𝙰𝚂 𝚂𝚄𝙱𝙸𝙳𝙾 𝙳𝙴 𝙽𝙸𝚅𝙴𝙻!!, 𝚂𝙸𝙶𝚄𝙴 𝙰𝚂𝙸✨🎖️
*${before}* -> *${user.level}*
𝚄𝚂𝙴 *.profile* 😉𝙿𝙰𝚁𝙰 𝚅𝙴𝚁𝙸𝙵𝙸𝙲𝙰𝚁 𝚂𝚄 𝙽𝙸𝚅𝙴𝙻 ☑
	`.trim())
    }
}
export const disabled = true