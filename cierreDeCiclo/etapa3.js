const autos = require("./alFinEsMomentoDeCodear")

let concesionaria = {
    autos : autos,
    buscarAuto : function(patente){
        let auto = null
        this.autos.forEach((item) => {
            patente == item.patente ? auto = item : "";
        })
        return auto
    },
    venderAuto : function(patente){
        this.buscarAuto(patente) != null ? this.buscarAuto(patente).vendido = true : ""  
    }
}