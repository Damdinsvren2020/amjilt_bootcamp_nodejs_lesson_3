exports = module.exports = {
  domain: process.env.NODE_ENV === "development" ? `website.com` : `website.mn`,
  sessionSecret: "KDrL5JEaHklA3e9TjJSNaZXQGapZTRZh",
  user: "website",
  password: "WebSite123#",
  connectString:
    "(DESCRIPTION =(ADDRESS = (PROTOCOL = TCP)(HOST = 192.168.101.42)(PORT = 1521))(CONNECT_DATA =(SERVER = DEDICATED)(SERVICE_NAME = rtdb)))",
};
