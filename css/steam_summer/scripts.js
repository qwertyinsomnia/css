var timeid = setInterval(showTimes, 1000);

function showTimes() {
    var str = "";
    var obj = document.getElementById("times");
    var datatimes = new Date();
    var hours = datatimes.getHours();
    var minus = datatimes.getMinutes();
    var seconds = datatimes.getSeconds();

    str += "<img src='./img/" + Math.floor(hours / 10) + ".png'>";
    str += "<img src='./img/" + (hours % 10) + ".png'>";
    str += "<img src='./img/10.png'>";
    str += "<img src='./img/" + Math.floor(minus / 10) + ".png'>";
    str += "<img src='./img/" + (minus % 10) + ".png'>";
    str += "<img src='./img/10.png'>";
    str += "<img src='./img/" + Math.floor(seconds / 10) + ".png'>";
    str += "<img src='./img/" + (seconds % 10) + ".png'>";

    obj.innerHTML = str;
}


