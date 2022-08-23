import translate from 'translate-google-api'
const defaultLang = 'es'
const tld = 'cn'
let handler = async (m, { args, usedPrefix, command }) => {
let msg = `*[❗] _𝚃𝚁𝙰𝙳𝚄𝙲𝙸𝙾𝙽 𝙳𝙴 𝙸𝙳𝙸𝙾𝙼𝙰𝚂 🗣 𝙿𝙰𝚁𝙰 𝚃𝚁𝙰𝙳𝚄𝙲𝙸𝚁  𝚄𝚂𝙰 𝙲𝙾𝙼𝙾 𝙴𝙹𝙴𝙼𝙿𝙻𝙾_* ${usedPrefix + command} es Hello*\n\n*𝙸𝙳𝙸𝙾𝙼𝙰𝚂 𝙳𝙸𝚂𝙿𝙾𝙽𝙸𝙱𝙻𝙴𝚂 𝙰𝚀𝚄𝙸:*\n*- https://cloud.google.com/translate/docs/languages*`
if (!args || !args[0]) return m.reply(msg)
let lang = args[0]
let text = args.slice(1).join(' ')
if ((args[0] || '').length !== 2) {
lang = defaultLang
text = args.join(' ') }
if (!text && m.quoted && m.quoted.text) text = m.quoted.text
let result
try {
result = await translate(`${text}`, {
tld,
to: lang, })
} catch (e) {
result = await translate(`${text}`, {
tld,
to: defaultLang, })
} finally {
m.reply('*Traducción:* ' +  result[0]) }}
handler.help = ['traducir']
handler.tags = ['herramientas']
handler.command = /^(tr(anslate)|traducir?)$/i
export default handler
