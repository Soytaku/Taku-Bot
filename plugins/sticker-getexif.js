import { format } from 'util'
const { default: { Image } } = await import('node-webpmux')

let handler = async (m) => {
    if (!m.quoted) return m.reply('*[❗] 𝙴𝚃𝙸𝚀𝚄𝙴𝚃𝙰 𝙴𝙻 𝚂𝚃𝙸𝙲𝙺𝙴𝚁*')
    if (/sticker/.test(m.quoted.mtype)) {
        let img = new Image()
        await img.load(await m.quoted.download())
        m.reply(format(JSON.parse(img.exif.slice(22).toString())))
    }
}
handler.help = ['getexif']
handler.tags = ['sticker menu']

handler.command = ['getexif']

export default handler