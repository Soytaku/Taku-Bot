
let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
  let isEnable = /true|enable|(turn)?on|1/i.test(command)
  let chat = global.db.data.chats[m.chat]
  let user = global.db.data.users[m.sender]
  let bot = global.db.data.settings[conn.user.jid] || {}
  let type = (args[0] || '').toLowerCase()
  let isAll = false, isUser = false
  switch (type) {
    case 'welcome':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn)
          throw false
        }
      } else if (!isAdmin) {
        global.dfail('admin', m, conn)
        throw false
      }
      chat.welcome = isEnable
      break
    // case 'detect':
    //   if (!m.isGroup) {
    //     if (!isOwner) {
    //       global.dfail('group', m, conn)
    //       throw false
    //     }
    //   } else if (!isAdmin) {
    //     global.dfail('admin', m, conn)
    //     throw false
    //   }
    //   chat.detect = isEnable
    //   break
    case 'delete':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.delete = isEnable
      break
    case 'antidelete':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.delete = !isEnable
      break
    // case 'autodelvn':
    //   if (m.isGroup) {
    //     if (!(isAdmin || isOwner)) {
    //       global.dfail('admin', m, conn)
    //       throw false
    //     }
    //   }
    //   chat.autodelvn = isEnable
    //   break
    // case 'document':
    //   chat.useDocument = isEnable
    //   break
    case 'public':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['self'] = !isEnable
      break
    case 'antilink':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiLink = isEnable
      break

      case 'antojar':
        if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
        global.dfail('admin', m, conn)
        throw false
        }}
        chat.antojar = isEnable          
        break

    case 'antispam':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antispam = isEnable
      break

    case 'autolevelup':

      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      user.autolevelup = isEnable
      break

    // case 'toxic':
    //   if (m.isGroup) {
    //     if (!(isAdmin || isOwner)) {
    //       global.dfail('admin', m, conn)
    //       throw false
    //     }
    //   }
    //   chat.antiToxic = !isEnable
    //   break
    // case 'antitoxic':
    //   if (m.isGroup) {
    //     if (!(isAdmin || isOwner)) {
    //       global.dfail('admin', m, conn)
    //       throw false
    //     }
    //   }
    //   chat.antiToxic = isEnable
    //   break
    // case 'mycontact':
    // case 'mycontacts':
    // case 'whitelistcontact':
    // case 'whitelistcontacts':
    // case 'whitelistmycontact':
    // case 'whitelistmycontacts':
    //   if (!isOwner) {
    //     global.dfail('owner', m, conn)
    //     throw false
    //   }
    //   conn.callWhitelistMode = isEnable
    //   break



    case 'restrict':
      isAll = true
      if (!isOwner) {
        global.dfail('owner', m, conn)
        throw false
      }
      bot.restrict = isEnable
      break
    case 'nyimak':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['nyimak'] = isEnable
      break
    case 'autoread':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['autoread'] = isEnable
      break
    case 'pconly':
    case 'privateonly':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['pconly'] = isEnable
      break
    case 'gconly':
    case 'grouponly':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['gconly'] = isEnable
      break
    case 'swonly':
    case 'statusonly':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['swonly'] = isEnable
      break
    default:
      if (!/[01]/.test(command)) return m.reply(`
╭─Lista de opciones──╮
│   
│ ✷; [welcome] ˎˊ- bienvenida y despedida
│ ✷; [public] ˎˊ- revertir disable
│ ✷; [autolevelup] ˎˊ-
│ ✷; [autoread] ˎˊ- auto leer
│ ✷; [gonly] ˎˊ- solo chat grupos
│ ✷; [pconly] ˎˊ- solo chat privado
│ ✷; [sconly] ˎˊ- ignorar all chat
│ ✷; [antojar] ˎˊ- ignorar all chat
│   
╰╥──────❍─

• Ejemplo de uso :
${usedPrefix}enable welcome
${usedPrefix}disable welcome
`.trim())
      throw false
  }
  conn.sendButton(m.chat, `𝚂𝙸𝚂𝚃𝙴𝙼𝙰: ${type} 
•𝙴𝚂𝚃𝙰: ${isEnable ? '𝙰𝙲𝚃𝙸𝚅𝙰𝙳𝙾☑' : '𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰𝙳𝙾❌'}
•𝙿𝙰𝚁𝙰: ${isAll ? '𝙴𝙻 𝙱𝙾𝚃' : isUser ? '' : '𝙴𝙻 𝙲𝙷𝙰𝚃'}`,
    author, null, [[`${isEnable ? '𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰𝚁 𝚂𝙸𝚂𝚃𝙴𝙼𝙰❌' : '𝙰𝙲𝚃𝙸𝚅𝙰𝚁 𝚂𝙸𝚂𝚃𝙴𝙼𝙰☑'}`,
    `${isEnable ? `.disable ${type}` : `.enable ${type}`}`]],m)
}

handler.help = ['enable <opcion>']
handler.tags = ['grupos', 'owner menu']
handler.command = /^((en|dis)able|(tru|fals)e|(turn)?o(n|ff)|[01])$/i
handler.isOwner = true

export default handler
