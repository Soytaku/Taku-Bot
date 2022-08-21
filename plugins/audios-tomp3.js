import { toAudio } from '../lib/converter.js'

let handler = async (m, { conn, usedPrefix, command }) => {
    let q = m.quoted ? m.quoted : m
    let mime = (m.quoted ? m.quoted : m.msg).mimetype || ''
    if (!/video|audio/.test(mime)) throw `*[❗] 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙰 𝙴𝙻 𝚅𝙸𝙳𝙴𝙾/𝙽𝙾𝚃𝙰 𝙳𝙴 𝚅𝙾𝚉  𝚀𝚄𝙴 𝙳𝙴𝚂𝙴𝙰 𝙲𝙾𝙽𝚅𝙴𝚁𝚃𝙸𝚁 𝙴𝙽 𝙰𝚄𝙳𝙸𝙾/mp3 𝙲𝙾𝙽 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾*${usedPrefix + command}*`
    let media = await q.download?.()
    if (!media) throw '*[❗] 𝙵𝙰𝙻𝙻𝙾 𝙰𝙻 𝙳𝙴𝚂𝙲𝙰𝚁𝙶𝙰𝚁 𝙴𝙻 𝙰𝚁𝙲𝙷𝙸𝚅𝙾*'
    let audio = await toAudio(media, 'mp4')
    if (!audio.data) throw '*[❗] 𝙵𝙰𝙻𝙻𝙾 𝙰𝙻 𝙲𝙾𝙽𝚅𝙴𝚁𝚃𝙸𝚁 𝚅𝙸𝙳𝙴𝙾/𝙽𝙾𝚃𝙰 𝙰 𝙰𝚄𝙳𝙸𝙾, 𝙸𝙽𝚃𝙴𝙽𝚃𝙰 𝙳𝙴 𝙽𝚄𝙴𝚅𝙾*'
    conn.sendFile(m.chat, audio.data, 'audio.mp3', '', m, null, { mimetype: 'audio/mp4' })
}
handler.help = ['#tomp3 (ʀᴇꜱᴘᴏɴᴅᴇ)']
handler.tags = ['audio mod']

handler.command = /^to(mp3|a(udio)?)$/i

export default handler