let handler  = async (m, { conn, usedPrefix }) => {
  conn.reply(m.chat, `
*BIG THANKS TO*
- *NURUTOMO*
- *BOCHIL* *TEAM*
- *PENYEDIA* *API* *KEY*
- *Jus*
-*IamRaff*
`.trim(), m)
}
handler.help = ['thanksto']
handler.tags = ['about']
handler.command = /^(thanksto)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
