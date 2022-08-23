let handler = async (m, { conn, usedPrefix, command }) => {
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (/image/.test(mime)) {
        let img = await q.download()
        if (!img) throw '*[❗] 𝙻𝙰 𝙸𝙼𝙰𝙶𝙴𝙽 𝙽𝙾 𝙵𝚄𝙴 𝙴𝙽𝙲𝙾𝙽𝚃𝚁𝙰𝙳𝙰*'
        await conn.updateProfilePicture(m.chat, img)
    } else throw `*[❗] 𝙴𝙽𝚅𝙸𝙰 𝙾 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴 𝚄𝙽𝙰 𝙸𝙼𝙰𝙶𝙴𝙽 𝙲𝙾𝙽 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾*: *${usedPrefix + command}*`
}
handler.help = ['fotogrupo <etiqueta foto>']
handler.tags = ['grupos']

handler.command = /^fotogrupo$/i

handler.group = true
handler.admin = true
handler.botAdmin = true

export default handler