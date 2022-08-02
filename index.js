function windowopen() {
    window.open('./index.html', '_blank');
}
function init() {
    var i = 1000;
    var y = 1;
    while (i > y) {
        windowopen();
    }
}
init();
