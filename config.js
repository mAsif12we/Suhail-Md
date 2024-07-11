const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Faisal udas]════════\\
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
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/56a42641b6a12a05390de.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "i love you muskan" 


global.devs = "923037484167" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923037484167";




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
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "923112657705";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923037484167,923037484167";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_04_05_07_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDU1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDI3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDY1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDkwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDExNixcbiAgICAgICAgMTg3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODksXG4gICAgICAgIDIyNSxcbiAgICAgICAgOTIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNjUsXG4gICAgICAgIDQxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNzksXG4gICAgICAgIDM0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTQzLFxuICAgICAgICA0NyxcbiAgICAgICAgMTIsXG4gICAgICAgIDM2LFxuICAgICAgICA1NSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDg2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTkxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgODEsXG4gICAgICAgIDYxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDExOCxcbiAgICAgICAgNThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgMTcyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjIsXG4gICAgICAgIDk0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgODUsXG4gICAgICAgIDkxLFxuICAgICAgICA3MyxcbiAgICAgICAgMjYsXG4gICAgICAgIDI1LFxuICAgICAgICAyOSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyNSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxODEsXG4gICAgICAgIDEyLFxuICAgICAgICA4OSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTIxLFxuICAgICAgICA1NixcbiAgICAgICAgMTY5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDY0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxODQsXG4gICAgICAgIDIxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMixcbiAgICAgICAgMzEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNjYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIxNixcbiAgICAgICAgNTUsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDk3LFxuICAgICAgICA4NSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNzcsXG4gICAgICAgIDc0LFxuICAgICAgICAyMTksXG4gICAgICAgIDY0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxODYsXG4gICAgICAgIDU1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNzIsXG4gICAgICAgIDkzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTA2LFxuICAgICAgICA2MyxcbiAgICAgICAgNTcsXG4gICAgICAgIDY0LFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDk1LFxuICAgICAgICA2OSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA1MyxcbiAgICAgICAgMTE4LFxuICAgICAgICA4NixcbiAgICAgICAgMTMxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxODcsXG4gICAgICAgIDI4LFxuICAgICAgICAyNyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDY5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDg3LFxuICAgICAgICA3NyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDgzLFxuICAgICAgICA0NSxcbiAgICAgICAgMjQsXG4gICAgICAgIDgyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgOTAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgODdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTE5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDksXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDQ1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg5LFxuICAgICAgICA0NSxcbiAgICAgICAgMjAsXG4gICAgICAgIDUsXG4gICAgICAgIDIzNixcbiAgICAgICAgNjMsXG4gICAgICAgIDIyLFxuICAgICAgICAxNzksXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDcsXG4gICAgICAgIDc1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgODMsXG4gICAgICAgIDAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxOSxcbiAgICAgICAgMjExLFxuICAgICAgICAyMzAsXG4gICAgICAgIDI3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE0MixcbiAgICAgICAgOTMsXG4gICAgICAgIDQ3LFxuICAgICAgICA5OCxcbiAgICAgICAgMTUsXG4gICAgICAgIDEyNixcbiAgICAgICAgNjcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNyxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDM5LFxuICAgICAgICAxODksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDYwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjM1LFxuICAgICAgICA3LFxuICAgICAgICA4MyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDg4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDc0LFxuICAgICAgICA4MyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDUzLFxuICBcImFkdlNlY3JldEtleVwiOiBcIk1FOENKYmk1eTNyTnc2SVpFR3pva1ZtdzJyL0VxSElzWTZkSUFrVlJxdUk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMDM3NDg0MTY3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIwOTY4NEFEMjcyOENEMDNEM0IxOUExMUM4ODQ3QUQwQlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjA2NzA3MjVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMwMzc0ODQxNjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjhFMTQzQkExNjQ0NTNFQjg0OEFGQzg4Q0REMDRCQTgxXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDY3MDcyNlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogNjEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogNjEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJUalZoYlN5OVM3U2dSOEt5cEVQRmxBXCIsXG4gIFwicGhvbmVJZFwiOiBcImYwMGQ1Mjc5LTA4NmEtNGVjNC05ZGZhLTY2ODU5NzYzNjYyMlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjcsXG4gICAgICA3NyxcbiAgICAgIDE5NixcbiAgICAgIDEyMCxcbiAgICAgIDg5LFxuICAgICAgMTI5LFxuICAgICAgMjQwLFxuICAgICAgMTUxLFxuICAgICAgMTkwLFxuICAgICAgNzcsXG4gICAgICA0NSxcbiAgICAgIDEyOSxcbiAgICAgIDU3LFxuICAgICAgMjE5LFxuICAgICAgMTU5LFxuICAgICAgMTAwLFxuICAgICAgNTgsXG4gICAgICA5MyxcbiAgICAgIDksXG4gICAgICAxNDBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTIzLFxuICAgICAgMTI0LFxuICAgICAgMjM2LFxuICAgICAgMjEsXG4gICAgICAyMTAsXG4gICAgICAyMDAsXG4gICAgICA3NixcbiAgICAgIDE2MSxcbiAgICAgIDE0MCxcbiAgICAgIDU4LFxuICAgICAgMjM2LFxuICAgICAgMTE0LFxuICAgICAgNTMsXG4gICAgICA4OSxcbiAgICAgIDE0MyxcbiAgICAgIDY2LFxuICAgICAgODksXG4gICAgICA5MSxcbiAgICAgIDU3LFxuICAgICAgMTY5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkg5VkdFUjE2XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMwMzc0ODQxNjc6MTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJHWFMgQkFOS0lOR1wiLFxuICAgIFwibGlkXCI6IFwiOTA5NTkyNTM2NDczODM6MTVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSXVFM1pFR0VQMnp2YlFHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJWRE5LYldIaTNzQm5PVU94d21teFIrL0N4ejdOSlhMYUtNOEQ5dkIzbURnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkZ0SXMwQ2JmamtRVExwTWdFMTU3bjJGUEZ5dmhIc0psMUNSUnNTSjBXRTdxb2wzS08zN3p1aUkyTG5aQjlWNWpiMkZUT1lhV1laQnBaeGV5ajlVZkNRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlVPN2o2dXdETkRhN2JLUzlITkJic2pxSlFydkFQaE5mSEd3UGR0T1lVd3NNcWtNbnl5TTdvRWFNZFpyTFpTQVNQbGY3TGNQMDJDT0RiUlpML0tLUWpnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzAzNzQ4NDE2NzoxNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA1NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwNjcwNzIyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBUGhxXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQaHEuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJNMUpjVHlGNHQyZ2szL1RMYjdBVFFQeWgwZE0rTm5SMzBXeFp3cmE4eHJBPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE2NDc3ODg1NTQsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDJdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 love you muskan』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "muskan",
  ownername:process.env.OWNER_NAME|| "Faisal",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "Faisal"  ).toUpperCase(),



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
