papitasIniciales = int(input("\t Ingresa el numero de paquetes de papas incial: "))

def maximoPromo (valorInicialAConsiderar):
    if(valorInicialAConsiderar > 1):
        papitasExtras = 0
        papitasSobrantes = 0
        while(valorInicialAConsiderar > 1):
            papitasExtras += valorInicialAConsiderar//3
            papitasSobrantes += valorInicialAConsiderar%3
            valorInicialAConsiderar = valorInicialAConsiderar // 3
        return(papitasExtras + maximoPromo(papitasSobrantes))
    else:
        return (0)

print("\t Los paquetes extras de papas producidos a partir de la promoción son: ", maximoPromo(papitasIniciales))
print("\t Dejando un total de ", papitasIniciales + maximoPromo(papitasIniciales), " paquetes de papas.")

