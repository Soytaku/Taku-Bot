import { cpus as _cpus, totalmem, freemem } from 'os'
import util from 'util'
import { performance } from 'perf_hooks'
import { sizeFormatter } from 'human-readable'
let format = sizeFormatter({
  std: 'JEDEC', // 'SI' (default) | 'IEC' | 'JEDEC'
  decimalPlaces: 2,
  keepTrailingZeroes: false,
  render: (literal, symbol) => `${literal} ${symbol}B`,
})
let handler = async (m, { conn }) => {
  const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats)
  const groupsIn = chats.filter(([id]) => id.endsWith('@g.us')) //groups.filter(v => !v.read_only)
  const used = process.memoryUsage()
  const cpus = _cpus().map(cpu => {
    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
    return cpu
  })
  const cpu = cpus.reduce((last, cpu, _, { length }) => {
    last.total += cpu.total
    last.speed += cpu.speed / length
    last.times.user += cpu.times.user
    last.times.nice += cpu.times.nice
    last.times.sys += cpu.times.sys
    last.times.idle += cpu.times.idle
    last.times.irq += cpu.times.irq
    return last
  }, {
    speed: 0,
    total: 0,
    times: {
      user: 0,
      nice: 0,
      sys: 0,
      idle: 0,
      irq: 0
    }
  })
  let old = performance.now()
  await m.reply('_𝚅𝙴𝙻𝙾𝙲𝙸𝙳𝙰𝙳 𝙳𝙴𝙻 𝙱𝙾𝚃...')
  let neww = performance.now()
  let speed = neww - old
  m.reply(`
🚀𝚅𝙴𝙻𝙾𝙲𝙸𝙳𝙰𝙳: ${speed} 𝚖𝚒𝚕𝚒𝚜𝚎𝚐𝚞𝚗𝚍𝚘𝚜

💬 𝙴𝚜𝚝𝚊𝚍𝚘 :
- *${groupsIn.length}* 𝙲𝚑𝚊𝚝𝚜 𝚐𝚛𝚞𝚙𝚊𝚕𝚎𝚜
- *${groupsIn.length}* 𝙶𝚛𝚞𝚙𝚘𝚜 𝚞𝚗𝚒𝚍𝚘𝚜
- *${groupsIn.length - groupsIn.length}* 𝙵𝚞𝚎𝚛𝚊 𝚍𝚎 𝚐𝚛𝚞𝚙𝚘𝚜
- *${chats.length - groupsIn.length}* 𝙲𝚑𝚊𝚝 𝚙𝚛𝚒𝚟𝚊𝚍𝚘
- *${chats.length}* 𝙲𝚑𝚊𝚝𝚜 𝚃𝚘𝚝𝚊𝚕𝚎𝚜

💻 *𝙸𝙽𝙵𝙾𝚁𝙼𝙰𝙲𝙸𝙾𝙽 𝙳𝙴𝙻 𝚂𝙴𝚁𝚅𝙸𝙳𝙾𝚁* :
RAM: ${format(totalmem() - freemem())} / ${format(totalmem())}

_NodeJS Memory Usage_
${'```' + Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v => v.length)), ' ')}: ${format(used[key])}`).join('\n') + '```'}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}

_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
`.trim())
}
handler.help = ['ping', 'velocidad','infobot']
handler.tags = ['herramientas']

handler.command = /^(ping|velocidad|infobot)$/i
export default handler