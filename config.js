//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "kingdavid23565@gmail.com";
global.location = "Lagos, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/STAR-KING0/Queen_Alya";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "./lib/alya.jpg";
global.devs = "2347016218515";
global.sudo = process.env.SUDO || "2348142909904";
global.owner = process.env.OWNER_NUMBER || "2347016218515";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "./lib/alya.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://alya-pair.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "{"noiseKey":{"private":{"type":"Buffer","data":"OE8tsCYhTeEMT+KdLxo21dpZmWjUk1UEghOY4fcoX18="},"public":{"type":"Buffer","data":"IMaRvypZvkkFZ/AyA6tpWbLhXBM4B0ivvkRDYQKePhs="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"wIJ0dxK6OuWOBWfnhgdKeWR/ouzY8gMmxlXC2vbXFn8="},"public":{"type":"Buffer","data":"/K/Q1ZovSc8dNclQTLBtu/DaAWqkHYCjOhir5uCXFXk="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"GADrtiHJ2j8ibfbkf5wHEIujdApr/m6B0xQqGRcXOE8="},"public":{"type":"Buffer","data":"EFp/U6CsNrpXFPLTMH6xZg0lytl10wh/tPqUeGhzOSY="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"UDoYosM9afOn05z6czKLsXHYxqNlK/QKklQ1bTX6iEE="},"public":{"type":"Buffer","data":"ZbsMJ47FXz8K4LTKZooWw+PXo075vpBeY5U5XYmC9Es="}},"signature":{"type":"Buffer","data":"w25fKGHSjdd29NANBEjTr7fcxQV+uvm5Qk0iC4AYhyft7bXphmmFv+fXAVZ2/oNt3S+4LiMpVKYYKB2VWEwfCw=="},"keyId":1},"registrationId":105,"advSecretKey":"Oom41+okC8aJUTqpekNV2QpLhwqv9Grtru+GVKL/L9w=","processedHistoryMessages":[{"key":{"remoteJid":"2347016218515@s.whatsapp.net","fromMe":true,"id":"3A068563F95B3872544D"},"messageTimestamp":1730224109}],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"HMKk9Rt4TFOdWRqN6FCGdw","phoneId":"39059811-8df6-49f0-bd18-21b8869a2252","identityId":{"type":"Buffer","data":"ChTtPDGo6KAKmiDRSTmdwqJfXzc="},"registered":true,"backupToken":{"type":"Buffer","data":"GUNLou6FJbHjzgxDiA5A1rDHHn0="},"registration":{},"pairingCode":"YX48PBMB","me":{"id":"2347016218515:96@s.whatsapp.net","name":"Mi.Richy"},"account":{"details":"CJz8xLABEN2/hLkGGAEgACgA","accountSignatureKey":"sas5G1rt7Ahaxlzf3+LKUy/yZlQZdPZOA77qYu4sulM=","accountSignature":"qUcDp0x0c5Ij36T+R8KmW5xwYiL/C73ghTvaLwNYaCzZ7knQ7vEJ3kkv0QdHCJuQOG1uUgSCmqbP5sDfy4D2BQ==","deviceSignature":"xyi18pfie2UkgbWM+L1M/cWEWwxHsNNjKhRTDAjJPARbm+8Q1Mq+tNfAcHt2brcBMI9avS4aD1mwlcH+dNHkCw=="},"signalIdentities":[{"identifier":{"name":"2347016218515:96@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BbGrORta7ewIWsZc39/iylMv8mZUGXT2TgO+6mLuLLpT"}}],"platform":"smbi","lastAccountSyncTimestamp":1730224106}"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "#",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ALYA™`",
  author: process.env.PACK_AUTHER || "QUEEN_ALYA",
  packname: process.env.PACK_NAME || "A L Y A",
  botname: process.env.BOT_NAME || "QUEEN_ALYA",
  ownername: process.env.OWNER_NAME || "RICHY",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "A L Y A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
