import translate from 'translate-google-api'
const defaultLang = 'es'
const tld = 'cn'
let handler = async (m, { args, usedPrefix, command }) => {
let msg = `*[β] _πππ°π³ππ²πΈπΎπ½ π³π΄ πΈπ³πΈπΎπΌπ°π π£ πΏπ°ππ° πππ°π³ππ²πΈπ  πππ° π²πΎπΌπΎ π΄πΉπ΄πΌπΏπ»πΎ_* ${usedPrefix + command} es Hello*\n\n*πΈπ³πΈπΎπΌπ°π π³πΈππΏπΎπ½πΈπ±π»π΄π π°πππΈ:*\n*- https://cloud.google.com/translate/docs/languages*`
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
m.reply('*TraducciΓ³n:* ' +  result[0]) }}
handler.help = ['traducir']
handler.tags = ['herramientas']
handler.command = /^(tr(anslate)|traducir?)$/i
export default handler
