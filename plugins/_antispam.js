export async function all(m) {
    if (!m.message)
        return
    this.spam = this.spam ? this.spam : {}
    if (m.sender in this.spam) {
        this.spam[m.sender].count++
        if (m.messageTimestamp.toNumber() - this.spam[m.sender].lastspam > 10) {
            if (this.spam[m.sender].count > 10) {
                //global.db.data.users[m.sender].banned = true
                m.reply('*[❗𝐈𝐍𝐅𝐎❗]𝙽𝙾 𝙰𝙶𝙰𝚂 𝚂𝙿𝙰𝙼, 𝙾 𝚂𝙴𝚁𝙰𝚂 𝙴𝙻𝙸𝙼𝙸𝙽𝙰𝙳𝙾!!*')
            }
            this.spam[m.sender].count = 0
            this.spam[m.sender].lastspam = m.messageTimestamp.toNumber()
        }
    }
    else
        this.spam[m.sender] = {
            jid: m.sender,
            count: 0,
            lastspam: 0
        }
}