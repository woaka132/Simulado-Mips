const IF = document.getElementById("IF");
const ID_1 = document.getElementById("ID");
const ID_2 = document.getElementById("ID_2");
const EX_1 = document.getElementById("EX_1");
const EX_2 = document.getElementById("EX_2");
const MEN_1 = document.getElementById("MEN_1");
const MEN_2 = document.getElementById("MEN_2");
const WB = document.getElementById("WB");
var memoryd = document.getElementById("mostrarmemory");

var aux="";
var aux2="";
var aux6="";
var cadaxu="";
cadMen="";
var aux3=0;
var aux4=0;
var aux7=0;
var aux5=0;
var div=0;

IF.addEventListener('click',function(){
    if(contInst != 0){
        texto="";    
        mostrarRC.classList.add("show");
        cadena = memoryInstru.split('<br>');
        for(var i=0; i<cadena.length-1;i++){
            texto =texto + "Ciclo"+i+":<br>";
            texto =texto + cadena[i].substring(0,6)+"<br>";
        }
        mostrarRC.innerHTML = texto;
    }else{
        alert("Tienes que agregar una instrucion");            
    }   
})

ID_1.addEventListener('click',function(){
    if(contInst != 0){
        texto="";    
        mostrarRC.classList.add("show");
        cadena = memoryInstru.split('<br>');
        for(var i=0; i<cadena.length-1;i++){
            texto =texto + "Ciclo"+(i+1)+":<br>";
            texto =texto + cadena[i].substring(0,6)+"<br>";
        }
        mostrarRC.innerHTML = texto;
    }else{
        alert("Tienes que agregar una instrucion");            
    }   
})

ID_2.addEventListener('click',function(){
    if(contInst != 0){
        texto="";    
        mostrarRC.classList.add("show");
        cadena = memoryInstru.split('<br>');
        for(var i=0; i<cadena.length-1;i++){
            texto =texto + "Ciclo"+(i+1)+":<br>";
            switch(cadena[i].substring(0,6)){
                case "000000":    
                texto =texto + "100100010<br>";
                break;
                case "100011":
                texto =texto + "011110000<br>";
                break;
                case "101011":
                texto =texto + "010001000<br>";   
                break; 
                case "000010":
                texto =texto + "000000101<br>";    
                break
            }
        }
        mostrarRC.innerHTML = texto;
    }else{
        alert("Tienes que agregar una instrucion");            
    }   
})

EX_1.addEventListener('click',function(){
    if(contInst != 0){
        texto="";    
        mostrarRC.classList.add("show");
        cadena = memoryInstru.split('<br>');
        for(var i=0; i<cadena.length-1;i++){
            texto =texto + "Ciclo"+(i+2)+":<br>";
            switch(cadena[i].substring(0,6)){
                case "000000":
                texto =texto + "100100010<br>";
                break;
                case "100011":
                texto =texto + "011110000<br>";
                break;
                case "101011":
                texto =texto + "010001000<br>";   
                break; 
                case "000010":
                texto =texto + "000000101<br>";    
                break
            }
        }
        mostrarRC.innerHTML = texto;
    }else{
        alert("Tienes que agregar una instrucion");            
    }   
})

