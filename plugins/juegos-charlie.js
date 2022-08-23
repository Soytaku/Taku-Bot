let handler  = async (m, { conn }) => {
  conn.reply(m.chat,`*┌────「 *𝙹𝚄𝙶𝚄𝙴𝙼𝙾𝚂 𝙰 𝙲𝙷𝙰𝚁𝙻𝙸𝙴 𝙲𝙷𝙰𝚁𝙻𝙸𝙴* 」─*\n*“${pickRandom(global.charlie)}”*\n*└────「💀☠」─*  
  ${author}
  `, m)
}
handler.help = ['charlie']
handler.tags = ['juegos']
handler.command = /^(charlie)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false 
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

export	default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

// charlie charlie by ElTaku :v 
global.charlie = [
"Si","No","Si","No", "Si","No", "Si","No", "Si","No",  
"Si","No","Si","No", "Si","No", "Si","No", "Si","No",  
"Si","No","Si","No", "Si","No", "Si","No", "Si","No",  
"Si","No","Si","No", "Si","No", "Si","No", "Si","No",  
"Si","No","Si","No", "Si","No", "Si","No", "Si","No",  
"Si","No","Si","No", "Si","No", "Si","No", "Si","No",  
"Si","No","Si","No", "Si","No", "Si","No", "Si","No",  
"Si","No","Si","No", "Si","No", "Si","No", "Si","No",  
"Si","No","Si","No", "Si","No", "Si","No", "Si","No",  
"Si","No","Si","No", "Si","No", "Si","No", "Si","No",  
"Si","No","Si","No", "Si","No", "Si","No", "Si","No",  
"Si","No","Si","No", "Si","No", "Si","No", "Si","No",  
"Si","No","Si","No", "Si","No", "Si","No", "Si","No",  
"Si","No","Si","No", "Si","No", "Si","No", "Si","No",  
"Si","No","Si","No", "Si","No", "Si","No", "Si","No",  
"Si","No","Si","No", "Si","No", "Si","No", "Si","No",  
"Si","No","Si","No", "Si","No", "Si","No", "Si","No",  
"Si","No","Si","No", "Si","No", "Si","No", "Si","No"
] 
