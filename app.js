const fs = require ('fs');
const process = require('process');
let tareasJson = fs.readFileSync('./tareasJson.Json' , 'utf-8'); 
let tareasParseadas = JSON.parse(tareasJson);

let action = process.argv[2];

switch (action) {    
    case "listar":       
       for (let i = 0; i < tareasParseadas.length; i++){       
     console.log(`Tarea: ${tareasParseadas[i].titulo} \nEstado: ${tareasParseadas[i].estado}`)          
     console.log("-----------------------------------------------------")
       }
       break;
       case undefined:
           console.log("Atencion tienes que pasar una accion");
           break
           default:
               console.log("No entiendo que quieres hacer")

}



