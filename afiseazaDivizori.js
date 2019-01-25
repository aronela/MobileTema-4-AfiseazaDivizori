var list = [2, 14, 21, 37];
function isPrim(n) {
    if (n === 1) {
        return false;
    }
    if (n === 2) {
        return true;
    }
    for (var i = 2; i < n / 2; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}
function afiseazaDivizori(n) {
    var divizori = [];
    for (var i = 1; i <= n; i++) {
        if (n % i === 0) {
            divizori.push(i);
        }
    }
    console.log("Divizorii numarului " + n + " sunt " + divizori);
}
for (var i = 0; i < list.length; i++) {
    if (isPrim(list[i])) {
        console.log("Numarul " + list[i] + " este prim!");
    }
    else {
        afiseazaDivizori(list[i]);
    }
}
