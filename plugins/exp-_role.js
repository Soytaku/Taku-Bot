import handler from "./exp-profile.js"

const roles = {
  /*
  'Nombre del rol': <Nivel mínimo para obtener este rol>
  */
  '𝙿𝚛𝚒𝚗𝚌𝚒𝚙𝚒𝚊𝚗𝚝𝚎': 0,
  '𝙿𝚊𝚓𝚎𝚛𝚘 𝚍𝚎𝚕 𝚐𝚛𝚞𝚙𝚘': 100,
  '𝙲𝚒𝚞𝚍𝚊𝚍𝚊𝚗𝚘 𝚛𝚎𝚜𝚙𝚘𝚗𝚜𝚊𝚋𝚕𝚎': 200,
  '𝙿𝚘𝚕𝚒𝚝𝚒𝚌𝚘 𝚌𝚘𝚛𝚛𝚞𝚙𝚝𝚘': 300,
  '𝙳𝚞𝚎ñ𝚘 𝚍𝚎 𝚘𝚡𝚡𝚘': 400,
  '𝙴𝚡𝚙𝚕𝚘𝚝𝚊𝚍𝚘𝚛 𝚍𝚎 𝚊𝚜𝚊𝚕𝚊𝚛𝚒𝚊𝚍𝚘𝚜': 500,
  '𝙼𝚊𝚎𝚜𝚝𝚛𝚘 𝚍𝚎𝚕 𝚜𝚎𝚡𝚘': 600,
  '𝙼𝚊𝚎𝚜𝚝𝚛𝚘 𝚍𝚎 𝚕𝚊 𝚐𝚊𝚕𝚊𝚡𝚒𝚊': 800,
  '𝙻𝚎𝚢𝚎𝚗𝚍𝚊 𝚍𝚎𝚕 𝚐𝚛𝚞𝚙𝚘': 9000,
  '𝙳𝚒𝚘𝚜 𝚍𝚎𝚕 𝚐𝚛𝚞𝚙𝚘': 9000000
}

handler.exports = {
  before(m) {
    let user = global.db.data.users[m.sender]
    let level = user.level
    let role = (Object.entries(roles).sort((a, b) => b[1] - a[1]).find(([,minLevel]) => level >= minLevel) || Object.entries(roles)[0])[0]
    user.role = role
    return true
  }
}

// taku estuvo aqui