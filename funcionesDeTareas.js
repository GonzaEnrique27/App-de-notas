let fs = require('fs');

module.exports ={
    archivo : './tareasJson.json',
    leerJSON: () =>{
    let tareasJSON = fs.readFileSync('./tareasJson.json', 'utf-8');
    return JSON.parse(tareasJSON)
},
escribirJSON: (info) => {
    let nuevoJSON = JSON.stringify(info)
    fs.writeFileSync('./tareasJson.json', nuevoJSON, 'utf-8')
},
agregarTarea : (titulo, estado) => {
    let tareasAnteriores = this.leerJSON()

    let nuevaTarea = {
        titulo: tarea,
        estado : estado
    }
    tareasAnteriores.push(nuevaTarea)
    this.escribirJSON(tareasAnteriores)
}
}
