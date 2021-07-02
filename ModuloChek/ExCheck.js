// CheckPoint - Microondas - 02/07/2021

let pipoca = function(tempo){
    if (tempo >= 20 && tempo <= 30 ){
        console.log("comida queimou")
        return true
    }if (tempo > 30){
            console.log("kabumm")
            return true
    } else if(tempo <10){
        console.log("tempo insuficiente")
        return true
    } else{
        console.log("Prato pronto, bom apetite")
        return true
    }
}

let macarrao = function(tempo){
    if (tempo >= 16 && tempo <= 24 ){
        console.log("comida queimou")
        return true
    }if (tempo > 24){
            console.log("kabumm")
            return true
    } else if(tempo <8){
        console.log("tempo insuficiente")
        return true
    } else{
        console.log("Prato pronto, bom apetite")
        return true
    }
}

let carne = function(tempo){
    if (tempo >= 30 && tempo <= 45 ){
        console.log("comida queimou")
        return true
    }if (tempo > 45){
            console.log("kabumm")
            return true
    } else if(tempo < 15){
        console.log("tempo insuficiente")
        return true
    } else{
        console.log("Prato pronto, bom apetite")
        return true
    }
}

let feijao = function(tempo){
    if (tempo >= 24 && tempo <= 36 ){
        console.log("comida queimou")
        return true
    }if (tempo > 36){
            console.log("kabumm")
            return true
    } else if(tempo <12){
        console.log("tempo insuficiente")
        return true
    } else{
        console.log("Prato pronto, bom apetite")
        return true
    }
}

let brigadeiro = function(tempo){
    if (tempo >= 16 && tempo <= 24 ){
        console.log("comida queimou")
        return true
    }if (tempo > 24){
            console.log("kabumm")
            return true
    } else if(tempo <8){
        console.log("tempo insuficiente")
        return true
    } else{
        console.log("Prato pronto, bom apetite")
        return true
    }
}
let comida = function (tipo){
    if (tipo != feijao && tipo != macarrao && tipo != brigadeiro && tipo != pipoca && tipo != carne){
        console.log("prato inexistente")
        return false
    }
}

module.exports = {pipoca, macarrao, carne, feijao, brigadeiro, comida};