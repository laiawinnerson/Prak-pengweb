function jumlah_ganjil(bilangan){
    bilangan = Number(bilangan);
    if(bilangan%2 == 0){
        return bilangan/2;
    }else{
        return (bilangan + 1)/2;
    }
}

function jumlah_genap(bilangan){
    bilangan = Number(bilangan);
    if(bilangan%2 == 0){
        return bilangan/2;
    }else{
        return (bilangan - 1)/2;
    }
}

function ganjil_genap(){
    let bilangan = document.getElementById("input").value;
    document.getElementById("ganjil").innerHTML = jumlah_ganjil(bilangan);
    document.getElementById("genap").innerHTML = jumlah_genap(bilangan);
}


