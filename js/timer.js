var countDate = new Date("AUG 12, 2023 21:30:00").getTime();
var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var second = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("demo").innerHTML = days + "d" +" " + hours + "h"  + " " + minutes + "m" + " " + second + "s";
   
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);

// console.log(new Date());

