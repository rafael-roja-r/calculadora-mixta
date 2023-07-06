function calcular() {
  var operation = document.getElementById("operation").value;
  var num1 = parseFloat(document.getElementById("num1").value);
  var num2 = parseFloat(document.getElementById("num2").value);
  var resultado = 0;

  if (isNaN(num1) || isNaN(num2)) {
    alert("Por favor, ingresa números válidos.");
    return;
  }

  switch (operation) {
    case "suma":
      resultado = num1 + num2;
      break;
    case "resta":
      resultado = num1 - num2;
      break;
    case "multiplicacion":
      resultado = num1 * num2;
      break;
    case "division":
      resultado = num1 / num2;
      break;
    case "potencia":
      resultado = Math.pow(num1, num2);
      break;
    default:
      alert("Por favor, selecciona una operación válida.");
      return;
  }

  document.getElementById("resultado").textContent = resultado;
}
