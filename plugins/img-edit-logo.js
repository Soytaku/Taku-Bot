import axios from 'axios'
let split = '|'
let handler = async (m, { conn, args: [effect], text: txt, usedPrefix, command, name }) => {
if (!effect) throw '*𝙰𝙿𝚁𝙴𝙽𝙳𝙴 𝙰 𝙲𝚁𝙴𝙰𝚁 𝚃𝚄 𝙻𝙾𝙶𝙾📝* 𝚄𝚂𝙰 𝙲𝙾𝙼𝙾 𝙴𝙹𝙴𝙼𝙿𝙻𝙾:*\n\n—#logo (efecto) (texto)_\n\n*𝙴𝙹𝙴𝙼𝙿𝙻𝙾 𝙳𝙴 𝚄𝚂𝙾*\n\n—#logo matrix Mondongo_\n\n*𝙰𝚕𝚐𝚞𝚗𝚘𝚜 𝚕𝚘𝚐𝚘𝚜 𝚞𝚜𝚊𝚗 𝚍𝚘𝚋𝚕𝚎 𝚝𝚎𝚡𝚝𝚘 𝚎𝚕 𝚖𝚘𝚍𝚘 𝚍𝚎 𝚞𝚜𝚘 𝚎𝚜*\n\n—#logo (efecto) (texto1|texto2)_\n\n*𝙴𝙹𝙴𝙼𝙿𝙻𝙾 𝙳𝙴 𝚄𝚂𝙾*\n\n—#logo porhub Mondongo|Goku\n\n*<𝙰𝚚𝚞𝚒 𝚝𝚒𝚎𝚗𝚎𝚜 𝚕𝚊 𝚕𝚒𝚜𝚝𝚊 𝚃𝙾𝙿 𝚕𝚘𝚐𝚘𝚜 𝚍𝚎 𝚝𝚎𝚡𝚝𝚙𝚛𝚘/>*\n\nꦿ̣〬↯✶🍁#logo ' + effects.map(v => v.title).join('\nꦿ̣〬↯✶🍁#logo ')
effect = effect.toLowerCase()
if (!effects.find(v => (new RegExp(v.title, 'gi')).test(effect))) throw `*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙴𝙵𝙴𝙲𝚃𝙾 𝙳𝙴 𝙻𝙾𝙶𝙾 𝚀𝚄𝙴 𝙼𝙴𝙽𝙲𝙸𝙾𝙽𝙰𝚂* ${effect} *𝙽𝙾 𝙴𝚂𝚃𝙰 𝙳𝙸𝚂𝙿𝙾𝙽𝙸𝙱𝙻𝙴...*`
let text = txt.replace(new RegExp(effect, 'gi'), '').trimStart()
if (text.includes(split)) text = text.split(split)
text = Array.isArray(text) ? text : [text]
let res = await textpro(effect, ...text)
if (typeof res == 'number') throw res == -1 ? `*[❗𝐈𝐍𝐅𝐎❗] 𝚁𝙴𝚅𝙸𝚂𝙰 𝙱𝙸𝙴𝙽 𝙲𝙾𝙼𝙾 𝚂𝙴 𝙴𝚂𝙲𝚁𝙸𝙱𝙴 𝙲𝙾𝚁𝚁𝙴𝙲𝚃𝙰𝙼𝙴𝙽𝚃𝙴 𝙴𝙻 𝙴𝙵𝙴𝙲𝚃𝙾` : `*[❗]  𝙴𝚂𝚃𝙴 𝙻𝙾𝙶𝙾 𝙴𝚂 𝙳𝙴 𝙳𝙾𝙱𝙻𝙴 𝚃𝙴𝚇𝚃𝙾, 𝙿𝙰𝚁𝙰 𝚄𝚂𝙰𝚁 𝙲𝙾𝚁𝚁𝙴𝙲𝚃𝙰𝙼𝙴𝙽𝚃𝙴, 𝙴𝚂𝙲𝚁𝙸𝙱𝙴* ${usedPrefix + command} ${effect} ${new Array(res).fill('texto').map((v, i) => v + (i ? i + 1 : '')).join('|')}*`
let result = await axios.get(res, {
responseType: 'arraybuffer'
})
await conn.sendFile(m.chat, result.data, 'Error.jpg', `*✨𝙰𝚀𝚄𝙸 𝙴𝚂𝚃𝙰 𝚃𝚄 𝙻𝙾𝙶𝙾 𝙱𝚈 𝚃𝙰𝙺𝚄.📝👈🏻*\n*𝙀𝙛𝙚𝙘𝙩𝙤: ${effect}\n${author}*`, m)
}
handler.help = ['logo']
handler.tags = ['img edit']
handler.command = /^(logo|logos)$/i
export default handler

