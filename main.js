/* Funcion para hacer que se agrande la imagen, utilizando la libreria Materialize*/
document.addEventListener('DOMContentLoaded', () => {//lo que le digo es que cuando el contenido del DON es decr de nuestra pagina alla cargado entonces se ejecuta el codigo
	const imgLightBox = document.querySelectorAll('.materialboxed');// agregamos la funcion de tipo flecha, lo que hacemos es obtener todos los elementos de nuestra pagina que tengan esta clase y nos devuelve un arreglo 
	M.Materialbox.init(imgLightBox, {//accedo a M. Materialbox y ejecutamos el material box
		inDuration: 500,//Duracion de entrada
		outDuration: 500//Duracion de Salida.
	});
}); 

/*Funcionalidad de scroll */
document.querySelector(".menu-btn").addEventListener("click", () => {
  document.querySelector(".nav-menu").classList.toggle("show");
});

ScrollReveal().reveal('.principal');
ScrollReveal().reveal('.nuevos-eventos', { delay: 500 });
ScrollReveal().reveal('.tarjetas-banner1', { delay: 500 });
ScrollReveal().reveal('.tarjetas-banner2', { delay: 500 });

/* Funcionalidad al boton de Menu
document.querySelector('.menu.btn').addEventListener('click',()=>{
    document.querySelector('.menu').classList.toggle('show');
});*/
/**
 *  <script type="text/javascript">
    /*Esta funcion devuelve true o false dependiendo si la fecha es correcta.*/
    /*Tiene que recibir el dia, mes y año*/
    //function isValidDate(day, month, year){
      //  var dteDate;
        //En javascript, el mes empieza en la posicion 0 y temina en la 11
        //siendo 0 el mes de enero
        // por esta razon, tenemos que restar 1 al mes
        //month = month -1;
        // Establecemos un objeto Data con los valores recibidos
        // Los parametros son: año, mes, dia, hora, minuto y segundos
        //dteDate = new Date(year, month, day);

        // devuelve true o false
        //return ((day == dteDate.getDate() && (month == dteDate.getMonth())&& year == dteDate.getFullYear()));
   // }
    /** 
     * Funcion para validar la fecha
     * Tiene que recibir:
     * La fecha en formato ingles yyyy-mm-dd
     * Devuelve:
     * true-Fecha correcta
     * false-Fecha Incorrecta
     * */

    //function validar_fecha(fecha){
       // var patron = new RegExp("^(19|20)+([0-9]{2})([-])([0-9]{1,2})([-])([0-9]{1,2})$");
        //if(fecha.search(patron) == 0){
          //  var values = fecha.split("-");
            //if(isValidDate(values[2], values[1], values[0])){
              //  return true;
            //} 
        //}
        //return false;
   // }

    /**
     * Esta funcion calcula la edad de una persona y los meses
     * La fecha tiene que tener el formato yyyy-mm-dd que es
     * metodo que por defecto devuelve el <input type="date">
     */
    //function calculaEdad(){
      //  var fecha = document.getElementById("user_date").value;
        //if(validar_fecha(fecha)==true){
            //si la fecha es correcta, calculamos la edad
          //  var values = fecha.split("-");
            //var dia = values[2];
            //var mes = values[1];
            //var dia = values[0];

            //usamos los valores actuales
            //var fecha_hoy = new Date();
            //var ahora_anio = fecha_hoy.getYear();
            //var ahora_mes = fecha_hoy.getMonth();
            //var ahora_dia = fecha_hoy.getDate();

            //realizamos el calculo
            //var edad = (ahora_anio + 1900) - anio;
            //if(ahora_mes < mes){
              //  edad--;
           // }
            //if((mes == ahora_mes) && (ahora_dia < dia)){
             //   edad--;
            //}
            //if(edad > 1900){
             //   edad -= 1900;
           // }
            //calculamos los meses
            //var meses = 0;
            //if(ahora_mes > mes)
             //   meses = ahora_mes-mes;
            //if(ahora_mes < mes)
             //   meses = 12 - (mes-ahora_mes);
            //if(ahora_mes == mes && dia > ahora_dia)
             //   meses = 11;        

            //calculamos los dias
            //var dias = 0;
            //if(ahora_dia > dia)
              //  dias = ahora_dia-dia;
            //if(ahora_dia < dia){
              //  ultimoDiaMes = new Date(ahora_anio,ahora_mes, 0);
               // dias = ultimoDiaMes.getDate()-(dia-ahora_dia);
           // }
            //document.getElementById("result").innerHTML="Tienes"+edad+"años,"+meses+"meses y" +dias+"dias";
        //}else{
          //  document.getElementById("result").innerHTML = "La fecha" +fecha+ "es incorrecta";

        //}
   // }

    //</script>
 //*/
