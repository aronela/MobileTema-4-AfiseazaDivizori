let list:Array<number> = [2, 14, 21, 37];

function isPrim(n:number) {
    if(n === 1){
        return false;
    }
    if(n === 2){
        return true;
    }
    for(let i=2; i<n/2; i++){
        if(n%i === 0){
            return false;
        }
    } return true;
}

function afiseazaDivizori(n:number){
    let divizori:Array<number> = [];
    for(let i=1; i<=n; i++){
        if(n % i === 0){
            divizori.push(i);
        }
    }
    console.log("Divizorii numarului " + n + " sunt " + divizori);
}

for(let i=0; i<list.length; i++){
    if(isPrim(list[i])){
        console.log("Numarul " + list[i] + " este prim!");
    } else {
        afiseazaDivizori(list[i]);
    }
}