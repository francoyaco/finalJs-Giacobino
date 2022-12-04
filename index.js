const saludar = document.getElementById("saludar");
const ingresar = document.getElementById("ingresar");
const nombre = document.getElementById("nombre");
const saludarTitulo = document.createElement("h2");
const zonas = document.getElementById("zonas");

//Bienvenida
ingresar.onclick = () => {
  const usuario = { nombre: nombre.value };

  localStorage.setItem("usuario", JSON.stringify(usuario));
  saludarTitulo.innerText = `Bienvenido ${usuario.nombre}`;
  saludar.append(saludarTitulo);
};

// Array con asesores zonales
const asesores = [
  { id: 1, nombre: "Hugo", zona: "Palermo" },
  { id: 2, nombre: "Jorge", zona: "Belgrano" },
  { id: 3, nombre: "Carolina", zona: "Villa-Ortuzar" },
];

zonas.onchange = (event) => {
  const seleccionZona = document.getElementById("seleccionZona");
  seleccionZona.innerText = `Ud ha seleccionado la zona ${
    event.target.value
  } y su asesor sera ${
    asesores.find((obj) => obj.zona === event.target.value).nombre
  }`;
};

//calculo

let dinero = document.getElementById("dinero"); //input
let dias = document.getElementById("dias"); //input
let calcular = document.getElementById("calcular"); //boton
let interesP = document.createElement("p"); //crea elemento p
let interes = document.getElementById("interes");

calcular.onclick = () => {
  const tasa = 75 / 365;
  let parcial = (dinero.value * (tasa * dias.value)) / 100;
  let resultado = parcial + dinero.value;
  Swal.fire(`El interes sumado al capital sera de $ ${ Math.round(resultado)} `);
  interes.append(interesP);
};

let url = "https://criptoya.com/api/dolar";
fetch(url)
  .then((respuesta) => respuesta.json())
  .then((datos) =>(document.getElementById("root").innerHTML = 
  `<div class="accordion accordion-flush" id="accordionFlushExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingOne">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
              Dolar Oficial BCRA
            </button>
          </h2>
          <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
            <div  id='oficial' class="accordion-body">${datos.oficial}</div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingTwo">
            <button  class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
              Dolar Paralelo
            </button>
          </h2>
          <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
            <div id='blue' class="accordion-body">${datos.blue}</div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingThree">
            <button  class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
              Dolar Mep
            </button>
          </h2>
          <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
            <div id='mep' class="accordion-body">${datos.mep}</div>
          </div>
        </div>
      </div>
      `)
  );
