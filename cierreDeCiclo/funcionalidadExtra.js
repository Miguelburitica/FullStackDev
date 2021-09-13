const autos = require("./alFinEsMomentoDeCodear")

const persona1 = {
    nombre : "Juan",
    capacidadDePagoEnCuotas: 20000,
    capacidadDePagoTotal: 100000,
}

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
    },

    autosParaLaVenta : function(){
        const autosParaVender = this.autos.filter(item => item.vendido == false)
        return autosParaVender
    },

    autosNuevos : function(){
        const nuevosAutos = this.autosParaLaVenta().filter(item => item.km < 100)
        return nuevosAutos
    },

    listaDeVentas : function(){
        const listaVendidos = this.autos.filter((item) => item.vendido != false).map((item) => item.precio)
        return listaVendidos
    },

    totalDeVentas : function(){
        let total = 0
        this.listaDeVentas()[0] != undefined ? total = this.listaDeVentas().reduce((total, item) => { total += item}) : ""
        return total
    },

    puedeComprar : function(auto, persona){
       return persona.capacidadDePagoEnCuotas >= auto.precio / auto.cuotas && persona.capacidadDePagoTotal >= auto.precio
    },

    autosQuePuedeComprar : function(persona){
        return this.autosParaLaVenta().filter(item => this.puedeComprar(item, persona) ? item : "")
    }
}

console.log(concesionaria.autoQuePuedeComprar(persona1));
