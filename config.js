const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349012500275";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_18_40_10_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDQ3LFxuICAgICAgICAzOCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxODgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNSxcbiAgICAgICAgMTAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNTMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTgwLFxuICAgICAgICA5NCxcbiAgICAgICAgNixcbiAgICAgICAgMTM2LFxuICAgICAgICA0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDI4LFxuICAgICAgICA2MSxcbiAgICAgICAgMjExLFxuICAgICAgICA2NCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTcsXG4gICAgICAgIDYwLFxuICAgICAgICA2MixcbiAgICAgICAgMTUwLFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTcsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDc2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDExNSxcbiAgICAgICAgNTAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNTksXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDEwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTAzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTgzLFxuICAgICAgICA2MixcbiAgICAgICAgNTAsXG4gICAgICAgIDI3LFxuICAgICAgICAxODQsXG4gICAgICAgIDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgMjQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNDksXG4gICAgICAgIDExOSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA5OCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxODYsXG4gICAgICAgIDExLFxuICAgICAgICAxNDcsXG4gICAgICAgIDU1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjE5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNTIsXG4gICAgICAgIDc4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDYzLFxuICAgICAgICAxOCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjMyLFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNjUsXG4gICAgICAgIDU4LFxuICAgICAgICAyLFxuICAgICAgICAzMSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDI1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxOCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDUxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTAsXG4gICAgICAgIDEwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNjIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjA2LFxuICAgICAgICAxNTksXG4gICAgICAgIDIzMixcbiAgICAgICAgNzYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDkyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDEsXG4gICAgICAgIDYyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDI5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDk5LFxuICAgICAgICAyMyxcbiAgICAgICAgNTksXG4gICAgICAgIDI0NixcbiAgICAgICAgOTUsXG4gICAgICAgIDQzLFxuICAgICAgICA1MCxcbiAgICAgICAgMzIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTgyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjI4LFxuICAgICAgICA1MyxcbiAgICAgICAgMzEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgOTcsXG4gICAgICAgIDk4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDQ4LFxuICAgICAgICA0MixcbiAgICAgICAgMjM5LFxuICAgICAgICA4MCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNTksXG4gICAgICAgIDkzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjAyLFxuICAgICAgICAxNSxcbiAgICAgICAgODMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTg5LFxuICAgICAgICA0OCxcbiAgICAgICAgMTk1LFxuICAgICAgICA4NixcbiAgICAgICAgMTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA1NixcbiAgICAgICAgICA2NixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxMTRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA4LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDg2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg3LFxuICAgICAgICAxODYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjAxLFxuICAgICAgICAyOCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDc3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMzgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjU1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDY5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNjYsXG4gICAgICAgIDksXG4gICAgICAgIDUxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNTIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNyxcbiAgICAgICAgNDQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNCxcbiAgICAgICAgMzUsXG4gICAgICAgIDk2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNjUsXG4gICAgICAgIDcyLFxuICAgICAgICA0NyxcbiAgICAgICAgMTcyLFxuICAgICAgICAzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTQsXG4gICAgICAgIDQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTk0LFxuICAgICAgICAzMSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxODQsXG4gICAgICAgIDEzMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTk3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIndycHBuUFdKYm9NSE9aQU9uTHc4QU1oVXQzNXA4bnQrc1d6blRWNWVCYms9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0OTAxMjUwMDI3NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNkM2MzZDRERFMUJBQURBMzc2MjFDNjE2NzM5NzFEQTRcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzI5MzYzMjI4XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInNWWjhfa2xzUlllVXBSYWl5bDM1UGdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNTc4M2Q3MTItZDFlYy00YWJiLTg2MGItZDI3MTA5OTkxNzBhXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExMixcbiAgICAgIDE4NCxcbiAgICAgIDE1NyxcbiAgICAgIDIxMixcbiAgICAgIDE4MSxcbiAgICAgIDc4LFxuICAgICAgMTcsXG4gICAgICAxMjksXG4gICAgICAxNTksXG4gICAgICAxOTcsXG4gICAgICAyMTQsXG4gICAgICAxNzAsXG4gICAgICAxNTQsXG4gICAgICAzNCxcbiAgICAgIDI5LFxuICAgICAgMTQwLFxuICAgICAgMTI1LFxuICAgICAgMTA0LFxuICAgICAgMTU2LFxuICAgICAgNTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzYsXG4gICAgICAxNzksXG4gICAgICA2NixcbiAgICAgIDIxOCxcbiAgICAgIDE2NixcbiAgICAgIDE3OCxcbiAgICAgIDY3LFxuICAgICAgMjAyLFxuICAgICAgNTEsXG4gICAgICAyMTAsXG4gICAgICAyNSxcbiAgICAgIDE2LFxuICAgICAgODgsXG4gICAgICAxMjYsXG4gICAgICAxNjcsXG4gICAgICAxNzAsXG4gICAgICA4MSxcbiAgICAgIDE4MixcbiAgICAgIDQyLFxuICAgICAgMTkxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkE3NFIzWVNRXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDEyNTAwMjc1OjE0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwicHJvZmVzc29yIE9nYnVqaVwiLFxuICAgIFwibGlkXCI6IFwiMTQwODgzOTg3MDE3NzkwOjE0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tqTWxZa0RFSlA2ejdnR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiZnlucFdrdlF5enAxMllIL29ZZTZuZTF3bHNUY0QvWHUrektxeE1GaXdFbz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJTL0RKSDRqdFRhTlpGTFBOQ2Z6RHU0UmJ3WmUzMDU2WmN4TTVxNW9SciszSnZNS2lFdnpza1VYbHJMbWdwQ0ZSR0JQWUpLOU13TEVOMlFQK284dnFEZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJxOUFralBIV1pYRGMvUkk2YURYQmJVeWxDa2NrNVdpaStnVTRpRTNwTjA1MnJwMHp0WlV1aXpDS21wQ0ZDS2xtL3l5SVluTXVwTGRUaVh0QlVrYVloUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDEyNTAwMjc1OjE0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNzRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyOTM2MzIyMVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0=",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























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
 
