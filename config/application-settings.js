var config = {};

config.mongohost = "127.0.0.1";
config.mongodbname = "mydatabase"
config.mongoConnectionURL = "mongodb://" + config.mongohost+ "/" + config.mongodbname;
config.isHTTPS = false;
config.sslPem = "/home/admin/ssl/crosr.com.pem";
config.port = 5000;

config.defaultGuestName = "Guest";
config.defaultRoomName = "default-room";
config.secret = "something";
module.exports = config;
