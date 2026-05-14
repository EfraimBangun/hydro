const chalk = require("chalk")
const fs = require("fs")

// ================= AUTO PRESENCE SETTINGS =================
global.autoTyping = true      // Auto typing in group chat
global.autoRecord = false     // Auto recording 
global.autoblockmorroco = false // Auto block Morocco numbers
global.wlcm = false           // Welcome message
global.autokickmorroco = false // Auto kick Morocco numbers
global.antispam = false       // Auto kick spammers

// ================= CHANNEL SETTINGS =================
global.channel = '120363422708762666@newsletter' // Your channel ID
global.channeln = 'Shares Tools And Project' // Your channel name

// ================= PROFILE SETTINGS =================
global.thumbnail = 'https://qu.ax/JlBJE.jpg'
global.ownername = '𝖣𝗁𝖺𝗇𝖷𝗓𝗓 - 𝖮𝖿𝖿𝗂𝖼𝗂𝖺𝗅'
global.owner = ['6287748834200'] // Also set in database folder
global.ownernomer = '6287748834200'
global.location = 'Indonesia'

// ================= SOCIAL MEDIA =================
global.ig = ''
global.tele = '@DhanXzzOffc'
global.ttowner = '@dhan0695'
global.socialm = 'TikTok: tiktok.com/@dhan0695'

// ================= PAYMENT SETTINGS =================
global.nodana = '6287748834200'
global.nogopay = '6287748834200'
global.noovo = false
global.andana = 'Nu***i'
global.angopay = 'Ai***N'
global.anovo = false

// ================= BOT SETTINGS =================
global.botname = "Hydro 🤖"
global.ownernumber = '6287748834200'
global.botnumber = '6287740720671'
global.ownerNumber = ["6287748834200@s.whatsapp.net"]
global.ownerweb = ""
global.websitex = ""
global.wagc = "https://chat.whatsapp.com/Luam69NFeldD1Ok4pH2mTE?mode=wwt"
global.saluran = "https://whatsapp.com/channel/0029Vb6UEvUG3R3eRWCxww0K"
global.themeemoji = '🏞️'
global.wm = "Hydro ||| WhatsApps Bots"
global.botscript = 'Dah gede nyari sc 🗿🖕'
global.packname = "Hydro"
global.author = "\n\n\n\n\nDibuat Oleh Hydro\nNo hape/wa : 6287740720671"
global.creator = "6287748834200@s.whatsapp.net"

// ================= PANEL SETTINGS =================
global.domain = 'https://danznano.biz.id'
global.apikey = 'ptla_XzQKlP026s4Tfbb85TStK30DGPJlNN2mfDXh77HFchb'
global.capikey = 'ptlc_dHqgrA1oZZ0n6AA4hiT2uCKGKHpKxU5xjL1bxAJPKDx'

// ================= SERVER SETTINGS =================
global.apiDigitalOcean = "-"
global.apikey2 = '-'
global.capikey2 = '-'
global.domain2 = '-'
global.docker2 = "ghcr.io/cekilpedia/vip:sanzubycekil"
global.eggsnya2 = '15'
global.location2 = '1'

// ================= OTP SETTINGS =================
global.virtuSimApiKey = 'k6R8Zfw1xGVBdgPvODLWtcie5hNyuS'
global.domainotp = "https://claudeotp.com/api"
global.apikeyotp = "a395f97fe99f4fad0e790d10af518b9a"
global.eggsnya = '15'
global.location3 = '1'
global.tekspushkon = ""
global.tekspushkonv2 = ""
global.tekspushkonv3 = ""
global.tekspushkonv4 = ""

