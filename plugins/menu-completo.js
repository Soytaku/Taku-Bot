import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text }) => {
try {
let vn = './media/menu.mp3'
let pp = './allmenu.jpg'
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let name = await conn.getName(m.sender)
let d = new Date(new Date + 3600000)
let locale = 'es'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(d)
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let replace = {
'%': '%',
p: _p, uptime, muptime,
me: conn.getName(conn.user.jid),
npmname: _package.name,
npmdesc: _package.description,
version: _package.version,
exp: exp - min,
maxexp: xp,
totalexp: exp,
xp4levelup: max - exp,
github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
 
    

let str = `
let buttonMessage = {
document: imagen3, 
fileName: `𝚃𝙰𝙺𝚄-𝙱𝙾𝚃-𝚇𝙳⁩`, 
mimetype: `application/${document}`,
jpegThumbnail: imagen3,
caption: text,
fileLength: "99999999999999",
mentions: [user],
footer: groupMetadata.subject,
buttons: buttons,
headerType: 4,   
contextInfo: {
'forwardingScore': 200,
'isForwarded': true,
"mentionedJid": [user],
"externalAdReply": {
"showAdAttribution": false,
"title": `wa.me/5493772642151`,
"mediaType": 2, 
"previewType": "pdf",
"thumbnail": apii.data,
"mediaUrl": 'https://youtu.be/',
"sourceUrl": 'https://www.pornhub.com' }}} 
this.sendMessage(id, buttonMessage, fake)                          
}}}
*𝙷𝙾𝙻𝙰, @user👋 𝙰𝚀𝚄𝙸 𝚃𝙸𝙴𝙽𝙴𝚂 𝙴𝙻 𝙼𝙴𝙽𝚄 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙾 𝙳𝙴 𝚃𝙰𝙺𝚄-𝙱𝙾𝚃-𝚇𝙳❤*

┌──「 𝐓𝐀𝐊𝐔-𝐁𝐎𝐓-𝐗𝐃 」─
├❏ ├❏ ๖ۣۜۜ͜͡𝐇𝐨𝐥𝐚${name}✨  
├❏ 📅 𝙵𝙴𝙲𝙷𝙰: ${week}, ${date}
├❏ 🔋𝚃𝙸𝙴𝙼𝙿𝙾 𝙰𝙲𝚃𝙸𝚅𝙾: ${uptime}
├❏ 📊 𝚄𝚂𝚄𝙰𝚁𝙸𝙾𝚂: ${rtotalreg}
└────ׂ─ׂ─ׂ─ׂ───
┌──「 𝐄𝐗𝐏/𝐋𝐈𝐌𝐈𝐓𝐄𝐒 」─
├❏⃔⃝⃯🎟✩᭄꥓〭 _${usedPrefix}buy <ingresa la cantidad>
├❏⃔⃝⃯🎟✩᭄꥓〭 _${usedPrefix}buyall <compra todo lo posible de limites>
├❏⃔⃝⃯🎟✩᭄꥓〭 _${usedPrefix}sn <serial number>
├❏⃔⃝⃯🎟✩᭄꥓〭 _${usedPrefix}lb [numero de usuarios]
├❏⃔⃝⃯🎟✩᭄꥓〭 _${usedPrefix}levelup <sube de nivel>
├❏⃔⃝⃯🎟✩᭄꥓〭 _${usedPrefix}limit [@usuario]
├❏⃔⃝⃯🎟✩᭄꥓〭 _${usedPrefix}transferit <limit> <cantidad> <@user>
├❏⃔⃝⃯🎟✩᭄꥓〭 _${usedPrefix}perfil
├❏⃔⃝⃯🎟✩᭄꥓〭 _${usedPrefix}reclamarcp <reclama tu exp diario>
├❏⃔⃝⃯🎟✩᭄꥓〭 _${usedPrefix}reg <nombre>.<edad>
├❏⃔⃝⃯🎟✩᭄꥓〭 _${usedPrefix}unreg <sn|serial number>
└────ׂ─ׂ─ׂ─ׂ───
┌──「 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐄𝐑 」─
├❏⃔⃝⃯📥✩᭄꥓〭 _${usedPrefix}aesthetic (limit)
├❏⃔⃝⃯📥✩᭄꥓〭 _${usedPrefix}cosplay (limit)
├❏⃔⃝⃯📥✩᭄꥓〭 _${usedPrefix}gamer (limit)
├❏⃔⃝⃯📥✩᭄꥓〭 _${usedPrefix}gimage <texto>
├❏⃔⃝⃯📥✩᭄꥓〭 _${usedPrefix}image
├❏⃔⃝⃯📥✩᭄꥓〭 _${usedPrefix}xnxxdl *<enlace / link / url>*_
├❏⃔⃝⃯📥✩᭄꥓〭 _${usedPrefix}xvideosdl *<enlace / link / url>
├❏⃔⃝⃯📥✩᭄꥓〭 _${usedPrefix}pinterest <texto>
├❏⃔⃝⃯📥✩᭄꥓〭 _${usedPrefix}planeta (limit)
├❏⃔⃝⃯📥✩᭄꥓〭 _${usedPrefix}wallpaper <texto>
├❏⃔⃝⃯📥✩᭄꥓〭 _${usedPrefix}tiktok <link>
├❏⃔⃝⃯📥✩᭄꥓〭 _${usedPrefix}tiktokfoto
├❏⃔⃝⃯📥✩᭄꥓〭 _${usedPrefix}lentes <wallpaper>
├❏⃔⃝⃯📥✩᭄꥓〭 _${usedPrefix}matck
├❏⃔⃝⃯📥✩᭄꥓〭 _${usedPrefix}mediafire <link>
├❏⃔⃝⃯📥✩᭄꥓〭 _${usedPrefix}faceboock <link> 
├❏⃔⃝⃯📥✩᭄꥓〭 _${usedPrefix}play <titulo> (limit)
├❏⃔⃝⃯📥✩᭄꥓〭 _${usedPrefix}play2 (limit)
├❏⃔⃝⃯📥✩᭄꥓〭 _${usedPrefix}ytmp3 <url>
├❏⃔⃝⃯📥✩᭄꥓〭 _${usedPrefix}buscaryt
├❏⃔⃝⃯📥✩᭄꥓〭 _${usedPrefix}ytmp4 <url>
├❏⃔⃝⃯📥✩᭄꥓〭 _${usedPrefix}yt <url>
└────ׂ─ׂ─ׂ─ׂ───
┌──「 𝐀𝐔𝐃𝐈𝐎𝐒 」─
├❏⃔⃝⃯🎧✩᭄꥓〭 _cabron
├❏⃔⃝⃯🎧✩᭄꥓〭 _Te amo
├❏⃔⃝⃯🎧✩᭄꥓〭 _ya antojaron
├❏⃔⃝⃯🎧✩᭄꥓〭 _Siuuu
├❏⃔⃝⃯🎧✩᭄꥓〭 _Entrada épica
├❏⃔⃝⃯🎧✩᭄꥓〭 _Fino señores
├❏⃔⃝⃯🎧✩᭄꥓〭 _Esto va ser épico papus
├❏⃔⃝⃯🎧✩᭄꥓〭 _Wtf
├❏⃔⃝⃯🎧✩᭄꥓〭 _Bueno si
├❏⃔⃝⃯🎧✩᭄꥓〭 _Nadie te preguntó
├❏⃔⃝⃯🎧✩᭄꥓〭 _Bien pensado Woody
├❏⃔⃝⃯🎧✩᭄꥓〭 _El pepe
├❏⃔⃝⃯🎧✩᭄꥓〭 _Me anda buscando anonymous
├❏⃔⃝⃯🎧✩᭄꥓〭 _Momento equisde | Momento XD
├❏⃔⃝⃯🎧✩᭄꥓〭 _Cambiate a Movistar
├❏⃔⃝⃯🎧✩᭄꥓〭 _Corte corte
├❏⃔⃝⃯🎧✩᭄꥓〭 _Te gusta el Pepino
├❏⃔⃝⃯🎧✩᭄꥓〭 _Elmo sabe donde vives
├❏⃔⃝⃯🎧✩᭄꥓〭 _Y este quien es
├❏⃔⃝⃯🎧✩᭄꥓〭 _Orale
├❏⃔⃝⃯🎧✩᭄꥓〭 _Quien es tu sempai botsito 7w7
├❏⃔⃝⃯🎧✩᭄꥓〭 _suspenso
├❏⃔⃝⃯🎧✩᭄꥓〭 _Miau
├❏⃔⃝⃯🎧✩᭄꥓〭 _Bienvenido
├❏⃔⃝⃯🎧✩᭄꥓〭 _a
├❏⃔⃝⃯🎧✩᭄꥓〭 _Hola
├❏⃔⃝⃯🎧✩᭄꥓〭 _ara ara
├❏⃔⃝⃯🎧✩᭄꥓〭 _atencion grupo
├❏⃔⃝⃯🎧✩᭄꥓〭 _Buenos dias
├❏⃔⃝⃯🎧✩᭄꥓〭 _cunumi
├❏⃔⃝⃯🎧✩᭄꥓〭 _duro 2 horas
├❏⃔⃝⃯🎧✩᭄꥓〭 _falda
├❏⃔⃝⃯🎧✩᭄꥓〭 _gemidos
├❏⃔⃝⃯🎧✩᭄꥓〭 _Muchachos
├❏⃔⃝⃯🎧✩᭄꥓〭 _Pasa pack Bot
├❏⃔⃝⃯🎧✩᭄꥓〭 _sexo2
├❏⃔⃝⃯🎧✩᭄꥓〭 _linda
├❏⃔⃝⃯🎧✩᭄꥓〭 _manden porno
├❏⃔⃝⃯🎧✩᭄꥓〭 _oh me vengo
├❏⃔⃝⃯🎧✩᭄꥓〭 _sexoo
├❏⃔⃝⃯🎧✩᭄꥓〭 _wtf y este
└────ׂ─ׂ─ׂ─ׂ───
┌──「 𝐆𝐑𝐔𝐏𝐎𝐒 」─
├❏⃔⃝⃯💎✩᭄꥓〭 _${usedPrefix}verfantasmas
├❏⃔⃝⃯💎✩᭄꥓〭 _${usedPrefix}enable <opcion>
├❏⃔⃝⃯💎✩᭄꥓〭 _${usedPrefix}admins
├❏⃔⃝⃯💎✩᭄꥓〭 _${usedPrefix}infogrup
├❏⃔⃝⃯💎✩᭄꥓〭 _${usedPrefix}join <chat.whatsapp.com>  (Premium)
├❏⃔⃝⃯💎✩᭄꥓〭 _${usedPrefix}invitacion link
├❏⃔⃝⃯💎✩᭄꥓〭 _${usedPrefix}reestablecer
├❏⃔⃝⃯💎✩᭄꥓〭 _${usedPrefix}descripciom <texto>
├❏⃔⃝⃯💎✩᭄꥓〭 _${usedPrefix}fotogrupo <etiqueta foto>
├❏⃔⃝⃯💎✩᭄꥓〭 _${usedPrefix}tema <texto>
├❏⃔⃝⃯💎✩᭄꥓〭 _${usedPrefix}grupo open / close
├❏⃔⃝⃯💎✩᭄꥓〭 _${usedPrefix}invocar
├❏⃔⃝⃯💎✩᭄꥓〭 _${usedPrefix}setbye
├❏⃔⃝⃯💎✩᭄꥓〭 _${usedPrefix}setwelcome
├❏⃔⃝⃯💎✩᭄꥓〭 _${usedPrefix}kick @user
├❏⃔⃝⃯💎✩᭄꥓〭 _${usedPrefix}promover @usuario
├❏⃔⃝⃯💎✩᭄꥓〭 _${usedPrefix}degradar @usuario
└────ׂ─ׂ─ׂ─ׂ───
┌──「 𝐌𝐄𝐍𝐔+➊➑ 」─
├❏⃔⃝⃯🔞✩᭄꥓〭 _${usedPrefix}pack_
├❏⃔⃝⃯🔞✩᭄꥓〭 _${usedPrefix}pack2_
├❏⃔⃝⃯🔞✩᭄꥓〭 _${usedPrefix}pack3_
├❏⃔⃝⃯🔞✩᭄꥓〭 _${usedPrefix}videoxxx
├❏⃔⃝⃯🔞✩᭄꥓〭 _${usedPrefix}tiktokxxx
├❏⃔⃝⃯🔞✩᭄꥓〭 _${usedPrefix}tetas_
├❏⃔⃝⃯🔞✩᭄꥓〭 _${usedPrefix}booty_
├❏⃔⃝⃯🔞✩᭄꥓〭 _${usedPrefix}ecchi_
├❏⃔⃝⃯🔞✩᭄꥓〭 _${usedPrefix}furro_
├❏⃔⃝⃯🔞✩᭄꥓〭 _${usedPrefix}imagenlesbians_
├❏⃔⃝⃯🔞✩᭄꥓〭 _${usedPrefix}panties_
├❏⃔⃝⃯🔞✩᭄꥓〭 _${usedPrefix}pene_
├❏⃔⃝⃯🔞✩᭄꥓〭 _${usedPrefix}porno_
├❏⃔⃝⃯🔞✩᭄꥓〭 _${usedPrefix}porno2_
├❏⃔⃝⃯🔞✩᭄꥓〭 _${usedPrefix}randomxxx_
├❏⃔⃝⃯🔞✩᭄꥓〭 _${usedPrefix}pechos_
├❏⃔⃝⃯🔞✩᭄꥓〭 _${usedPrefix}yaoi_
├❏⃔⃝⃯🔞✩᭄꥓〭 _${usedPrefix}yaoi2_
├❏⃔⃝⃯🔞✩᭄꥓〭 _${usedPrefix}yuri_
├❏⃔⃝⃯🔞✩᭄꥓〭 _${usedPrefix}yuri2_
├❏⃔⃝⃯🔞✩᭄꥓〭 _${usedPrefix}trapito_
├❏⃔⃝⃯🔞✩᭄꥓〭 _${usedPrefix}hentai_
├❏⃔⃝⃯🔞✩᭄꥓〭 _${usedPrefix}nsfwloli_
├❏⃔⃝⃯🔞✩᭄꥓〭 _${usedPrefix}nsfworgy_
├❏⃔⃝⃯🔞✩᭄꥓〭 _${usedPrefix}nsfwfoot_
├❏⃔⃝⃯🔞✩᭄꥓〭 _${usedPrefix}nsfwass_
├❏⃔⃝⃯🔞✩᭄꥓〭 _${usedPrefix}nsfwbdsm_
├❏⃔⃝⃯🔞✩᭄꥓〭 _${usedPrefix}nsfwcum_
├❏⃔⃝⃯🔞✩᭄꥓〭 _${usedPrefix}nsfwero_
├❏⃔⃝⃯🔞✩᭄꥓〭 _${usedPrefix}nsfwfemdom_
├❏⃔⃝⃯🔞✩᭄꥓〭 _${usedPrefix}nsfwglass_
└────ׂ─ׂ─ׂ─ׂ───
┌──「 𝐓𝐎𝐎𝐋𝐒 」─
├❏⃔⃝⃯🛠✩᭄꥓〭 _${usedPrefix}tovideo (responde)
├❏⃔⃝⃯🛠✩᭄꥓〭 _${usedPrefix}afk [motibo]
├❏⃔⃝⃯🛠✩᭄꥓〭 _${usedPrefix}acortar <link> 
├❏⃔⃝⃯🛠✩᭄꥓〭 _${usedPrefix}calc <expresion>
├❏⃔⃝⃯🛠✩᭄꥓〭 _${usedPrefix}google <que buscas>
├❏⃔⃝⃯🛠✩᭄꥓〭 _${usedPrefix}letras <cancion>
├❏⃔⃝⃯🛠✩᭄꥓〭 _${usedPrefix}readmore <texto>|<texto>
├❏⃔⃝⃯🛠✩᭄꥓〭 _${usedPrefix}spoiler <texto>|<texto>
├❏⃔⃝⃯🛠✩᭄꥓〭 _${usedPrefix}ping
├❏⃔⃝⃯🛠✩᭄꥓〭 _${usedPrefix}velocidad
├❏⃔⃝⃯🛠✩᭄꥓〭 _${usedPrefix}infobot
├❏⃔⃝⃯🛠✩᭄꥓〭 _${usedPrefix}style <escribe>
├❏⃔⃝⃯🛠✩᭄꥓〭 _${usedPrefix}tts es <textoᴛo a voz>
├❏⃔⃝⃯🛠✩᭄꥓〭 _${usedPrefix}traducir <texto>
├❏⃔⃝⃯🛠✩᭄꥓〭 _${usedPrefix}Qr <texto>
├❏⃔⃝⃯🛠✩᭄꥓〭 _${usedPrefix}readviewonce
├❏⃔⃝⃯🛠✩᭄꥓〭 _${usedPrefix}buscaryt
└────ׂ─ׂ─ׂ─ׂ───
┌──「 𝐈𝐌𝐆 𝐄𝐃𝐈𝐓 」─
├❏⃔⃝⃯📝✩᭄꥓〭 _${usedPrefix}logo
├❏⃔⃝⃯📝✩᭄꥓〭 _${usedPrefix}lolice
├❏⃔⃝⃯📝✩᭄꥓〭 _${usedPrefix}rojo <etiqueta imagen>
├❏⃔⃝⃯📝✩᭄꥓〭 _${usedPrefix}blur
├❏⃔⃝⃯📝✩᭄꥓〭 _${usedPrefix}carcel
├❏⃔⃝⃯📝✩᭄꥓〭 _${usedPrefix}azulmora <etiqueta imagen>
├❏⃔⃝⃯📝✩᭄꥓〭 _${usedPrefix}estupido
├❏⃔⃝⃯📝✩᭄꥓〭 _${usedPrefix}glass
├❏⃔⃝⃯📝✩᭄꥓〭 _${usedPrefix}urss <etiqueta imagen>
├❏⃔⃝⃯📝✩᭄꥓〭 _${usedPrefix}gris <etiqueta imagen>
├❏⃔⃝⃯📝✩᭄꥓〭 _${usedPrefix}bigenero <etiqueta imagen>
├❏⃔⃝⃯📝✩᭄꥓〭 _${usedPrefix}hornycard
├❏⃔⃝⃯📝✩᭄꥓〭 _${usedPrefix}invertir <etiqueta imagen>
├❏⃔⃝⃯📝✩᭄꥓〭 _${usedPrefix}passed
├❏⃔⃝⃯📝✩᭄꥓〭 _${usedPrefix}pixelar <etiqueta imagen>
├❏⃔⃝⃯📝✩᭄꥓〭 _${usedPrefix}simpcard
├❏⃔⃝⃯📝✩᭄꥓〭 _${usedPrefix}wanted
├❏⃔⃝⃯📝✩᭄꥓〭 _${usedPrefix}wastef
├❏⃔⃝⃯📝✩᭄꥓〭 _${usedPrefix}ytcomment <comment>
├❏⃔⃝⃯📝✩᭄꥓〭 _${usedPrefix}gay2
└────ׂ─ׂ─ׂ─ׂ───
┌──「 𝐉𝐔𝐄𝐆𝐎𝐒 」─
├❏⃔⃝⃯🎮✩᭄꥓〭 _${usedPrefix}charlie
├❏⃔⃝⃯🎮✩᭄꥓〭 _${usedPrefix}dado
├❏⃔⃝⃯🎮✩᭄꥓〭 _${usedPrefix}delttt (deten el juego en curso) (Limit)
├❏⃔⃝⃯🎮✩᭄꥓〭 _${usedPrefix}gay2
├❏⃔⃝⃯🎮✩᭄꥓〭 _${usedPrefix}match
├❏⃔⃝⃯🎮✩᭄꥓〭 _${usedPrefix}pendejo
├❏⃔⃝⃯🎮✩᭄꥓〭 _${usedPrefix}gay
├❏⃔⃝⃯🎮✩᭄꥓〭 _${usedPrefix}chad
├❏⃔⃝⃯🎮✩᭄꥓〭 _${usedPrefix}fucker
├❏⃔⃝⃯🎮✩᭄꥓〭 _${usedPrefix}sad
├❏⃔⃝⃯🎮✩᭄꥓〭 _${usedPrefix}pregunta (text)
├❏⃔⃝⃯🎮✩᭄꥓〭 _${usedPrefix}kunno
├❏⃔⃝⃯🎮✩᭄꥓〭 _${usedPrefix}bts
├❏⃔⃝⃯🎮✩᭄꥓〭 _${usedPrefix}simi (text)
├❏⃔⃝⃯🎮✩᭄꥓〭 _${usedPrefix}badass
├❏⃔⃝⃯🎮✩᭄꥓〭 _${usedPrefix}arrogante
├❏⃔⃝⃯🎮✩᭄꥓〭 _${usedPrefix}verguenza
├❏⃔⃝⃯🎮✩᭄꥓〭 _${usedPrefix}cristiano
├❏⃔⃝⃯🎮✩᭄꥓〭 _${usedPrefix}basado
├❏⃔⃝⃯🎮✩᭄꥓〭 _${usedPrefix}puto
├❏⃔⃝⃯🎮✩᭄꥓〭 _${usedPrefix}puta
├❏⃔⃝⃯🎮✩᭄꥓〭 _${usedPrefix}ptt (piedra papel o tijeras)
├❏⃔⃝⃯🎮✩᭄꥓〭 _${usedPrefix}reto
├❏⃔⃝⃯🎮✩᭄꥓〭 _${usedPrefix}rankchad
├❏⃔⃝⃯🎮✩᭄꥓〭 _${usedPrefix}rankfeo
├❏⃔⃝⃯🎮✩᭄꥓〭 _${usedPrefix}rankgay
├❏⃔⃝⃯🎮✩᭄꥓〭 _${usedPrefix}rankguapo
└────ׂ─ׂ─ׂ─ׂ───
┌──「 𝐒𝐓𝐈𝐂𝐊𝐄𝐑 」─
├❏⃔⃝⃯💟✩᭄꥓〭 _${usedPrefix}dado
├❏⃔⃝⃯💟✩᭄꥓〭 _${usedPrefix}attp <escribe>
├❏⃔⃝⃯💟✩᭄꥓〭 _${usedPrefix}getexif
├❏⃔⃝⃯💟✩᭄꥓〭 _${usedPrefix}sticker <etiqueta>
├❏⃔⃝⃯💟✩᭄꥓〭 _${usedPrefix}topng (responde)
├❏⃔⃝⃯💟✩᭄꥓〭 _${usedPrefix}toimg (reply)
├❏⃔⃝⃯💟✩᭄꥓〭 _${usedPrefix}ttp <ingresa texto>
├❏⃔⃝⃯💟✩᭄꥓〭 _${usedPrefix}wm <packname>|<author>
└────ׂ─ׂ─ׂ─ׂ───
┌──「 𝐎𝐖𝐍𝐄𝐑 𝐁𝐎𝐓 」─
├❏⃔⃝⃯👑✩᭄꥓〭 _${usedPrefix}kick @user
├❏⃔⃝⃯👑✩᭄꥓〭 _${usedPrefix}promote @usuario
├❏⃔⃝⃯👑✩᭄꥓〭 _${usedPrefix}demote @usuario
├❏⃔⃝⃯👑✩᭄꥓〭 _${usedPrefix}restart
├❏⃔⃝⃯👑✩᭄꥓〭 _${usedPrefix}leave
├❏⃔⃝⃯👑✩᭄꥓〭 _${usedPrefix}cleartmp
├❏⃔⃝⃯👑✩᭄꥓〭 _${usedPrefix}broadcast <mensaje>
├❏⃔⃝⃯👑✩᭄꥓〭 _${usedPrefix}bc
├❏⃔⃝⃯👑✩᭄꥓〭 _${usedPrefix}broadcastᴄʜᴀᴛꜱ <mensaje>
├❏⃔⃝⃯👑✩᭄꥓〭 _${usedPrefix}bcchats
├❏⃔⃝⃯👑✩᭄꥓〭 _${usedPrefix}broadcastɢʀᴏᴜᴘ <mensaje>
├❏⃔⃝⃯👑✩᭄꥓〭 _${usedPrefix}broadcastjadibot <mensaje>
├❏⃔⃝⃯👑✩᭄꥓〭 _${usedPrefix}bcgc
├❏⃔⃝⃯👑✩᭄꥓〭 _${usedPrefix}enable <opcion>
├❏⃔⃝⃯👑✩᭄꥓〭 _${usedPrefix}addprem [@user]
├❏⃔⃝⃯👑✩᭄꥓〭 _${usedPrefix}banchat
├❏⃔⃝⃯👑✩᭄꥓〭 _${usedPrefix}delprem [@user]
├❏⃔⃝⃯👑✩᭄꥓〭 _${usedPrefix}groups
├❏⃔⃝⃯👑✩᭄꥓〭 _${usedPrefix}grouplist
├❏⃔⃝⃯👑✩᭄꥓〭 _${usedPrefix}premlist
├❏⃔⃝⃯👑✩᭄꥓〭 _${usedPrefix}unbanchat
└────ׂ─ׂ─ׂ─ׂ───
┌──「 𝐀𝐂𝐓𝐈𝑽𝐀𝐑 𝐎 𝐃𝐄𝐒𝐀𝐂𝐓𝐈𝑽𝐀𝐑 」─
├❏⃔⃝⃯☑️✩᭄꥓〭 _${usedPrefix}enable restrict
├❏⃔⃝⃯☑️✩᭄꥓〭 _${usedPrefix}disable restrict
├❏⃔⃝⃯☑️✩᭄꥓〭 _${usedPrefix}enable antilink
├❏⃔⃝⃯☑️✩᭄꥓〭 _${usedPrefix}disable antilink
├❏⃔⃝⃯☑️✩᭄꥓〭 _${usedPrefix}enable antispam
├❏⃔⃝⃯☑️✩᭄꥓〭 _${usedPrefix}disable antispam
├❏⃔⃝⃯☑️✩᭄꥓〭 _${usedPrefix}enable modohorny
├❏⃔⃝⃯☑️✩᭄꥓〭 _${usedPrefix}disable modohorny
├❏⃔⃝⃯☑️✩᭄꥓〭 _${usedPrefix}enable public
├❏⃔⃝⃯☑️✩᭄꥓〭 _${usedPrefix}disable public
├❏⃔⃝⃯☑️✩᭄꥓〭 _${usedPrefix}enable pconly
├❏⃔⃝⃯☑️✩᭄꥓〭 _${usedPrefix}disable pconly
├❏⃔⃝⃯☑️✩᭄꥓〭 _${usedPrefix}enable gconly
├❏⃔⃝⃯☑️✩᭄꥓〭 _${usedPrefix}disable gconly
├❏⃔⃝⃯☑️✩᭄꥓〭 _${usedPrefix}enable welcome
├❏⃔⃝⃯☑️✩᭄꥓〭 _${usedPrefix}disable welcome
├❏⃔⃝⃯☑️✩᭄꥓〭 _${usedPrefix}enable autoread
├❏⃔⃝⃯☑️✩᭄꥓〭 _${usedPrefix}disable autoread
└────ׂ─ׂ─ׂ─ׂ───
`.trim()
conn.sendHydrated(m.chat, str, wm, pp, 'https://github.com/', '𝐓𝐀𝐊𝐔-𝐁𝐎𝐓', null, null, [
 ['ೈ፝͜͡࿇𝐌𝐄𝐍𝐔 𝐋𝐈𝐒𝐓𝐀✪','/listmenu']
 ['ೈ፝͜͡࿇𝐎𝐖𝐍𝐄𝐑/𝐂𝐑𝐄𝐀𝐃𝐎𝐑✪','/contacto']
], m,)
await conn.sendFile(m.chat, vn, '/allmenu.jpg', null, m, true, {
type: 'audioMessage', 
ptt: true})
} catch (e) {
conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙻𝚘 𝚜𝚒𝚎𝚗𝚝𝚘,  𝚎𝚛𝚛𝚘𝚛 𝚊𝚕 𝚎𝚗𝚟𝚒𝚊𝚛 𝚎𝚕 𝚖𝚎𝚗𝚞, 𝚒𝚗𝚝𝚎𝚗𝚝𝚊 𝚍𝚎 𝚗𝚞𝚎𝚟𝚘 𝚌𝚘𝚗𝚝𝚊𝚌𝚝𝚊 𝚊𝚕 𝚘𝚠𝚗𝚎𝚛.*', m)
throw e
}}
handler.help = ['menu', 'allmenu', '?']
handler.tags = ['main']
handler.command = /^(menucompleto|comandos|allmenu|info|menú|menu|help|\?)$/i
handler.exp = 50
handler.limit = 1
handler.fail = null
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
