let handler = async (m, { text, usedPrefix }) => {
    let salah = `*𝙷𝙾𝙻𝙰👋, 𝚀𝚄𝙸𝙴𝚁𝙴𝚂 𝙹𝚄𝙶𝙰𝚁 𝙿𝙸𝙴𝙳𝚁𝙰, 𝙿𝙰𝙿𝙴𝙻, 𝚃𝙸𝙹𝙴𝚁𝙰?*\n\n*_𝙾𝙿𝙲𝙸𝙾𝙽𝙴𝚂 𝙳𝙸𝚂𝙿𝙾𝙽𝙸𝙱𝙻𝙴𝚂:_*\n*_piedra, papel o tijera_*\n\n*_${usedPrefix}ppt tijera_*\n\n*_𝚄𝚂𝙴 𝙻𝙰𝚂 𝙾𝙿𝙲𝙸𝙾𝙽𝙴𝚂 𝙴𝙽 𝙼𝙸𝙽𝚄𝚂𝙲𝚄𝙻𝙰 𝙲𝙾𝙼𝙾 𝚂𝙴 𝙸𝙽𝙳𝙸𝚃𝙰 𝙴𝙽 𝙴𝙻 𝙴𝙹𝙴𝙼𝙿𝙻𝙾, 𝙽𝙾 𝚄𝚂𝙴𝚂 _ 𝙽𝙸 𝙻𝙾𝚂 * 𝙿𝙰𝚁𝙰 𝚀𝚄𝙴 𝙴𝙻 𝙱𝙾𝚃 𝙻𝙾 𝙳𝙴𝚃𝙴𝙲𝚃𝙴 𝙲𝙾𝚁𝚁𝙴𝙲𝚃𝙰𝙼𝙴𝙽𝚃𝙴_*\n\n_©${author}` 
    if (!text) throw salah
    var astro = Math.random()

    if (astro < 0.34) {
        astro = 'piedra' 
    } else if (astro > 0.34 && astro < 0.67) {
        astro = 'tijera' 
    } else {
        astro = 'papel'
    }

    if (text == astro) {
        m.reply(`*_[❗] 𝙴𝙼𝙿𝙰𝚃𝙴_*\n\n*👉🏻 𝚄𝚂𝚃𝙴𝙳: ${text}*\n*👉🏻 𝙴𝙻 𝙱𝙾𝚃: ${astro}*`) 
        } else if (text == 'piedra') {
            if (astro == 'papel') {
                global.DATABASE._data.users[m.sender].uang += 1000
                m.reply(`*🥳 𝚃𝚄 𝙶𝙰𝙽𝙰𝚂! 🎉*\n\n*👉🏻 𝚄𝚂𝚃𝙴𝙳: ${text}*\n*👉🏻 𝙴𝙻 𝙱𝙾𝚃: ${astro}*`)
            } else {
                m.reply(`*🤡 𝚃𝚄 𝙿𝙸𝙴𝚁𝙳𝙴𝚂! ❌*\n\n*👉🏻 𝚄𝚂𝚃𝙴𝙳: ${text}*\n*👉🏻 𝙴𝙻 𝙱𝙾𝚃: ${astro}*`)
            }
        } else if (text == 'tijera') {
        if (astro == 'papel') {
            global.DATABASE._data.users[m.sender].uang += 1000
            m.reply(`*🥳 𝚃𝚄 𝙶𝙰𝙽𝙰𝚂! 🎉*\n\n*👉🏻 𝚄𝚂𝚃𝙴𝙳: ${text}*\n*👉🏻 𝙴𝙻 𝙱𝙾𝚃: ${astro}*`)
        } else {
            m.reply(`*🤡 𝚃𝚄 𝙿𝙸𝙴𝚁𝙳𝙴𝚂! ❌*\n\n*👉🏻 𝚄𝚂𝚃𝙴𝙳: ${text}*\n*👉🏻 𝙴𝙻 𝙱𝙾𝚃: ${astro}*`)
        }
            } else if (text == 'tijera') {
        if (astro == 'papel') {
            global.DATABASE._data.users[m.sender].uang += 1000
            m.reply(`*🥳 𝚃𝚄 𝙶𝙰𝙽𝙰𝚂! 🎉*\n\n*👉🏻 𝚄𝚂𝚃𝙴𝙳: ${text}*\n*👉🏻 𝙴𝙻 𝙱𝙾𝚃: ${astro}*`)
        } else {
            m.reply(`*🤡 𝚃𝚄 𝙿𝙸𝙴𝚁𝙳𝙴𝚂! ❌*\n\n*👉🏻 𝚄𝚂𝚃𝙴𝙳: ${text}*\n*👉🏻 𝙴𝙻 𝙱𝙾𝚃: ${astro}*`)
        }
        } else if (text == 'papel') {
        if (astro == 'piedra') {
            global.DATABASE._data.users[m.sender].uang += 1000
            m.reply(`*🥳 𝚃𝚄 𝙶𝙰𝙽𝙰𝚂! 🎉*\n\n*👉🏻 𝚄𝚂𝚃𝙴𝙳: ${text}*\n*👉🏻 𝙴𝙻 𝙱𝙾𝚃: ${astro}*`)
        } else {
            m.reply(`*🤡 𝚃𝚄 𝙿𝙸𝙴𝚁𝙳𝙴𝚂! ❌*\n\n*👉🏻 𝚄𝚂𝚃𝙴𝙳: ${text}*\n*👉🏻 𝙴𝙻 𝙱𝙾𝚃: ${astro}*`)
        }
        } else if (text == 'piedra') {
        if (astro == 'tijera') {
            global.DATABASE._data.users[m.sender].uang += 1000
            m.reply(`*🥳 𝚃𝚄 𝙶𝙰𝙽𝙰𝚂! 🎉*\n\n*👉🏻 𝚄𝚂𝚃𝙴𝙳: ${text}*\n*👉🏻 𝙴𝙻 𝙱𝙾𝚃: ${astro}*`)
        } else {
            m.reply(`*🤡 𝚃𝚄 𝙿𝙸𝙴𝚁𝙳𝙴𝚂! ❌*\n\n*👉🏻 𝚄𝚂𝚃𝙴𝙳: ${text}*\n*👉🏻 𝙴𝙻 𝙱𝙾𝚃: ${astro}*`)
        }
        } else {
        throw salah
    }
}
handler.help = ['ptt (piedra papel o tijeras)']
handler.tags = ['juegos']
handler.command = /^(ppt)$/i
handler.register = false
handler.limit = false

export default handler