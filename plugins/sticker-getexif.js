import { format } from 'util'
const { default: { Image } } = await import('node-webpmux')

let handler = async (m) => {
    if (!m.quoted) return m.reply('*[β] π΄ππΈπππ΄ππ° π΄π» πππΈπ²πΊπ΄π*')
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