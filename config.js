const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
  SESSION_ID: process.env.SESSION_ID || "EDITH-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEptMnlXdGNaWFRyVS9LR0J1bUZjdEhpUmFOMCt3UkNIVXl5WkFqTkluTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUc5NjRob3g4YnpIakY4V0t3OW9CZWRoMkx3TUdQYktndHpHUDNjak56WT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPUFBnNElvWlRxRFBpdjRxemx1TDVwcHNZdkRUaWFXYlVkYWRzM2gvZVZ3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVGZudUsyMEx2Mm1lemhOeFFiYyt5MlM5bERBb2toaXpDZXUyK1VoS2g0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNMOE5VbjdvZ3pySU5udmFMRTcvT1RhQkwvVm1GZVdxR2tiRU5tYnA2bmM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFMVWlZd3ErdXZEUUdzaEJ6MEFDNXFzWjVqaUJBSTd0NVlySzBIV2dSUk09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUhwZmtDNEZ3QlNUREZjU2Jud2p5ZytEamFPd1hnNTBCeVNRMUpnbU5Icz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVHQ1aXhqdy82ZElLTkd5UHNtRkJGV2QyUDErYThuSW9VMGU1U0NyZklTOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRzSXVUc0JuRitIbEZ6bWl2UXk1M29KcDNGWDFPWnZoeVJob0dyUHU3RWFEL1V2b2l6dklkOGdZdlB6V0xpY1pBeWVLb1hrVTZNTVVaUVZ1RHVlS0R3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQxLCJhZHZTZWNyZXRLZXkiOiI1SFk0aktablQwLytscjhtOFhUTHc5M0ppbkJKUjFnYS93d0srWEkyZlFRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJFRElUSDEyMyIsIm1lIjp7ImlkIjoiMjM0ODEzOTU5ODk4NTo1MUBzLndoYXRzYXBwLm5ldCIsImxpZCI6Ijc3MjY2NjQ2MjQ5NTU4OjUxQGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDS3U1L3B3SEVMMnY1TVFHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiQXN4cHdMU0xZUzhtUUttVkVTY1RlK3BENWVvdWs4QnRaU1hTZXFEZDVRbz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiYkVIdTdSays5NXh5bnFJNk4xZEZway95T0dNa2Y3L0pBblFGam4rYWhLRWN1V0QxUVI4SzBQcVlKTC8wU1VsSm91VW9BVUVWWEtnZXZEUW5HcVZqQ3c9PSIsImRldmljZVNpZ25hdHVyZSI6IkQyZTBCazBqT3RoY1l0ZmNzWTJYYmFld3duWW02bWRXd1dycERlWFR0dkJJbjdZbzJRU3hqRWppWDdLRWc0TWlQUzd1QWNkdnJxUUVoZ1hjV0pmRUF3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0ODEzOTU5ODk4NTo1MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJRTE1hY0MwaTJFdkprQ3BsUkVuRTN2cVErWHFMcFBBYldVbDBucWczZVVLIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQVVJQ0E9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTQ4NjM1NTMsImxhc3RQcm9wSGFzaCI6IjJHNEFtdSIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQkRrIn0=",
  START_IMG: process.env.START_IMG || "https://cdn.inprnt.com/thumbs/5d/0b/5d0b7faa113233d7c2a49cd8dbb80ea5@2x.jpg",
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
  AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
  AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
  AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS EDITH-MD*",
  WELCOME: process.env.WELCOME || "false",
  ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
  PREFIX: process.env.PREFIX || ".",
  MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://cdn.inprnt.com/thumbs/5d/0b/5d0b7faa113233d7c2a49cd8dbb80ea5@2x.jpg",
  BOT_NAME: process.env.BOT_NAME || "EDITH-MD",
  STICKER_NAME: process.env.STICKER_NAME || "EDITH-MD",
  CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
  CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
  DELETE_LINKS: process.env.DELETE_LINKS || "true",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "2348139598985",
  OWNER_NAME: process.env.OWNER_NAME || "𝕷𝖔𝖗𝖉 【𖢣】 Ɇ₳Ɽ₦Ɇ₴₮ 😈",
  DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ Bandaheali*",
  ALIVE_IMG: process.env.ALIVE_IMG || "https://cdn.inprnt.com/thumbs/5d/0b/5d0b7faa113233d7c2a49cd8dbb80ea5@2x.jpg",
  LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar *EDITH-MD*⚡",
  READ_MESSAGE: process.env.READ_MESSAGE || "false",
  AUTO_REACT: process.env.AUTO_REACT || "false",
  ANTI_BAD: process.env.ANTI_BAD || "false",
  MODE: process.env.MODE || "public",
  ANTI_LINK: process.env.ANTI_LINK || "true",
  AUTO_VOICE: process.env.AUTO_VOICE || "false",
  AUTO_STICKER: process.env.AUTO_STICKER || "false",
  AUTO_REPLY: process.env.AUTO_REPLY || "false",
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
  PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
  AUTO_TYPING: process.env.AUTO_TYPING || "false",
  READ_CMD: process.env.READ_CMD || "false",
  DEV: process.env.DEV || "923253617422",
  ANTI_VV: process.env.ANTI_VV || "true",
  ANTI_CALL: process.env.ANTI_CALL || "false",
  REJECT_MSG: process.env.REJECT_MSG || "*_SOORY MY BOSS IS BUSY PLEASE DONT CALL ME_*",
  ANTI_DELETE: process.env.ANTI_DELETE || "true",
  ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox",
  AUTO_RECORDING: process.env.AUTO_RECORDING || "true"
};
