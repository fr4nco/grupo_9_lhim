window.addEventListener('load', function() {

    let formulario = document.getElementById('agregarProducto');

     formulario.addEventListener('submit', function(evento) {

        
     
       let errores = [];
       
          let nombre = document.querySelector("#nombre");

          
          if(nombre.value.length < 3){

           errores.push("el campo nombre debe ser mayor a 2 caracteres")
          };

          let descripcion = document.querySelector("#descripcion");
          
          if(descripcion.value.length < 3){
           errores.push("el campo descripcion debe ser mayor a 2 caracteres")
          };



          let precio = document.querySelector("#precio");
          if(precio.value == ""){
           errores.push("el campo precio debe ser un numero")
          };
 
          let cantidad = document.querySelector("#cantidad");
          if(cantidad.value < 1){
           errores.push("el campo cantidad deber ser mayor que 0")
          };
             if (errores.length > 0) {
                evento.preventDefault();
             }
 
          let ulErrores = document.querySelector( ".errores")
          for (let i=0; i<errores.length; i++){
             ulErrores.innerHTML += "<li>"+ errores [i] +"</li>"
          }
    });
 })