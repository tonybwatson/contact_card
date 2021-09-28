// create variables for date, hour, minute
// adjust time and display
// update on page every second

function updateTime() {
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    if (hour > 12) {hour = hour - 12;} 
    if (minute < 10) {minute = '0' + minute;}
    if (hour == 0) {hour = 12;}
    var timeNow = hour + ':' + minute;
    document.getElementById('time').innerHTML = timeNow;
}
setInterval(updateTime, 1000);