EX_2.addEventListener('click',function(){
    if(contInst != 0){
        texto="";
        cadMen="";    
        mostrarRC.classList.add("show");
        cadena = memoryInstru.split('<br>');
        for(var i=0; i<cadena.length-1;i++){
            texto =texto + "Ciclo"+(i+2)+":<br>";
            cadMen = cadMen + "Ciclo"+(i+3)+":<br>";
            switch(cadena[i].substring(0,6)){
                case "000000":
                    if(cadena[i].substring(21,32) == "00000100000"){
                            aux3=0;
                            aux4=0;
                            div=0;
                            texto = texto + "ALU:010";
                            aux3 = convterDec(cadena[i].substring(6,11));
                            aux4 = convterDec(cadena[i].substring(11,16));
                            aux5 = aux3 + aux4;
                            cadaxu = convterBina(aux5);
                            texto = texto + " - Resultado:" + cadaxu + "<br>";
                            cadaxu ="";  
                    }else{
                        aux3=0;
                            aux4=0;
                            texto = texto + "ALU:110";
                            aux3 = convterDec(cadena[i].substring(6,11));
                            aux4 = convterDec(cadena[i].substring(11,16));
                            aux5 = aux3 - aux4;
                                if(aux5<0){
                                    aux5 = 0
                                }
                            cadaxu = convterBina(aux5);
                            texto = texto + " - Resultado:" + cadaxu + "<br>";
                            cadaxu ="";
                    }   
                break;
                case "100011":
                    texto = texto + "ALU:010";
                    texto = texto + " - DirecionMemoria:" + cadena[i].substring(26,31) + "<br>";
                break;
                case "101011":
                    texto = texto + "ALU:010";
                    texto = texto + " - DirecionMemoria:" + cadena[i].substring(26,31) + "<br>"; 
                break; 
                case "000010":
                    texto = texto + "ALU:111";
                    texto = texto + " - DirecionMemoria:" + cadena[i].substring(26,31) + "<br>";   
                break
                default:
                    texto = texto + "ERORR" ;  
                break;  
            }
        }
        mostrarRC.innerHTML = texto;
    }else{
        alert("Tienes que agregar una instrucion");            
    }   
})

MEN_1.addEventListener('click',function(){
    if(contInst != 0){
        texto="";
        cadMen="";    
        mostrarRC.classList.add("show");
        cadena = memoryInstru.split('<br>');
        for(var i=0; i<cadena.length-1;i++){
            texto =texto + "Ciclo"+(i+2)+":<br>";
            cadMen = cadMen + "Ciclo"+(i+3)+":<br>";
            switch(cadena[i].substring(0,6)){
                case "000000":
                    if(cadena[i].substring(21,32) == "00000100000"){
                        aux3=0;
                        aux4=0;
                        aux3 = convterDec(cadena[i].substring(6,11));
                        aux4 = convterDec(cadena[i].substring(11,16));
                        aux6 = cadena[i].substring(16,21);
                        aux5 = aux3 + aux4;
                        cadaxu = convterBina(aux5);
                        cadMen = cadMen + "Resultado:" + cadaxu + " - Registro:"+aux6+"<br>";
                        cadaxu ="";     
                    }else{
                        aux3=0;
                        aux4=0;
                        aux3 = convterDec(cadena[i].substring(6,11));
                        aux4 = convterDec(cadena[i].substring(11,16));
                        aux6 = cadena[i].substring(16,21);
                        aux5 = aux3 - aux4;
                        if(aux5<0){
                            aux5 = 0
                        }
                        cadaxu = convterBina(aux5);
                        cadMen = cadMen + "Resultado:" + cadaxu + " - Registro:"+aux6+"<br>";
                        cadaxu ="";
                    }   
                break;
                case "100011":
                    texto = texto + " - DirecionMemoria:" + cadena[i].substring(26,31)+ "- Escribir en registro" +  cadena[i].substring(21 , 26)+ "<br>"; 
                break;
                case "101011":
                    texto = texto + " - DirecionMemoria:" + cadena[i].substring(26,31)+ "- Escribir en memoria" +  cadena[i].substring(21 , 26)+ "<br>"; 
                break; 
                case "000010":
                    texto = texto + " - DirecionMemoria: 4 + " + cadena[i].substring(26,31) + "<br>";   
                break
                default:
                    texto = texto + "ERORR" ;  
                break;  
            }
        }
        mostrarRC.innerHTML =  cadMen;
    }else{
        alert("Tienes que agregar una instrucion");            
    }   
})

