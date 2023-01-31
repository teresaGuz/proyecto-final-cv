var datospersanale = {
      "nombre": "Jennie",
      "apellido": "Nichols",
      "edad": "26",
      "nacionalidad": "Estadounidense",//
      "nacimiento":"26 de diciembre 1996",
      "calle": "Valwood Pkwy",
      "numero": 8929,
      "ciudad": "Billings",
      "estado": "Michigan",
      "pais": "United States",
       "email": "jennie.nichols@example.com",
       "phone": "(272) 790-0888",
      "celular": "(489) 330-2385",
    }
var output = document.getElementById('output');
output.innerHTML = datospersanale.nombre + " "+datospersanale.apellido;
var  direction = document.getElementById('direction');
direction.innerHTML = "Direccion:"+ " " + datospersanale.calle + " "+ +datospersanale.numero+  ". " +datospersanale.ciudad+ ","+datospersanale.estado ;
var contact = document.getElementById('contact');
contact.innerHTML = "Edad:"+ " " + datospersanale.edad +  " "  +"Nacionalidad:"+ " " +datospersanale.nacionalidad+ " "+ "Nacimiento:"+ " " +datospersanale.nacimiento ;
var gmail = document.getElementById('gmail');
gmail.innerHTML = "correo:"+ " " + datospersanale.email;
var telefonos = document.getElementById('telefonos');
telefonos.innerHTML = "cel:"+ " " +datospersanale.celular+ " "+"tel:"+ " " +datospersanale.phone;