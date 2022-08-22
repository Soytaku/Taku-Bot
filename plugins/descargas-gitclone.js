import fetch from 'node-fetch'
const regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
let handler = async (m, { args, usedPrefix, command }) => {
if (!args[0]) throw `${mg}*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝚂𝙲𝚁𝙸𝙱𝙴 𝙴𝙻 𝙴𝙻𝙰𝙽𝙲𝙴 𝙳𝙴 𝙶𝙸𝚃𝙷𝚄𝙱*\n𝙴𝙹𝙴𝙼𝙿𝙻𝙾\n*${usedPrefix + command} https://github.com/*${usedPrefix + command}*`
if (!regex.test(args[0])) throw `${fg}𝙴𝙻𝙰𝙽𝙲𝙴 𝙽𝙾 𝚅𝙰𝙻𝙸𝙳𝙾. 𝙳𝙴𝙱𝙴 𝚂𝙴𝚁 𝚄𝙽 𝙴𝙻𝙰𝙽𝙲𝙴 𝙳𝙴 𝙶𝙸𝚃𝙷𝚄𝙱`
let [_, user, repo] = args[0].match(regex) || []
repo = repo.replace(/.git$/, '')
let url = `https://api.github.com/repos/${user}/${repo}/zipball`
let filename = (await fetch(url, { method: 'HEAD' })).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
m.reply(`${eg}*[❗] 𝚃𝚄 𝙰𝚁𝙲𝙷𝙸𝚅𝙾 𝙴𝚂𝚃𝙰 𝙲𝙸𝙴𝙽𝙳𝙾 𝙴𝙽𝚅𝙸𝙰𝙳𝙾... 🚀\n𝚂𝙸 𝙻𝙰 𝙳𝙴𝚂𝙲𝙰𝚁𝙶𝙰 𝙽𝙾 𝙻𝙻𝙴𝙶𝙰 𝙿𝚄𝙴𝙳𝙴 𝚂𝙴𝚁 𝚀𝚄𝙴 𝙴𝙻 𝚁𝙴𝙿𝙾𝚂𝙸𝚃𝙾𝚁𝙸𝙾 𝙴𝚂 𝙼𝚄𝚈 𝙿𝙴𝚂𝙰𝙳𝙾.*`)
conn.sendFile(m.chat, url, filename, null, m)
let info = `𝙻𝙸𝚂𝚃𝙾 𝙰𝚀𝚄𝙸 𝚃𝙸𝙴𝙽𝙴𝚂 𝚃𝚄 𝙿𝙴𝙳𝙸𝙳𝙾,🥳 𝙳𝙸𝚂𝙵𝚁𝚄𝚃𝙰𝙻𝙾‍💻
  `.trim()
  
await conn.sendHydrated(m.chat, info, wm, null, md, '𝐓𝐀𝐊𝐔-𝐁𝐎𝐓', null, null, [
 ['ೈ፝͜͡࿇𝑽𝐎𝐋𝑽𝐄𝐑 𝐀 𝐋𝐀 𝐋𝐈𝐒𝐓𝐀📃','/listmenu']
 ['ೈ፝͜͡࿇𝐂𝐎𝐍𝐓𝐀𝐂𝐓𝐎👤','/creator'],
], m,)  
}
handler.help = ['gitclone <url>']
handler.tags = ['downloader']
handler.command = /gitclone|clonarepo|clonarrepo|repoclonar/i
handler.limit = 3
handler.exp = 59
export default handler
