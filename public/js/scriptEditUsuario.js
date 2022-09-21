window.addEventListener('load', function() {

    let formulario = document.getElementById('editarUsuario');

     formulario.addEventListener('submit', function(evento) {
    
       let errores = [];
       
          let nombre = document.querySelector("#firstname");

          if(nombre.value.length < 3){
           errores.push("el campo nombre debe ser mayor a 2 caracteres")
          };
          
          let apellido = document.querySelector("#apellido");

          if(apellido.value.length < 2){
           errores.push("el campo apellido debe ser mayor a 1 caracter")
          };

          let email = document.querySelector("#email");
          
          if(email.value.length == ""){
           errores.push("el campo email es obligatorio")
          };

          let password = document.querySelector("#password");

          if(password.value.length > 7){
           errores.push("el campo password debe tener un minimo de 8 caracteres")
          };

          let birthdate = document.querySelector("#birthdate");
          if(birthdate.value == ""){
           errores.push("el campo Fecha de Nacimiento es obligatorio")
          };
                    
               let file = document.querySelector("#foto");
               let acceptedExtensions = ['.jpg', '.png', '.jpeg', '.gif'];
  
               if (!file) {
                 errores.push ("Debe subir una imagen");   
               }
                   else {
                   let fileExtension = path.extname(file.originalname);
                   if(!acceptedExtensions.includes(fileExtension)) {
                   errores.push ("Las extensiones de imágenes permitidas son ${acceptedExtensions.join(', ')}"); 
                    };
                   }
   
             if (errores.length > 0) {
                evento.preventDefault();
             }
 
          let ulErrores = document.querySelector( ".errores")
          for (let i=0; i<errores.length; i++){
             ulErrores.innerHTML += "<li>"+ errores [i] +"</li>"
          }
    });
   })