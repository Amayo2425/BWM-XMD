const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA61V246qSBT9l3rVPnK/mHQygoi2qCjibTIPBRRQcm0osOHEf5+gbbqTc+tJhqcKVbX22nutves7SDNcojlqwPA7yAtcQ4K6JWlyBIZAqXwfFaAPPEggGAKoCOIZ6gfMToSytepWO+8KOWxx9XYqEmollmJ4rlOG16hncO2DvHJi7P4OsJ31olyd5JfJYDzrVS+0kVFiWGeSX03reLxVrTG735cp0wF2iBAXOA20PEQJKmA8R40JcfE1+hclbgeH3T447N48X7hMJzK9EPS10mxz6VRdUnoeShvZlvX11+hH3sDVA9ZUL04gsuZIlZiy0PY94ZD0aOc1ChOlLi224A/rO/0SBynyZh5KCSbNl+u+ni2Fxa7eC9OwNYTojNP19JLxfLxsxIDZZppbb7hNzcvR7GvEkXUc96rUNjTRpiXPdFq1ZUPtWFmlrhptLsYD4bAc7Col+kzcLB5eif5L3ZEi+O143NOmVb0jCW7Nwj1d3jxj5vfongRtdMZ13Ht90bKv0V/YVBTPhWY213VJTvdSeTgO7EW7XW7DzTTXfH03n1I6W79lH/QhqYrfsXTsgX5Y7kppoPtWPdXDYMJLlHPRJkH8whDJoFzqhJOSDDKvdu1Z86YH4pmrD5uywsouZnzG2hzlggpfrWrHDDTXwerl+ZZRhJqZB4b0tQ8KFOCSFJDgLO3+sWIfQK+2kFsgcqsu6OGAkmt5dGhNRb0QYwQV7SQbSm1ujFljqnOND30t2QkK9wz6IC8yF5Ul8qa4JFnRLFBZwgCVYPj3Tagu5wIlGUEv2ANDwPCcKDMUL7KU8Ff57RJCUsI8/5YiAvrAL7JkgcCQFBXqg9sFWRBFWpsIwkQTx4IoUSzDCpLECxLPcBxNdRkm96BbnKCSwCQHQ1rkeEqkBEq69v8fHprKT0a8wEmyqrASLfDMmJdHE06gBG40Yf7Ag6au//RBit7I3ca34tN94OOiJHZa5XEGvYfHH5vQdbMqJVaTumq3QAUYfvqNCMFpUHaZVSks3BDXSO3yAEMfxiW69oGHauyiDg+sEHV0JWu6WTGWOafZbe0Ly1GnYJil9yMsEmnJRdwTA1nxiRNk7smBED2Jns8hzmMc6LGgK8d9gnR3fmlonjaMdi6vz9uJsfNxWlt6Gy9WDr/hbqa8OxEVyHtU2YFuVOXbLELpb3DtZQIVXrcMPrFnJ2e982Kld5iNC+r4CffucDD8/jG11czr8DbL8eak8jLo1Ori/OCGIc/8aIgUdqeBGuOUZGkX6F2FDsJDBOK47PbNZsovjqpmsttzOdJ1xQ5GatCV+aHaYxjcuy3cxlZFsceaEG/NBD1LhCc8eFuu8KS+ZPXJWdG0QCVwoNrPPwEBQ0CSTD3RDH1g2NqZS+3aM9SIYiLqsEEFbMRow0kXeSLJ4QyXgwkOqzKtKhe+qmHO6gN0lrhTNiLzltkV48DVCbNW1fVzF+3uns/BYr+qXgee1kq9pTybinlkJrnbqIFTLZYB1/jmdlV6wt6/HHyEfNejVSzLREheI8k8JrXsjze8yvnu6kVr5IsfbFfcLdhjTMbvzxN+nyB3r/kY3ab9uwp/VOvD9tS1/wnj/f34hbWUo83bBVkyhugc7GVmRhWTHGtpu81CR5obzL4lHiIvSX2JwbXr5zyGxM+KBAxBmTgQ9EEMSzL6aNufTSS2D5JmlOcWgeTR7WDUfUZjgOu/2DELARcJAAA=',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Ibrahim Adams",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " Ibrahim Adams",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

