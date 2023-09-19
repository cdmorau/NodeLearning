function hola(nombre,micallback){
    
    setTimeout(function () {
        console.log("Hola, "+nombre);
        micallback();
    },1000 );

}

function adios(nombre,otrocallback) {
    setTimeout(function () {
        console.log("Adios, "+nombre);
        otrocallback();
    },);
     
}          

// Ejecución sincrona de dos asincronos
console.log("Iniciando proceso")
hola("Carlos", function () {
    adios("Carlitos", function() {
        console.log("Terminando proceso")
    })
}); 

// Ejecución asincrona de dos asincronos

console.log("Iniciando proceso")
hola("Carlos", function () {
    console.log("Hola soy el callback de hola") 
    
});     
adios("Carlitos", function() {
    console.log("Terminando proceso (Callback de adios)")
      
})