import formData from 'form-data'
import fetch from 'node-fetch'
import cheerio from 'cheerio'
var effects = [
  {
    "title": "matrix",
    "url": "https://textpro.me/matrix-style-text-effect-online-884.html"
  },
  {
    "title": "glitch",
    "url": "https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html"
  },
  {
    "title": "glow1",
    "url": "https://textpro.me/free-advanced-glow-text-effect-873.html"
  },
  {
    "title": "trueno",
    "url": "https://textpro.me/create-thunder-text-effect-online-881.html"
  },
   {
    "title": "neonverde",
    "url": "https://textpro.me/green-neon-text-effect-874.html"
  },
  {
    "title": "avengers",
    "url": "https://textpro.me/create-3d-avengers-logo-online-974.html"
  },
  {
    "title": "blackpink",
    "url": "https://textpro.me/create-blackpink-logo-style-online-1001.html"
  },
  {
    "title": "pornhub",
    "url": "https://textpro.me/pornhub-style-logo-online-generator-free-977.html"
  },
  {
    "title": "colorled",
    "url": "https://textpro.me/color-led-display-screen-text-effect-1059.html"
  },
  {
    "title": "neonrosa",
    "url": "https://textpro.me/create-glowing-neon-light-text-effect-online-free-1061.html"
  },
  {
    "title": "glitch2",
    "url": "https://textpro.me/create-a-glitch-text-effect-online-free-1026.html"
  },
  {
    "title": "harrypotter",
    "url": "https://textpro.me/create-harry-potter-text-effect-online-1025.html"
  },
  {
    "title": "papelcut",
    "url": "https://textpro.me/create-art-paper-cut-text-effect-online-1022.html"
  },
  {
    "title": "transformer",
    "url": "https://textpro.me/create-a-transformer-text-effect-online-1035.html"
  },
  {
    "title": "acuacolor",
    "url": "https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html"
  },
  {
    "title": "neondevil",
    "url": "https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html"
  },
  {
    "title": "bajoagua",
    "url": "https://textpro.me/3d-underwater-text-effect-generator-online-1013.html"
  },
  {
    "title": "oso",
    "url": "https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html"
  },
  {
    "title": "futuristico",
    "url": "https://textpro.me/create-a-futuristic-technology-neon-light-text-effect-1006.html"
  },
  {
    "title": "grafiti",
    "url": "https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html"
  },
  {
    "title": "luxury",
    "url": "https://textpro.me/3d-luxury-gold-text-effect-online-1003.html"
  },
  {
    "title": "grafiti",
    "url": "https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html"
  },
  {
    "title": "playa",
    "url": "https://textpro.me/sand-engraved-3d-text-effect-989.html"
  },
  {
    "title": "ancient",
    "url": "https://textpro.me/3d-golden-ancient-text-effect-online-free-1060.html"
  },
  {
    "title": "galaxianeon",
    "url": "https://textpro.me/neon-light-text-effect-with-galaxy-style-981.html"
  },
  {
    "title": "terror",
    "url": "https://textpro.me/blood-text-on-the-frosted-glass-941.html"
  },
  {
    "title": "lobogalaxia",
    "url": "https://textpro.me/create-wolf-logo-galaxy-online-936.html"
  },
  {
    "title": "ninja",
    "url": "https://textpro.me/create-ninja-logo-online-935.html"
  },
  {
    "title": "joker",
    "url": "https://textpro.me/create-logo-joker-online-934.html"
  },
  {
    "title": "grafiti",
    "url": "https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html"
  },
  {
    "title": "destellos",
    "url": "https://textpro.me/firework-sparkle-text-effect-930.html"
  },
  {
    "title": "bokeh",
    "url": "https://textpro.me/bokeh-text-effect-876.html"
  },
  {
    "title": "lluvia",
    "url": "https://textpro.me/dropwater-text-effect-872.html"
  },
  {
    "title": "batman",
    "url": "https://textpro.me/make-a-batman-logo-online-free-1066.html"
  },
  {
    "title": "glowpro",
    "url": "https://textpro.me/create-light-glow-sliced-text-effect-online-1068.html"
  },
  
]
async function textpro(effect, ...texts) {
  texts = texts.filter(v => v)
  let eff = effects.find(v => (new RegExp(v.title, 'gi')).test(effect))
  if (!eff) return -1
  let resCookie = await fetch(eff.url, {
    headers: {
      "User-Agent": "GoogleBot",
    },
  })
  let html = await resCookie.text()
  const $$$ = cheerio.load(html)
  let textRequire = [!!$$$('#text-0').length, !!$$$('#text-1').length, !!$$$('#text-2').length].filter(v => v)
  // console.log({ textRequire, texts, textRequireLength: textRequire.length, textsLength: texts.length })
  if (textRequire.length > texts.length) return textRequire.length
  let cookieParse = (cookie, query) => cookie.includes(query + '=') ? cookie.split(query + '=')[1].split(';')[0] : 'undefined'
  let hasilcookie = resCookie.headers
    .get("set-cookie")
  hasilcookie = {
    __cfduid: cookieParse(hasilcookie, '__cfduid'),
    PHPSESSID: cookieParse(hasilcookie, 'PHPSESSID')
  }
  hasilcookie = Object.entries(hasilcookie).map(([nama, value]) => nama + '=' + value).join("; ")
  const $ = cheerio.load(html)
  const token = $('input[name="token"]').attr("value")
  const form = new formData()
  for (let text of texts) form.append("text[]", text)
  form.append("submit", "Go")
  form.append("token", token)
  form.append("build_server", "https://textpro.me")
  form.append("build_server_id", 1)
  let resUrl = await fetch(eff.url, {
    method: "POST",
    headers: {
      Accept: "*/*",
      "Accept-Language": "en-US,en;q=0.9",
      "User-Agent": "GoogleBot",
      Cookie: hasilcookie,
      ...form.getHeaders(),
    },
    body: form.getBuffer(),
  })
  const $$ = cheerio.load(await resUrl.text())
  let token2 = JSON.parse($$('#form_value').eq(1).text())
  let encode = encodeURIComponent;
  let body = Object.keys(token2)
    .map((key) => {
      let vals = token2[key];
      let isArray = Array.isArray(vals);
      let keys = encode(key + (isArray ? "[]" : ""));
      if (!isArray) vals = [vals];
      let out = [];
      for (let valq of vals) out.push(keys + "=" + encode(valq));
      return out.join("&");
    })
    .join("&")
  let resImgUrl = await fetch(`https://textpro.me/effect/create-image?${body}`, {
    headers: {
      Accept: "*/*",
      "Accept-Language": "en-US,en;q=0.9",
      "User-Agent": "GoogleBot",
      Cookie: hasilcookie,
    }
  })
  let results = await resImgUrl.json()
  return 'https://textpro.me' + results.fullsize_image
}
