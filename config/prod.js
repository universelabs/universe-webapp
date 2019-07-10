// Hold application secrets and config for PRODUCTION environment
module.exports = {
  clientApp: process.env.CLIENT_APP,
  authServer: process.env.AUTH_SERVER,
  mailchimpAPI: process.env.MAILCHIMP_API,
  gmailMailer: process.env.GMAIL_MAILER,
  gmailSecret: process.env.GMAIL_SECRET
};
