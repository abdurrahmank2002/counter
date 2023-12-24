const c = document.querySelector('.clock ');

function clock() {
    var time = new Date();

    var txt = "AM";
    var hour = time.getHours();
    var minutes = time.getMinutes();
    var sec = time.getSeconds();
    if (hour > 12) {
        hour = hour - 12;
        var txt = "PM"
    } else {
        hour = hour;
        txt = "AM";
    }
    hour = hour < 10 ? '0' + hour : hour;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    sec = sec < 10 ? '0' + sec : sec;
    c.innerHTML = `${hour}:${minutes}:${sec}:${txt}`;
}
clock();
setInterval(clock, 1000);