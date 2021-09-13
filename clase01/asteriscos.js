let n = 15
let E = " "
let A_E = "* "
let k
let espacios = ""
let asteriscosEspacios = ""
let espaciosForward = ""
let cuadraditoO_O = ""
for (let i = 0; i < n; i++) {
    k = n - i;
    for (let j = 0; j < k; j++) {
        espacios = espacios + E;
    }
    for (let k = 0; k <= i*1; k++) {
        asteriscosEspacios = asteriscosEspacios + A_E;
    }
    for (let l = 0; l < (n - i) + 1; l++) {
        espaciosForward = espaciosForward + E;
    }
    for (let m = 0; m < n; m++) {
        cuadraditoO_O = cuadraditoO_O + A_E;   
    }
    console.log(espacios + asteriscosEspacios + espaciosForward + cuadraditoO_O);
    espacios = ""
    asteriscosEspacios = ""
    espaciosForward = ""
    cuadraditoO_O = ""
}

















