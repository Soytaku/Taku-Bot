let handler = async (m, { text, usedPrefix }) => {
    let salah = `*π·πΎπ»π°π, πππΈπ΄ππ΄π πΉππΆπ°π πΏπΈπ΄π³ππ°, πΏπ°πΏπ΄π», ππΈπΉπ΄ππ°?*\n\n*_πΎπΏπ²πΈπΎπ½π΄π π³πΈππΏπΎπ½πΈπ±π»π΄π:_*\n*_piedra, papel o tijera_*\n\n*_${usedPrefix}ppt tijera_*\n\n*_πππ΄ π»π°π πΎπΏπ²πΈπΎπ½π΄π π΄π½ πΌπΈπ½πππ²ππ»π° π²πΎπΌπΎ ππ΄ πΈπ½π³πΈππ° π΄π½ π΄π» π΄πΉπ΄πΌπΏπ»πΎ, π½πΎ πππ΄π _ π½πΈ π»πΎπ * πΏπ°ππ° πππ΄ π΄π» π±πΎπ π»πΎ π³π΄ππ΄π²ππ΄ π²πΎπππ΄π²ππ°πΌπ΄π½ππ΄_*\n\n_Β©${author}` 
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
        m.reply(`*_[β] π΄πΌπΏπ°ππ΄_*\n\n*ππ» ππππ΄π³: ${text}*\n*ππ» π΄π» π±πΎπ: ${astro}*`) 
        } else if (text == 'piedra') {
            if (astro == 'papel') {
                global.DATABASE._data.users[m.sender].uang += 1000
                m.reply(`*π₯³ ππ πΆπ°π½π°π! π*\n\n*ππ» ππππ΄π³: ${text}*\n*ππ» π΄π» π±πΎπ: ${astro}*`)
            } else {
                m.reply(`*π€‘ ππ πΏπΈπ΄ππ³π΄π! β*\n\n*ππ» ππππ΄π³: ${text}*\n*ππ» π΄π» π±πΎπ: ${astro}*`)
            }
        } else if (text == 'tijera') {
        if (astro == 'papel') {
            global.DATABASE._data.users[m.sender].uang += 1000
            m.reply(`*π₯³ ππ πΆπ°π½π°π! π*\n\n*ππ» ππππ΄π³: ${text}*\n*ππ» π΄π» π±πΎπ: ${astro}*`)
        } else {
            m.reply(`*π€‘ ππ πΏπΈπ΄ππ³π΄π! β*\n\n*ππ» ππππ΄π³: ${text}*\n*ππ» π΄π» π±πΎπ: ${astro}*`)
        }
            } else if (text == 'tijera') {
        if (astro == 'papel') {
            global.DATABASE._data.users[m.sender].uang += 1000
            m.reply(`*π₯³ ππ πΆπ°π½π°π! π*\n\n*ππ» ππππ΄π³: ${text}*\n*ππ» π΄π» π±πΎπ: ${astro}*`)
        } else {
            m.reply(`*π€‘ ππ πΏπΈπ΄ππ³π΄π! β*\n\n*ππ» ππππ΄π³: ${text}*\n*ππ» π΄π» π±πΎπ: ${astro}*`)
        }
        } else if (text == 'papel') {
        if (astro == 'piedra') {
            global.DATABASE._data.users[m.sender].uang += 1000
            m.reply(`*π₯³ ππ πΆπ°π½π°π! π*\n\n*ππ» ππππ΄π³: ${text}*\n*ππ» π΄π» π±πΎπ: ${astro}*`)
        } else {
            m.reply(`*π€‘ ππ πΏπΈπ΄ππ³π΄π! β*\n\n*ππ» ππππ΄π³: ${text}*\n*ππ» π΄π» π±πΎπ: ${astro}*`)
        }
        } else if (text == 'piedra') {
        if (astro == 'tijera') {
            global.DATABASE._data.users[m.sender].uang += 1000
            m.reply(`*π₯³ ππ πΆπ°π½π°π! π*\n\n*ππ» ππππ΄π³: ${text}*\n*ππ» π΄π» π±πΎπ: ${astro}*`)
        } else {
            m.reply(`*π€‘ ππ πΏπΈπ΄ππ³π΄π! β*\n\n*ππ» ππππ΄π³: ${text}*\n*ππ» π΄π» π±πΎπ: ${astro}*`)
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