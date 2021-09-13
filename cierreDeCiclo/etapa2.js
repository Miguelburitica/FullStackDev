const autosImportados = require("./alFinEsMomentoDeCodear");

const concesionaria = {
    autos : autosImportados,
    buscarAuto : function(patente){
        let auto = null
        this.autos.forEach((item) => {
            patente == item.patente ? auto = item : "";
        })
        return auto
    }
}


