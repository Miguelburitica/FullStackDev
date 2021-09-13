const raiz = function(arg,ind){
    if(arg>=0 && ind!=0){
        return arg**(1/ind);
    }else if(arg<0){
        return 'La raiz de un número negativo no es real'
    }else{
        return 'No se puede obtener la raiz de un índice cero'
    }   
}

export = raiz;
