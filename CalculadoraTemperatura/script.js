function Converter() {
    var temperaturaFarenheit = 40;
    var temperaturaCelcius = temperaturaFarenheit.toFixed(1);
  
    var temperaturaFinal = (temperaturaFarenheit - 32) * 5/8;
    console.log("A temperatura será de: " + temperaturaFinal + "ºC");
    
    var temperaturaConvertida = document.getElementById("temperaturaConvertida");
    
    var resultadoFinal = "O resultado em Celcius é de: " + temperaturaFinal + "ºC";
    temperaturaConvertida.innerHTML = resultadoFinal;
    }
  