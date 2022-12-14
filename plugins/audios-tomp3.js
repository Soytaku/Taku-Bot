import { toAudio } from '../lib/converter.js'

let handler = async (m, { conn, usedPrefix, command }) => {
    let q = m.quoted ? m.quoted : m
    let mime = (m.quoted ? m.quoted : m.msg).mimetype || ''
    if (!/video|audio/.test(mime)) throw `*[β] ππ΄ππΏπΎπ½π³π° π΄π» ππΈπ³π΄πΎ/π½πΎππ° π³π΄ ππΎπ  πππ΄ π³π΄ππ΄π° π²πΎπ½ππ΄πππΈπ π΄π½ π°ππ³πΈπΎ/mp3 π²πΎπ½ π΄π» π²πΎπΌπ°π½π³πΎ*${usedPrefix + command}*`
    let media = await q.download?.()
    if (!media) throw '*[β] π΅π°π»π»πΎ π°π» π³π΄ππ²π°ππΆπ°π π΄π» π°ππ²π·πΈππΎ*'
    let audio = await toAudio(media, 'mp4')
    if (!audio.data) throw '*[β] π΅π°π»π»πΎ π°π» π²πΎπ½ππ΄πππΈπ ππΈπ³π΄πΎ/π½πΎππ° π° π°ππ³πΈπΎ, πΈπ½ππ΄π½ππ° π³π΄ π½ππ΄ππΎ*'
    conn.sendFile(m.chat, audio.data, 'audio.mp3', '', m, null, { mimetype: 'audio/mp4' })
}
handler.help = ['#tomp3 (Κα΄κ±α΄α΄Ι΄α΄α΄)']
handler.tags = ['audio mod']

handler.command = /^to(mp3|a(udio)?)$/i

export default handler