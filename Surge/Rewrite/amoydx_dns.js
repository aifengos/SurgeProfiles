var ssids = [
    'BIT-WIFI-5G','amoydx'
];
var ssid = $network.wifi.ssid;
//console.log(said);
if (ssid === null) {
    ssid = ''  // 有线网
};

if (ssids.includes(ssid)) {
    $done({server:'192.168.2.156'})
} else {
    $done({})
}
