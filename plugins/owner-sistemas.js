
let handler = async (m, { conn }) => {

let text = `*𝚂𝙸𝚂𝚃𝙴𝙼𝙰𝚂 𝙳𝙴𝙻 𝙱𝙾𝚃, 𝙰𝙲𝚃𝙸𝚅𝙰𝚁 𝙾 𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰𝚁*`


const sections = [
{
 title: `-*𝚂𝙸𝚂𝚃𝙴𝙼𝙰𝚂 𝙳𝙴𝙻 𝙱𝙾𝚃*-`,
 rows: [
{title: "│♠️│𝙰𝙲𝚃𝙸𝚅𝙰𝚁 𝙴𝙻 𝚁𝙴𝚂𝚃𝚁𝙸𝙲𝚃", rowId: '.enable restrict', description:'𝙿𝚞𝚕𝚜𝚊 𝚊𝚚𝚞𝚒 𝚙𝚊𝚛𝚊 *𝙰𝙲𝚃𝙸𝚅𝙰𝚁* 𝚎𝚕 𝚜𝚒𝚜𝚝𝚎𝚖𝚊 𝚁𝙴𝚂𝚃𝚁𝙸𝙲𝚃' },
{title: "│♣️│𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰𝚁 𝙴𝙻 𝚁𝙴𝚂𝚃𝚁𝙸𝙲𝚃", rowId: '.disable restrict', description:'𝙿𝚞𝚕𝚜𝚊 𝚊𝚚𝚞𝚒 𝙿𝚊𝚛𝚊 *𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰𝚁* 𝚎𝚕 𝚜𝚒𝚜𝚝𝚎𝚖𝚊 𝚁𝙴𝚂𝚃𝚁𝙸𝙲𝚃' },   
{title: "│🪀│𝙰𝙲𝚃𝙸𝚅𝙰𝚁 𝙴𝙻 𝙰𝙽𝚃𝙸𝙻𝙸𝙽𝙺", rowId: '.enable antilink', description:'𝙿𝚞𝚕𝚜𝚊 𝚊𝚚𝚞𝚒 𝚙𝚊𝚛𝚊 *𝙰𝙲𝚃𝙸𝚅𝙰𝚁* 𝚎𝚕 𝚜𝚒𝚜𝚝𝚎𝚖𝚊 𝙰𝙽𝚃𝙸𝙻𝙸𝙽𝙺' },
{title: "│🪀│𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰𝚁 𝙴𝙻 𝙰𝙽𝚃𝙸𝙻𝙸𝙽𝙺", rowId: '.disable antilink', description:'𝙿𝚞𝚕𝚜𝚊 𝚊𝚚𝚞𝚒 𝚙𝚊𝚛𝚊 *𝙰𝙲𝚃𝙸𝚅𝙰𝚁* 𝚎𝚕 𝚜𝚒𝚜𝚝𝚎𝚖𝚊 𝙰𝙽𝚃𝙸𝙻𝙸𝙽𝙺' },
{title: "*│🗳️│𝙰𝙽𝚃𝙸𝚂𝙿𝙰𝙼 𝙰𝙲𝚃𝙸𝚅𝙰𝙳𝙾*", rowId: '.enable antispam', description:'𝙿𝚞𝚕𝚜𝚊 𝚊𝚚𝚞𝚒 𝚙𝚊𝚛𝚊 *𝙰𝙲𝚃𝙸𝚅𝙰𝚁* 𝚎𝚕 𝚜𝚒𝚜𝚝𝚎𝚖𝚊 𝙰𝙽𝚃𝙸𝚂𝙿𝙰𝙼' },
{title: "*│🗳️│𝙰𝙽𝚃𝙸𝚂𝙿𝙰𝙼 𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰𝙳𝙾*", rowId: '.disable antispam', description:'𝙿𝚞𝚕𝚜𝚊 𝚊𝚚𝚞𝚒 𝚙𝚊𝚛𝚊 *𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰𝚁* 𝚎𝚕 𝚜𝚒𝚜𝚝𝚎𝚖𝚊 𝙰𝙽𝚃𝙸𝚂𝙿𝙰𝙼' },
{title: "*││🥵│𝙰𝙲𝚃𝙸𝚅𝙰𝚁 𝙼𝙾𝙳𝙾 𝙷𝙾𝚁𝙽𝚈│𝙼𝙾𝙳𝙾𝙷𝙾𝚁𝙽𝚈 𝙰𝙲𝚃𝙸𝚅𝙾*", rowId: '.enable modohorny', description:'𝙿𝚞𝚕𝚜𝚊 𝚊𝚚𝚞𝚒 𝚙𝚊𝚛𝚊 *𝙰𝙲𝚃𝙸𝚅𝙰𝚁* 𝚎𝚕 𝚜𝚒𝚜𝚝𝚎𝚖𝚊 𝙰𝙽𝚃𝙾𝙹𝙰𝚁' },
{title: "*│🥶│𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰𝚁 𝙼𝙾𝙳𝙾 𝙷𝙾𝚁𝙽𝚈", rowId: '.disable modohorny', description:'𝙿𝚞𝚕𝚜𝚊 𝚊𝚚𝚞𝚒 𝚙𝚊𝚛𝚊 *𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰𝚁* 𝚎𝚕 𝚜𝚒𝚜𝚝𝚎𝚖𝚊 𝙰𝙽𝚃𝙾𝙹𝙰𝚁' },
{title: "*│⚠️│𝚂.𝙿𝚄𝙱𝙻𝙸𝙲𝙾 𝙰𝙲𝚃𝙸𝚅𝙾*", rowId: '.enable public', description:'𝙿𝚞𝚕𝚜𝚊 𝚊𝚚𝚞𝚒 𝚙𝚊𝚛𝚊 *𝙰𝙲𝚃𝙸𝚅𝙰𝚁* 𝚎𝚕 𝚜𝚒𝚜𝚝𝚎𝚖𝚊 𝚙𝚞𝚋𝚕𝚒𝚌𝚘' },
{title: "「*│⚠️│𝚂.𝙿𝚄𝙱𝙻𝙸𝙲𝙾 𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰𝙳𝙾*」", rowId: '.disable public', description:'𝙿𝚞𝚕𝚜𝚊 𝚊𝚚𝚞𝚒 𝚙𝚊𝚛𝚊 *𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰𝚁* 𝚎𝚕 𝚜𝚒𝚜𝚝𝚎𝚖𝚊 𝚙𝚞𝚋𝚕𝚒𝚌𝚘'},
{title: "*│💬│𝚂𝙾𝙻𝙾 𝙲.𝙿𝚁𝙸𝚅𝙰𝙳𝙾 𝙰𝙲𝚃𝙸𝚅𝙰𝙳𝙾*", rowId: '.enable pconly', description:'𝙿𝚞𝚕𝚜𝚊 𝚊𝚚𝚞𝚒 𝚙𝚊𝚛𝚊 *𝙰𝙲𝚃𝙸𝚅𝙰𝚁* 𝚎𝚕 𝚜𝚒𝚜𝚝𝚎𝚖𝚊 𝚍𝚎 𝚂𝙾𝙻𝙾 𝙲𝙷𝙰𝚃 𝙿𝚁𝙸𝚅𝙰𝙳𝙾' },
{title: "*│💬│𝚂𝙾𝙻𝙾 𝙲.𝙿𝚁𝙸𝚅𝙰𝙳𝙾 𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰𝙳𝙾*", rowId: '.disable pconly', description:'𝙿𝚞𝚕𝚜𝚊 𝚊𝚚𝚞𝚒 𝚙𝚊𝚛𝚊 *𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰𝚁* 𝚎𝚕 𝚜𝚒𝚜𝚝𝚎𝚖𝚊 𝚂𝙾𝙻𝙾 𝙲𝙷𝙰𝚃 𝙿𝚁𝙸𝚅𝙰𝙳𝙾' }, 
{title: "*│🏢│𝙶𝚁𝚄𝙿𝙾 𝙰𝙲𝚃𝙸𝚅𝙰𝙳𝙾*", rowId: '.enable gconly', description:'Pulsa aqui para *ACTIVAR* el sistema SOLO CHATS GRUPALES.'
},
{title: "*│🏢│𝙶𝚁𝚄𝙿𝙾 𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰𝙳𝙾*", rowId: '.disable gconly', description:'𝙿𝚞𝚕𝚜𝚊 𝚊𝚚𝚞𝚒 𝚙𝚊𝚛𝚊 *𝙰𝙲𝚃𝙸𝚅𝙰𝚁* 𝚎𝚕 𝚜𝚒𝚜𝚝𝚎𝚖𝚊 𝚂𝙾𝙻𝙾 𝙲𝙷𝙰𝚃𝚂 𝙶𝚁𝚄𝙿𝙰𝙻𝙴𝚂.'
},
{title: "*│🌇│𝙰𝙲𝚃𝙸𝚅𝙰𝚁 𝙻𝙰 𝙱𝙸𝙴𝙽𝚅𝙴𝙽𝙸𝙳𝙰*", rowId: '.enable welcome', description:'𝙿𝚞𝚕𝚜𝚊 𝚊𝚚𝚞𝚒 𝚙𝚊𝚛𝚊 *𝙰𝙲𝚃𝙸𝚅𝙰𝚁* 𝚎𝚕 𝚜𝚒𝚜𝚝𝚎𝚖𝚊 𝚍𝚎 𝚋𝚒𝚎𝚗𝚟𝚎𝚗𝚒𝚍𝚊 𝚊𝚞𝚝𝚘𝚖𝚊𝚝𝚒𝚌𝚘' }, 
{title: "*│🌌️│𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰𝚁 𝙻𝙰 𝙱𝙸𝙴𝙽𝚅𝙴𝙽𝙸𝙳𝙰*", rowId: '.disable welcome', description:'𝙿𝚞𝚕𝚜𝚊 𝚊𝚚𝚞𝚒 𝚙𝚊𝚛𝚊 *𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰𝚁* 𝚎𝚕 𝚜𝚒𝚜𝚝𝚎𝚖𝚊 𝚍𝚎 𝚋𝚒𝚎𝚗𝚟𝚎𝚗𝚒𝚍𝚊 𝚊𝚞𝚝𝚘𝚖𝚊𝚝𝚒𝚌𝚘' },
{title: "*│✨│𝙰𝚄𝚃𝙾𝚁𝙴𝙰𝙳 𝙰𝙲𝚃𝙸𝚅𝙰𝙳𝙾*", rowId: '.enable autoread', description:'𝙿𝚞𝚕𝚜𝚊 𝚊𝚚𝚞𝚒 𝚙𝚊𝚛𝚊 *𝙰𝙲𝚃𝙸𝚅𝙰𝚁* 𝚎𝚕 𝚜𝚒𝚜𝚝𝚎𝚖𝚊 𝚍𝚎 𝚕𝚎𝚒𝚍𝚊 𝚍𝚎 𝚖𝚎𝚗𝚜𝚊𝚓𝚎𝚜 𝚊𝚞𝚝𝚘𝚖𝚊𝚝𝚒𝚌𝚘' },  
{title: "*│✨│𝙰𝚄𝚃𝙾𝚁𝙴𝙰𝙳 𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰𝙳𝙾*", rowId: '.disable autoread', description:'𝙿𝚞𝚕𝚜𝚊 𝚊𝚚𝚞𝚒 𝚙𝚊𝚛𝚊 *𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰𝚁* 𝚎𝚕 𝚜𝚒𝚜𝚝𝚎𝚖𝚊 𝚍𝚎 𝚕𝚎𝚒𝚍𝚊 𝚍𝚎 𝚖𝚎𝚗𝚜𝚊𝚓𝚎𝚜 𝚊𝚞𝚝𝚘𝚖𝚊𝚝𝚒𝚌𝚘' }  
]}] 

const listMessage = {
    text: text,
    footer: author,
    title: '-*🤖𝚂𝙸𝚂𝚃𝙴𝙼𝙰𝚂 𝙳𝙴𝙻 𝙱𝙾𝚃🤖*-',
    buttonText: "*💟𝗣𝗨𝗟𝗦𝗔 𝗔𝗤𝗨𝗜💟*",
    sections
  }

await conn.sendMessage(m.chat, listMessage, author, m)
 




}



handler.help = ['sistemas']
handler.tags = ['owner menu'] 
handler.command = ['sistemas'] 

export default handler


// lista simple a la mano de SISTEMAS del bot, by odin locote