/**
 * Handle groups participants update
 * @param {import('@adiwajshing/baileys').BaileysEventMap<unknown>['group-participants.update']} groupsUpdate 
 */
export async function participantsUpdate({ id, participants, action }) {
   if (opts['self'])
       return
   // if (id in conn.chats) return // First login will spam
   if (this.isInit)
       return
   if (global.db.data == null)
       await loadDatabase()
   let chat = global.db.data.chats[id] || {}
   let text = ''
   switch (action) {
       case 'add':
       case 'remove':
           if (chat.welcome) {
               let groupMetadata = await this.groupMetadata(id) || (conn.chats[id] || {}).metadata
               for (let user of participants) {
                   let pp = './src/avatar_contact.png'
                   try {
                       pp = await this.profilePictureUrl(user, 'image')
                   } catch (e) {
                   } finally {
                       text = (action === 'add' ? (chat.sWelcome || this.welcome || conn.welcome || ' *𝙷𝚘𝚕𝚊𝚊,!!✨👋🏻 @user 𝙱𝙸𝙴𝙽𝚅𝙴𝙽𝙸𝙳𝙾/𝙰 𝚊𝚕 𝚐𝚛𝚞𝚙𝚘!!🥳*').replace('@subject', await this.getName(id)).replace('@desc', groupMetadata.desc?.toString() || 'unknow') :
                           (chat.sBye || this.bye || conn.bye || ' *𝙰𝚂𝚃𝙰 𝙻𝙰 𝚅𝙸𝚂𝚃𝙰 @user 𝙱𝙰𝙱𝚈👋🏻*')).replace('@user', '@' + user.split('@')[0])
                       this.sendFile(id, pp, 'pp.jpg', text, null, false, { mentions: [user] })
                   }
               }
           }
           break
       case 'promote':
           text = (chat.sPromote || this.spromote || conn.spromote || ' *𝙰𝚃𝙴𝙽𝙲𝙸𝙾𝙽!!📣 @user 𝙰𝙷𝙾𝚁𝙰 𝙴𝚂 𝙰𝙳𝙼𝙸𝚂 𝙳𝙴𝙻 𝙶𝚁𝚄𝙿𝙾👑*')
       case 'demote':
           if (!text)
               text = (chat.sDemote || this.sdemote || conn.sdemote || ' *𝙾𝙷 𝙽𝙾,!!😬 @user 𝚈𝙰 𝙽𝙾 𝙴𝚁𝙴𝚂 𝙰𝙳𝙼𝙸𝙽𝚂*')
           text = text.replace('@user', '@' + participants[0].split('@')[0])
           if (chat.detect)
               this.sendMessage(id, { text, mentions: this.parseMention(text) })
           break;
   }
}
