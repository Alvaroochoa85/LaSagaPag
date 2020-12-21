/* Validacion de fecha*/
$('#fecha').on('change', function(){
    $('#edad').val(calcularEdad());
}); 


function calcularEdad() {
    var fecha_seleccionada = $('#fecha').val();
    var fecha_nac = new Date(fecha_seleccionada);
    var fecha_actual = new Date();
    var edad = (parseInt((fecha_actual - fecha_nac) / (1000*60*60*24*365)));
    return edad;
}