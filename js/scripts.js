
var campos = document.querySelectorAll("#boxticket .test");

var leerDatos = function() {

    var boxticket = document.getElementById("boxticket"),
        aviso     = document.getElementById("titleBillete"),
        origemV   = campos[0].value,
        destinoV  = campos[1].value,
        colorV    = $('input[name=color]').val(),
        meses, dias, xData, fecha;

    meses = [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre"
    ];
    dias = [
      "Domingo",
      "Lunes",
      "Martes",
      "Miércoles",
      "Jueves",
      "Viernes",
      "Sábado"
    ];
    xData = new Date();
    fecha = (
      dias[xData.getDay()] + ", " +
      xData.getDate() + " de " +
      meses[xData.getMonth()] + " de " +
      xData.getFullYear() + " , " +
      xData.getHours() + ":" + xData.getMinutes()
    );

    if(origemV === "" || destinoV === "") {
        boxticket.className = "animMove";
        for (var i = 0; i < campos.length; i++) {
          campos[i].className = "destacar";
        }
        aviso.innerHTML = "<p class='msn'>Ops,\
                            <span class='memo'>\
                              :(\
                            </span>\
                              Los campos origem y destino son obligatorios.\
                          </p>";
    } else {
        aviso.innerHTML = "<p id='titleBillete'>Viagens Javascript</p>";
        boxticket.className = "";

        for (var i = 0; i < campos.length; i++) {
          campos[i].className = "";
        }

        var fechaTotal = origemV + " " + fecha,
            hora       = document.getElementById("hora").options[document.getElementById("hora").selectedIndex].text,
            cantidad   = document.getElementById("cuant").options[document.getElementById("cuant").selectedIndex].value,
            sexo       = document.getElementById("sexo").options[document.getElementById("sexo").selectedIndex].text,
            boxId      = Math.floor(Math.random() * 1000);

        imprimirBillete(
          fechaTotal,
          origemV,
          destinoV,
          hora,
          cantidad,
          sexo,
          colorV
        );
    }
};

(function eventos() {
    var enviar = document.getElementById("enviarTJ");
        enviar.addEventListener("click", leerDatos);
    
    for(var i = 0; i < campos.length; i++) {
        campos[i].onmouseover = function(e) {
          this.value = "";
        }
    }
})();

function imprimirBillete(fechaTotal, origemV, destinoV, hora, cantidad, sexo, colorV) {
    var container = document.getElementById("containerVL");
    container.innerHTML += '<div class="box" style="background:' + colorV + '">\
                              <a class="cerrarBL" data-clic="close" href="JavaScript:void(0)">x</a>\
                              <p class="fecha">' + fechaTotal + '</p>\
                              <p>Origem: ' + origemV + '</p>\
                              <p>Destino: ' + destinoV + '</p>\
                              <div class="clearfix">\
                                <span class="hora">Hora: ' + hora + '</span>\
                                <span class="cant">Cantidad: ' + cantidad + '</span>\
                              </div>\
                              <p>Sexo: ' + sexo + '</p>\
                            </div>';

  var box      = document.querySelectorAll('.box'),
      boxArray = Array.prototype.slice.call(box, 0);

  boxArray.forEach(function(x) {
    var close = x.querySelector('a[data-clic="close"]');
        close.onclick = function(e) {
          close.parentNode.remove();
        }
  });
}







