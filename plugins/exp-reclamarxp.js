const free = 1000
const prem = 50000
let handler = async (m, { isPrems }) => {
  let time = global.db.data.users[m.sender].lastclaim + 86400000
  if (new Date - global.db.data.users[m.sender].lastclaim < 86400000) throw `π·π°π ππ΄π²π»π°πΌπ°π³πΎ ππ ππ΄π²π»π°πΌπΎ π³πΈπ°ππΈπΎ\nππππ»ππ΄ π° ππ΄π²π»π°πΌπ°π π³π΄ π½ππ΄ππΎ π΄π½  ${msToTime(time - new Date())} β`
  global.db.data.users[m.sender].exp += isPrems ? prem : free
  m.reply(`+${isPrems ? prem : free} XP`)
  global.db.data.users[m.sender].lastclaim = new Date * 1
}
handler.help = ['reclamarxp <reclama tu exp diario>']
handler.tags = ['exp y limites']
handler.command = /^(daily|claim|reclamarxp)$/i
handler.owner = false
handler.mods = false 
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0

export default handler

function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

  hours = (hours < 10) ? "0" + hours : hours
  minutes = (minutes < 10) ? "0" + minutes : minutes
  seconds = (seconds < 10) ? "0" + seconds : seconds

  return hours + "horas" + minutes + "minutos"
}