MEN_2.addEventListener('click',function(){
    if(contInst != 0){
        texto="";
        cadMen="";    
        mostrarRC.classList.add("show");
        cadena = memoryInstru.split('<br>');
        for(var i=0; i<cadena.length-1;i++){
            texto =texto + "Ciclo"+(i+3)+":<br>";
            switch(cadena[i].substring(0,6)){
                case "000000":
                   texto = texto + "MentoReg:0 - MenRead:1<br>"
                break;
                case "100011":
                    texto = texto + "MentoReg:1 - MenRead:1 - RegWrite:1 - MenWrite:0<br>"
                break;
                case "101011":
                    texto = texto + "MentoReg:0- MenRead:0 - RegWrite:0 - MenWrite:1<br>"  
                break; 
                case "000010":
                    texto = texto + "MentoReg:0- MenRead:0 - RegWrite:0 - MenWrite:0<br>"
                break
                default:
                    texto = texto + "ERORR" ;  
                break;  
            }
        }
        mostrarRC.innerHTML =  texto;
    }else{
        alert("Tienes que agregar una instrucion");            
    }   
})

WB.addEventListener('click',function(){
    if(contInst != 0){
        texto="";
        cadMen="";    
        mostrarRC.classList.add("show");
        cadena = memoryInstru.split('<br>');
        for(var i=0; i<cadena.length-1;i++){
            texto =texto + "Ciclo"+(i+4)+":<br>";
            switch(cadena[i].substring(0,6)){
                case "000000":
                   texto = texto + "MentoReg:0 - MenRead:1<br>"
                break;
                case "100011":
                    texto = texto + "MentoReg:1 - MenRead:1 - RegWrite:1 - MenWrite:0<br>"
                break;
                case "101011":
                    texto = texto + "MentoReg:0- MenRead:0 - RegWrite:0 - MenWrite:1<br>"  
                break; 
                case "000010":
                    texto = texto + "MentoReg:0- MenRead:0 - RegWrite:0 - MenWrite:0<br>"
                break
                default:
                    texto = texto + "ERORR" ;  
                break;  
            }
        }
        mostrarRC.innerHTML =  texto;
    }else{
        alert("Tienes que agregar una instrucion");            
    }   
})



function convterDec(cadena_Le){
    var dec = 0; 
    for(var u=0; u <5;u++){
        if(cadena_Le[u]=="1"){
            dec= dec + Math.pow(2,4-u);
        }
    }
    return dec;
}

function convterBina( valor){
    var cadenac="";

    switch(valor){
        case 0:
            cadenac = "00000";
        break;
        case 1:
            cadenac = "00001";
        break;
        case 2:
            cadenac = "00010";
        break;
        case 3:
            cadenac = "00011";
        break;
        case 4:
            cadenac = "00100";
        break;
        case 5:
            cadenac = "00101";
        break;
        case 6:
            cadenac = "00110";
        break;
        case 7:
            cadenac = "00111";
        break;
        case 8:
            cadenac = "01000";
        break;
        case 9:
            cadenac = "01001";
        break;
        case 10:
            cadenac = "01010";
        break;
        case 11:
            cadenac = "01011";
        break;
        case 12:
            cadenac = "01100";
        break;
        case 13:
            cadenac = "01101";
        break;
        case 14:
            cadenac = "01110";
        break;
        case 15:
            cadenac = "01111";
        break;
        case 16:
            cadenac = "10000";
        break;
        case 17:
            cadenac = "10001";
        break;
        case 18:
            cadenac = "10010";
        break;
        case 19:
            cadenac = "10011";
        break;
        case 20:
            cadenac = "10100";
        break;
        case 21:
            cadenac = "10101";
        break;
        case 22:
            cadenac = "10110";
        break;
        case 23:
            cadenac = "10111";
        break;
        case 24:
            cadenac = "11000";
        break;
        case 25:
            cadenac = "11001";
        break;
        case 26:
            cadenac = "11010";
        break;
        case 27:
            cadenac = "11011";
        break;
        case 28:
            cadenac = "11100";
        break;
        case 29:
            cadenac = "11101";
        break;
        case 30:
            cadenac= "11110";
        break;
        case 31:
            cadenac= "11111";
        break;
    }    
    return cadenac;
}