let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})( [0-9]{1,3})?/i

let handler = async (m, { conn, text, isOwner }) => {
    let [_, code, expired] = text.match(linkRegex) || []
    if (!code) throw '*[β] π»πΈπ½πΊ πΈπ½ππ°π»πΈπ³πΎ, πΈπ½ππ΄π½ππ΄ π²πΎπ½ π·πΎπππΎ*'
    let res = await conn.groupAcceptInvite(code)
    expired = Math.floor(Math.min(999, Math.max(1, isOwner ? isNumber(expired) ? parseInt(expired) : 0 : 3)))
    m.reply(`*π€π΄π» π±πΎπ ππ° π΄π½πππΎ π°π» πΆπππΏπΎ, π³πΈππ΅ππππ°π»πΎπ* ${res}${expired ? ` Durante ${expired} π³πΈπ°` : ''}`)
    let chats = global.db.data.chats[res]
    if (!chats) chats = global.db.data.chats[res] = {}
    if (expired) chats.expired = +new Date() + expired * 1000 * 60 * 60 * 24
}
handler.help = ['join <chat.whatsApp.com>']
handler.tags = ['grupos']
handler.premium = true
handler.command = /^join$/i

export default handler

const isNumber = (x) => (x = parseInt(x), typeof x === 'number' && !isNaN(x))