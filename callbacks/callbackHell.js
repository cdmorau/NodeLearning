function hola(nombre,micallback){
    
    setTimeout(function () {
        console.log("Hola, "+nombre);
        micallback(nombre);
    },1000 );

}

function hablar(callbackhablar){
    
    setTimeout(function () {
        console.log("bla bla bla bla");
        callbackhablar();
    },1000 );

}

function adios(nombre,otrocallback) {
    setTimeout(function () {
        console.log("Adios, "+nombre);
        otrocallback();
    },1000);
     
}

function conversacion(nombre, veces,callback){

    if (veces>=0) {
        hablar( function () {
            conversacion();
            
        });
    }
    else{
        callback(nombre);
    }
}

hola("Carlos", function (nombre) {
    adios(nombre,function(){
        console.log("Terminamos")
    });
});




// // Ejecución sincrona de dos asincronos
// console.log("Iniciando proceso")
// hola("Carlos", function (nombre) {
//     hablar(function (){
//         hablar(function (){
//             adios(nombre, function() {
//                 console.log("Terminando proceso")
//             });
//         });
//     });
// }); 

