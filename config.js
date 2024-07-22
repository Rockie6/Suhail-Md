const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254794229996";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "254794229996,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_15_07_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICA3MSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDQ2LFxuICAgICAgICAzMSxcbiAgICAgICAgOTksXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMixcbiAgICAgICAgMTEwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxOSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDk1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMzcsXG4gICAgICAgIDcyLFxuICAgICAgICAzOCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDQyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDc2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk3LFxuICAgICAgICA3OSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyNDksXG4gICAgICAgIDE1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEyMixcbiAgICAgICAgNDAsXG4gICAgICAgIDgyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxODUsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTk4LFxuICAgICAgICA3MSxcbiAgICAgICAgNzMsXG4gICAgICAgIDkxLFxuICAgICAgICAzNSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDgyLFxuICAgICAgICA5NSxcbiAgICAgICAgMTg1LFxuICAgICAgICA1NCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAyMixcbiAgICAgICAgMTM2LFxuICAgICAgICAxODYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNzgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDc4LFxuICAgICAgICAxMDksXG4gICAgICAgIDkxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDcwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgODcsXG4gICAgICAgIDcyLFxuICAgICAgICAxMCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjM3LFxuICAgICAgICA4MyxcbiAgICAgICAgMTc3LFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjU1LFxuICAgICAgICA2OSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxODYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNDQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDU0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMjksXG4gICAgICAgIDIyLFxuICAgICAgICA2NixcbiAgICAgICAgMjE0LFxuICAgICAgICA4OCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDg5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTk2LFxuICAgICAgICA3OCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDI0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDYzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTM5LFxuICAgICAgICAzNixcbiAgICAgICAgMTA1LFxuICAgICAgICA3MCxcbiAgICAgICAgNDQsXG4gICAgICAgIDk2LFxuICAgICAgICA2NCxcbiAgICAgICAgODYsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDcyLFxuICAgICAgICA3OSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDY5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTQyLFxuICAgICAgICAzMCxcbiAgICAgICAgNDIsXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDkwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTI5LFxuICAgICAgICA5OSxcbiAgICAgICAgNzAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgOSxcbiAgICAgICAgMjYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNDUsXG4gICAgICAgIDg2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDI4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjI0LFxuICAgICAgICA1MSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTMyLFxuICAgICAgICA3NCxcbiAgICAgICAgMTIsXG4gICAgICAgIDgyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDIxNixcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgNzBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxMTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE0LFxuICAgICAgICAxNDksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMzQsXG4gICAgICAgIDYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDIzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDYwLFxuICAgICAgICAyNixcbiAgICAgICAgMjAwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjQyLFxuICAgICAgICAwLFxuICAgICAgICA0NyxcbiAgICAgICAgNTEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNSxcbiAgICAgICAgNjIsXG4gICAgICAgIDM3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNDYsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxODYsXG4gICAgICAgIDg0LFxuICAgICAgICAyNDksXG4gICAgICAgIDIxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjIzLFxuICAgICAgICA3OCxcbiAgICAgICAgNCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDczLFxuICAgICAgICA5OSxcbiAgICAgICAgNzIsXG4gICAgICAgIDYzLFxuICAgICAgICA2MSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTQzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA0MSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIxSzU5QkxsbUM0R1N4Q0VLVVBLR0YyNnBVSUFRZEtMUGw1eGxEWlhoN0pVPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NDc5NDIyOTk5NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiREI2QjgxOEJBMjY5RkNBQzJGMzAwQjFDNkFEMUYzQzJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxNDIwMTA1XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU0Nzk0MjI5OTk2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI4RDA0MTc1MjQwQkVBOUI4REY2QjU0MUM5OTlBMzZFMFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjE0MjAxMDVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTQ3OTQyMjk5OTZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjg0MTVFMEI0NDU5QUY4NTg0NkJCNTk3OUZCRDA3QjVBXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTQyMDEwOFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NDc5NDIyOTk5NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMkJGNzg3NUNFNDVCNTQ2ODBDMkVGMTc1RUM1OUQ2RDBcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxNDIwMTA5XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlliTkJ5YXpBUnRpMi1SaEE1WlpNMkFcIixcbiAgXCJwaG9uZUlkXCI6IFwiYTEzZWVkOWEtMDc3Mi00OWFlLWEwYWQtMzEzZjUyOGZkOGRhXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExOSxcbiAgICAgIDI0MCxcbiAgICAgIDEzNixcbiAgICAgIDE4MixcbiAgICAgIDE3MCxcbiAgICAgIDcwLFxuICAgICAgMTkxLFxuICAgICAgMTksXG4gICAgICAyMzgsXG4gICAgICAxNzQsXG4gICAgICAyNDUsXG4gICAgICAyMDksXG4gICAgICA4NixcbiAgICAgIDE3NyxcbiAgICAgIDIyOCxcbiAgICAgIDkwLFxuICAgICAgNDEsXG4gICAgICA0NyxcbiAgICAgIDE1NyxcbiAgICAgIDM0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1LFxuICAgICAgMTczLFxuICAgICAgMTQwLFxuICAgICAgNzksXG4gICAgICA0MCxcbiAgICAgIDE3MyxcbiAgICAgIDkwLFxuICAgICAgMTQ5LFxuICAgICAgMTc1LFxuICAgICAgMTY2LFxuICAgICAgNzYsXG4gICAgICAxMTcsXG4gICAgICAxNzYsXG4gICAgICAxMCxcbiAgICAgIDE0MyxcbiAgICAgIDI0MSxcbiAgICAgIDE5MCxcbiAgICAgIDE4MixcbiAgICAgIDEyMCxcbiAgICAgIDUzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkg0MzVRUDZHXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3OTQyMjk5OTY6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNzA4MzMxMDQwMDczMjg6NEBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJSb2NraWUuXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSVBHMEtJQkVNT1M2N1FHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJRc241L3gwMWJRZlZXbXIzVEpmYmVSOFdLaXE3S2huWlFXTzlDeDlxbndFPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkFSSEViMHpDTWRsL25mTkF1UVgrYU84WFpEV0FGaGJpN0UzNGN5Z1p0K2ZtT0w0Z0JRTkFPZW5teWYvMGVRMEVOYnF2YUhLRkRPbmhXbVR3N0NwckNnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIm16a2phLzExU0ZURGhjMVIzT09tNkJYYlV0L2VndklRd3hTV3lEZGpuL2tYL3ZVV0RsWjV6blNVd0tvN2I3SDNBMTliOEJ1TmJwc1o4TEg1Q1oyeWhBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDc5NDIyOTk5Njo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE0MjAxMDMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFOenJcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU56ci5qc29uIjogIntcImtleURhdGFcIjpcIkFpUXQ1UzZQb09ldWtXYVFWRDlxdTZkaG05NnRidjVqb1dZSTQxV2Y5WDA9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MzQxMDU4MzA3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjE0MjAxMDQ0ODZcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Rockie",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
