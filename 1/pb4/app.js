document.getElementById("n").addEventListener('input',inputFib);

function inputFib(){
        var inputFibNr = parseInt(document.getElementById("n").value);
        getFibonacci(inputFibNr);
}

function getFibonacci(n){
    var v = new Array(n);
    v.fill(0);
    v[0] = 1;
    v[1] = 1;
    for(i=2;i<n;i++){
        v[i] = v[i-1]+v[i-2];
    }
    console.log(v);
}


