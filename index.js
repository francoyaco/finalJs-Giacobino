const saludar = document.getElementById('saludar')
const ingresar = document.getElementById('ingresar')
const nombre = document.getElementById('nombre')
const saludarTitulo = document.createElement('h2')
const zonas = document.getElementById("zonas")






//Bienvenida
ingresar.onclick = () =>{
    const usuario = { nombre: nombre.value }
    
        localStorage.setItem('usuario', JSON.stringify(usuario))
        saludarTitulo.innerText = `Bienvenido ${usuario.nombre}`
        saludar.append(saludarTitulo)
}


// Array con asesores zonales
const asesores = [
    { id: 1, nombre: "Hugo", zona: "Palermo" },
    { id: 2, nombre: "Jorge", zona: "Belgrano" },
    { id: 3, nombre: "Carolina", zona: "Villa-Ortuzar" },
  ];
  
  zonas.onchange = (event) =>{
    const seleccionZona = document.getElementById('seleccionZona')
    seleccionZona.innerText = `Ud ha seleccionado la zona ${event.target.value} y su asesor sera ${asesores.find(obj=>obj.zona===event.target.value).nombre}`
  }


//calculo



let dinero = document.getElementById("dinero") //input
let dias = document.getElementById("dias") //input
let calcular = document.getElementById("calcular") //boton
let interesP = document.createElement("p") //crea elemento p
let interes = document.getElementById('interes')

calcular.onclick = () => {

  const tasa = 75 / 365;
  let parcial = (dinero.value * (tasa * dias.value)) / 100;
  let resultado = parcial + dinero.value;
  Swal.fire(`El interes sumado al capital sera de ${resultado}`)
  // interes.innerText = `El interes sumado al capital sera de ${resultado}`
  interes.append(interesP)

}

let url = 'https://criptoya.com/api/dolar'
fetch( url )
.then( respuesta => respuesta.json())
.then( datos => 
     document.getElementById('oficial').innerHTML= 
      `El dolar oficial es: ${datos.oficial}, 
       El dolar blue es: ${datos.blue},
      El dolar mep es: ${datos.mep}`
      
  
     )

