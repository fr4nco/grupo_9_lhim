window.addEventListener('load', function() {

    let formulario = document.getElementById('formLogin');

     formulario.addEventListener('submit', function(evento) {
    
       let errores = [];
       
          let email = document.querySelector("#email");
          
          if(email.value.length == ""){
           errores.push("el campo email es obligatorio")
          };

          let password = document.querySelector("#password");

          if(password.value.length < 8){
           errores.push("el campo password debe tener un minimo de 8 caracteres")
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