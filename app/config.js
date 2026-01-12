const admin = require('firebase-admin');
const serviceAccount = require('./google-config.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
const db = admin.firestore();

require('dotenv').config();

module.exports = {
  admin: admin,
  db: db,
  server_secret: process.env.SERVER_SECRET,
  token_expire: process.env.TOKEN_EXPIRE,
  mail: process.env.MAIL,
};