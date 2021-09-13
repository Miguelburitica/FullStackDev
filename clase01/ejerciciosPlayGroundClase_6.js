console.log("hola");

let agregarHttp = function (url) {
    let urlCompleta = "http://" + url
    return urlCompleta;
}
console.log(agregarHttp("saltar"))

let procesar = function( urls , callback){
    let urlsCompletas = []
    for (let i = 0; i < urls.length ; i++){
        console.log("sapoPerro");
        urlsCompletas.push(callback(urls[i]))
    }
    return urlsCompletas
}

console.log(procesar(["www.google.com","www.yahoo.com"], agregarHttp ));