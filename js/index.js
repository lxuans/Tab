window.onload = function () {
    var lis = document.querySelectorAll('.pic>ul>li');
    for (var i = 0; i < lis.length; i++) {
        var menu = lis[i].children[0];
        menu.src = "./images/" + (i + 1) + ".jpg";

        menu.onclick = function () {
            document.body.style.backgroundImage = "url(" + this.src + ")";
            document.querySelector('.box').style.backgroundColor = "rgba(255,255,255,.3)";
        }
    }
}