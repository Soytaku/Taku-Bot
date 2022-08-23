let toM = a => '@' + a.split('@')[0]
function handler(m, { groupMetadata }) {
let ps = groupMetadata.participants.map(v => v.id)
let a = ps.getRandom()
let b
do b = ps.getRandom()
while (b === a)
m.reply(`*${toM(a)}, *𝙽𝚄𝙴𝚅𝙰 𝙿𝙰𝚁𝙴𝙹𝙰,👩🏻‍❤️‍👨🏻 𝚀𝚄𝙴 𝙱𝙾𝙽𝙸𝚃𝙾🥰*${toM(b)},💓*`, null, {
mentions: [a, b]
})}
handler.help = ['emparejar']
handler.tags = ['juegos']
handler.command = ['emparejar']
handler.group = true
export default handler
