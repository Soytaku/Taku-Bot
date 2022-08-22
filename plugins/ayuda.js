

let handler = async (m, { conn }) => {

    let info1 = '𝙰𝚈𝚄𝙳𝙰 𝙳𝙴𝙻 𝙱𝙾𝚃'


    let info
        = `
*𝙸𝙽𝙵𝙾𝚁𝙼𝙰𝙲𝙸𝙾𝙽 𝙳𝙴𝙻 𝙱𝙾𝚃*
    
╭─[ 𝐓𝐀𝐊𝐔-𝐁𝐎𝐓 ]
│ *➤ 𝙷𝙾𝙻𝙰 ${name}*
│
│ *ミ🤖 𝙴𝚂𝚃𝙰𝙳𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃 🤖彡*
│ *=> 𝙱𝙾𝚃 𝙰𝙲𝚃𝙸𝚅𝙾 ✅*
│ *=> 𝙱𝙾𝚃 𝙳𝙴 𝚄𝚂𝙾 𝙿𝚄𝙱𝙻𝙸𝙲𝙾 ✅*
│ *=> 𝚃𝙸𝙴𝙼𝙿𝙾 𝙰𝙲𝚃𝙸𝚅𝙾: ${uptime}*
╰───────────────
    
*¿𝚀𝚄𝙴 𝙴𝚂 𝚄𝙽 𝙱𝙾𝚃?*
    
un Bot de WhatsApp es una inteligencia  artificial con la cual podras interactuar 
a travez de comandos que puedes ver escribiendo .menu, estos comandos son capaces 
de realizar diversas tareas como descargar música, videos, crear stickers, descarga de 
imagenes etc. recuerda que cada comando deve ser ejecutado con su prefijo . antes de escribirlo, ejemplo .aesthetic.
si intentas poner un comando que no es del Bot este simplemente  no responderá, asi que revisa bien el menu de comandos disponibles
  
    
*𝙵𝙰𝙻𝙻𝙾𝚂 𝙾 𝙻𝙴𝙽𝚃𝙸𝚃𝚄𝙳 𝙳𝙴 𝚁𝙴𝚂𝙿𝚄𝙴𝚂𝚃𝙰𝚂 𝙳𝙴 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂:*
    
Si bien el Bot no esta activo las 24 horas del dia pero puede que en determinado momento el Bot deje de funcionar por unos minutos si pasa mas de 10 minutos tienes que ser pasiciente, el Bot volvera. Tambien puede que varios Comandos no funcionen debido a mala respuesta del servidor, si no Funciona simplemente  intenta en otro momento.
    
*𝙲𝚁𝙴𝙰𝙳𝙾𝚁:*
    
Este Bot Fue Creado con partes de repositorios de hotros Bots, editado/creado por TAKU programador novato. ;)

*𝙻𝙸𝙼𝙸𝚃𝙴𝚂*

para envitar abusos del Bot, Este tiene un Sistema de limites el cual te consumiran segun el comando ejecutado, Por defecto sé otorgan 15 Limites por usuarios Pero Puedes obtener mas al Dia usando el comando .reclamarxp, una vez hecho ésto ejecutar el comando .buyall para obtener más límites. Recuerda que solo es posible una vez al dia asi que usalo sabiamente. De igual manera si eres activo e interactuas con el Bot podrás comprar mas limites al ganar mas EXP.
EXO = experiencia de uso del Bot
    
*𝙴𝙽𝚃𝚁𝙰𝚁 𝙰 𝙶𝚁𝚄𝙿𝙾𝚂 𝙾 𝚄𝚂𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃 𝙴𝙽 𝙿𝚅*
    
se admite usar el Bot en privado, si basa a invitar al Bot a tu grupo, el Creador Owner Del Bot, Tiene que ser admins.
    
*𝚁𝙴𝙿𝙾𝚂𝙸𝚃𝙾𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*
 
El repositorio Del Bot sera visto en breve...

*𝚂𝚄𝙱 𝙱𝙾𝚃𝚂*

Los comandos  .jadibot, .getcode, .stopjadibot no estan abilitados en este Bot

 *𝙳𝙸𝚂𝙵𝚁𝚄𝚃𝙰 𝙳𝙴𝙻 𝙱𝙾𝚃*
BY Taku-Bot/Taku ;)
`
    conn.sendButton(m.chat, info1, info, author, [['𝙼𝙴𝙽𝚄💬', `.menu`]], m)
}


handler.customPrefix = /terminos|ayuda|infobot|informacion|dildo|botmorto/i
handler.command = new RegExp
handler.help = ['ayuda']
handler.tags = ['main']
handler.fail = null
export default handler

