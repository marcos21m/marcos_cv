const url = 'https://randomuser.me/api/'

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    document.getElementById('fotoCV').src = data.results[0].picture.large;
    document.getElementById("Pais").innerHTML = data.results[0].location.country;
    document.getElementById("Email").innerHTML = data.results[0].email;
    document.getElementById('celular').innerHTML = data.results[0].cell;
    document.getElementById('NombreCompleto').innerHTML = data.results[0].name.first +" "+data.results[0].name.last;
    console.log(data);
  })
  .catch(err=>console.log(err));

let BotonLista = document.querySelectorAll("#BotonMasHabilidades, #BotonOcultarHabilidades, #ListaOtrasHabilidades");

BotonLista[1].style.display = "none";
BotonLista[2].style.display = "none";

document.getElementById('BotonMasHabilidades').onclick = function () {
  BotonLista[0].style.display = "none";
  BotonLista[1].style.display = "block";
  BotonLista[2].style.display = "block";

  document.getElementById("texto1").innerHTML = "Adaptabilidad" ;
  document.getElementById("texto2").innerHTML = "Trabajo en equipo" ;
  document.getElementById("texto3").innerHTML = "Empatía" ;
  document.getElementById("texto4").innerHTML = "Accesibilidad" ;     
}

document.getElementById('BotonOcultarHabilidades').onclick = function () {
  BotonLista[0].style.display = "block";
  BotonLista[1].style.display = "none";
  BotonLista[2].style.display = "none";
}
