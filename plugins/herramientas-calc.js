let handler = async (m, { conn, text }) => {
  let id = m.chat
  conn.math = conn.math ? conn.math : {}
  if (id in conn.math) {
    clearTimeout(conn.math[id][3])
    delete conn.math[id]
    m.reply('π·πππ... ππππππ?π«₯')
  }
  let val = text
    .replace(/[^0-9\-\/+*ΓΓ·ΟEe()piPI/]/g, '')
    .replace(/Γ/g, '*')
    .replace(/Γ·/g, '/')
    .replace(/Ο|pi/gi, 'Math.PI')
    .replace(/e/gi, 'Math.E')
    .replace(/\/+/g, '/')
    .replace(/\++/g, '+')
    .replace(/-+/g, '-')
  let format = val
    .replace(/Math\.PI/g, 'Ο')
    .replace(/Math\.E/g, 'e')
    .replace(/\//g, 'Γ·')
    .replace(/\*Γ/g, 'Γ')
  try {
    console.log(val)
    let result = (new Function('return ' + val))()
    if (!result) throw result
    m.reply(`*${format}* = _${result}_`)
  } catch (e) {
    if (e == undefined) throw 'π²πΎπ½ππ΄π½πΈπ³πΎ?'
    throw '*[β] π΅πΎππΌπ°ππΎ πΈπ½π²πΎπππ΄π²ππΎ,* ππΎπ»πΎ 0-9 π ππΈπΌπ±πΎπ»πΎ -, +, *, /, Γ, Γ·, Ο, e, (, ) soportado'
  }
}
handler.help = ['calc <expresion>']
handler.tags = ['herramientas']
handler.command = /^(calc(ulat(e|or))?|kalk(ulator)?)$/i
handler.exp = 5

export default handler
