function insert(a) {
    document.getElementById('input').value = document.getElementById('input').value + a;
}

function clear() {
    document.getElementById('input').value = "";
}

function del() {
    var x = document.getElementById('input').value;
    document.getElementById('input').value = x.substring(0, x.length - 1);
}

function equal() {
    var x = document.getElementById('input').value
    document.getElementById('input').value = eval(x);
}