//var ssids = [
//    'BIT-WIFI-5G','amoydx'
//];
var routes = ["10.6.18.1", "10.6.18.254"];
//var ssid = $network.wifi.ssid;
var route = $network.v4.primaryRouter
//console.log($network);
//if (ssid === null) {
//    ssid = ''  // 有线网
//};

// if (ssids.includes(ssid) || (routes.includes(route))) {
if (routes.includes(route)) {
    $done({server:'192.168.2.156'})
} else {
    $done({})
}
