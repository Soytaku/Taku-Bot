let handler = async (m, { conn }) => {
    if (!m.quoted) throw '*[β] ΒΏπ³πΎπ½π³π΄ π΄πππ° π΄π» πΌπ΄π½ππ°πΉπ΄?'
    if (m.quoted.mtype !== 'viewOnceMessage') throw '*[β] π΄ππΎ π½πΎ π΄π ππ½ πΌπ΄π½ππ°πΉπ΄ viewOnce'
    const msg = await conn.loadMessage(m.quoted.id)
    if (!msg) throw '*[β] π½πΎ πΏππ΄π³πΎ π°π±ππΈπ πΌπ΄π½ππ°πΉπ΄π'
    await conn.copyNForward(m.chat, msg, true, { readViewOnce: true })
}

handler.help = ['readviewonce']
handler.tags = ['herramientas']
handler.command = /^readviewonce/i

export default handler