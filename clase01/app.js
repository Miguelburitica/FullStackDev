let reemplazoFastFast = function (texto, reemplezar, reemplazo){
    let textoAlterado = texto.replace(reemplezar, reemplazo)
    return textoAlterado
}

console.log(reemplazoFastFast("Hola ¿Cómo estás?", "estás", "están"))