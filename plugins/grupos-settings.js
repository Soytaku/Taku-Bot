let handler = async (m, { conn, args, usedPrefix, command }) => {
    let isClose = { // Switch Case Like :v
        'open': 'not_announcement',
        'close': 'announcement',
    }[(args[0] || '')]
    if (isClose === undefined)
        throw `
*[β] π΅πΎππΌπ°ππΎ πΈπ½π²πΎπππ΄π²ππΎ* π΄πΉπ΄πΌπΏπ»πΎ:*
  *β ${usedPrefix + command} close*
  *β ${usedPrefix + command} open*
`.trim()
    await conn.groupSettingUpdate(m.chat, isClose)
}
handler.help = ['grupo *open / close*']
handler.tags = ['grupos']
handler.command = /^(grupo)$/i

handler.admin = true
handler.botAdmin = true

export default handler
