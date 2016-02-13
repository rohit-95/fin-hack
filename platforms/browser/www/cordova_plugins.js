cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-mauron85-background-geolocation/www/backgroundGeoLocation.js",
        "id": "cordova-plugin-mauron85-background-geolocation.backgroundGeoLocation",
        "pluginId": "cordova-plugin-mauron85-background-geolocation",
        "clobbers": [
            "backgroundGeoLocation"
        ]
    },
    {
        "file": "plugins/phonegap-plugin-push/www/push.js",
        "id": "phonegap-plugin-push.PushNotification",
        "pluginId": "phonegap-plugin-push",
        "clobbers": [
            "PushNotification"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.2.1",
    "cordova-plugin-mauron85-background-geolocation": "0.9.4",
    "phonegap-plugin-push": "1.5.3"
}
// BOTTOM OF METADATA
});