// ================= MESSAGE SETTINGS =================
global.mess = {
   wait: "*Permintaanmu sedang diproses 💝*",
   success: "Yay! Bot berhasil 🎉",
   on: "*Yay! Nyala nih! 😝*",
   off: "*Ahh! Mati deh.. 😴*",
   query: {
       text: "*Teksnya mana? Aku kan gabisa baca pikiran kaka 😉*",
       link: "*Linknya dongg.. Aku gabisa tanpa link 😖*",
   },
   error: {
       fitur: "*Whoops!*\n> Eror nih.. laporkan ke owner agar diperbaiki 6287748834200 🙏",
   },
   only: {
       group: "*Eh, Kak! Fitur ini bisanya buat grup nihh 🫂*",
       private: "*Eh, Kak! Fitur ini cuman bisa dipake chat pribadi! 🌚*",
       owner: "Hanya untuk sang *Raja* 👑",
       admin: "Fitur ini cuman bisa dipake *admin grup* yah! 🥳",
       badmin: "Waduh! Aku butuh jadi *admin* agar bisa menggunakan fitur ini 🤯",
       premium: "Kak, ini fitur *premium* loh!\n> Biar bisa jadi premium beli di 6287748834200 agar bisa menggunakan fitur ini 🤫",
   }
}

// ================= DECORATION SETTINGS =================
global.decor = {
	menut: '❏═┅═━–〈',
	menub: '┊•',
	menub2: '┊',
	menuf: '┗––––––––––✦',
	hiasan: '꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷',

	menut: '––––––『',
    menuh: '』––––––',
    menub: '┊☃︎ ',
    menuf: '┗━═┅═━––––––๑\n',
	menua: '',
	menus: '☃︎',

	htki: '––––––『',
	htka: '』––––––',
	haki: '┅━━━═┅═❏',
	haka: '❏═┅═━━━┅',
	lopr: 'Ⓟ',
	lolm: 'Ⓛ',
	htjava: '❃'
}

// ================= RPG SETTINGS =================
global.rpg = {
    emoticon(string) {
        string = string.toLowerCase()
        let emot = {
            level: '📊',
            limit: '🎫',
            health: '❤️',
            exp: '✨',
            atm: '💳',
            money: '💰',
            bank: '🏦',
            potion: '🥤',
            diamond: '💎',
            common: '📦',
            uncommon: '🛍️',
            mythic: '🎁',
            legendary: '🗃️',
            superior: '💼',
            pet: '🔖',
            trash: '🗑',
            armor: '🥼',
            sword: '⚔️',
            makanancentaur: "🥗",
            makanangriffin: "🥙",
            makanankyubi: "🍗",
            makanannaga: "🍖",
            makananpet: "🥩",
            makananphonix: "🧀",
            pickaxe: '⛏️',
            fishingrod: '🎣',
            wood: '🪵',
            rock: '🪨',
            string: '🕸️',
            horse: '🐴',
            cat: '🐱',
            dog: '🐶',
            fox: '🦊',
            robo: '🤖',
            petfood: '🍖',
            iron: '⛓️',
            gold: '🪙',
            emerald: '❇️',
            upgrader: '🧰',
            bibitanggur: '🌱',
            bibitjeruk: '🌿',
            bibitapel: '☘️',
            bibitmangga: '🍀',
            bibitpisang: '🌴',
            anggur: '🍇',
            jeruk: '🍊',
            apel: '🍎',
            mangga: '🥭',
            pisang: '🍌',
            botol: '🍾',
            kardus: '📦',
            kaleng: '🏮',
            plastik: '📜',
            gelas: '🧋',
            chip: '♋',
            umpan: '🪱',
            naga: "🐉",
            phonix: "🦅",
            kyubi: "🦊",
            griffin: "🦒",
            centaur: "🎠",
            skata: '🧩'
        }
        let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
        if (!results.length) return ''
        else return emot[results[0][0]]
    }
}

// ================= BOT PREFIX =================
global.prefix = ['','!','.','#','&']
global.sessionName = 'furina'
global.hituet = 0

// ================= MEDIA FILES =================
global.thum = fs.readFileSync("./data/image/thumb.jpg")
global.log0 = fs.readFileSync("./data/image/thumb.jpg")
global.err4r = fs.readFileSync("./data/image/thumb.jpg")
global.thumb = fs.readFileSync("./data/image/thumb.jpg")
global.defaultpp = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'

// ================= IMAGE MAKER =================
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

// ================= API KEYS =================
global.keyopenai = "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"

// ================= DOCUMENT TYPES =================
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})