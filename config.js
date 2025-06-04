const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VVXZOiOBT9L3nVGkFQwKquWkFaUEH8QnRrH4IECGKAJIg61f99C3t6eh52Z3vfws2tc88999zwHZACMzRHdzD6DkqKr5Cj9sjvJQIjoNdxjCjogghyCEYAmltjf9mHqV+r82J77WR8KzuDu5mEFbY82R12bHlmhaGvvoC3LijrMMen3wAOBtVtvYuHg14hU7I3vZ7U3LIGNcNAbhoxCzb18roJSEJawBYRYopJYpYpuiAK8zm6exDTr9Fv9NXsmsvkvDsdH4GhN94hvAbZJTsqXnQVil0+HafqwpeD5Gv0C2Ot9qN1TbbTWpqf78HBJWkqxuuFlSlkcKr3TQrL67Yym3f6DCcERXaECMf8/mXda3cBy2GqKJZu4LOOPNmy3dsKaYfhMZodyvVjzDtHjwd782vE0xSGVQMT1Q2xpFZ6KvfEqmSzs30TfKSzpXaYoD0LtfXuV+Ie/fDK+f/oLhvW9jVKswltlO3GJy69SWyTieX0yExFXGw71c3FZHrwv0i/8lJzWYrKxHHs5WVwOUrHqY3jo6NEm/OQvspWIae5/zq8nD7pQ17T37HEsh7LgQuzeY8G7kRKQzJf6soyzh4OSkPCPNhxdpmfKLWfJ84yVvz74JFQX1DNOV83UiEoglXbSvwqCpWfx7edPl69PDs6o7sdgZH41gUUJZhxCjkuSBvr9+UugNF1g04U8ae8oIGiFWJrfVssq9BQS3dxtIXImC/N2X29S8THeXjvKFxSxPML6IKSFifEGIoszHhB7w5iDCaIgdGff3UBQTf+Pri2nCR2QYwp4ztSl3kBo4+pflzC06moCd/cycloD4iCkfAZRpxjkrBWx5pAekrxFRkp5AyMYpgz9LNDRFEERpzW6OfWGkXUCj8b+97R3M9AF1yeA8ERGIH+QBaFvqLKiiCM+v0/2LemhYVl+Y0gDrogf6Yp/UFf0JSBKg3E4TOxjb/9JNjiRYhDnDMwAoZX5cyVp6ZNlJ5jTqdjMxkbyRh8NvThjHfld1q22BcnbeM4KXvdBJuCuTbKl64uu8WyvBo93VioCPEte/kHEDACmTatZddyxmr6CBfGMi1T1NhjfXpIDo64fcyou15LKy2LfHPxSNW1FJW9BJ8r1xQ11HfJ8MHOq4G062tOujo3/BhURmujLojQFZ/Qr8XGihCtzgLSs8F+voyl8LbHgYLHhdvbFCqbdtz9tFQfDy01ndrob7xA9Ta8z2gC9zg2PX+vuUXvZgXboN4bnYea5g+9effsc2fyH28VfrqpHVX7GWP0XH0C2wH+9+jeibcOE966v2D8eEz+ZSF13zvcxcrydtnEDvVdLlSLycYqt9kKTeCkCptrs8I9i9CdAt7e/uqCMoc8Luil/VWRiBY4Al1Ai7q1rE3i4jfFjLFg6z+2NYeMjz/XYIsviHF4KcFIVGRVU2RNG7xnebQoLchSMALSWjtKGnj7G24ePmpUBwAA',
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

