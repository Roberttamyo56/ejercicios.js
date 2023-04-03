
function clima(estaLloviendo){
  if (estaLloviendo){
    console.log("Esta lloviendo");
  }else{
    console.log("No esta lloviendo");
  }
}

function calcular(num1, num2, num3){
  return (num1 + num2 + num3)
}

function areaTrian(base, altura){
  return (base * altura)/2
}



 // Cositas :)
function areaTrianDos(base, altura, texto){
  document.write(texto + String((base * altura)/2))
}

console.log(areaTrianDos(parseFloat(prompt("Ingrese la base: ")),parseFloat(prompt("Ingrese la altura")),"El resultado es: "))




function promedio(nota1, nota2, nota3){
  let prom = (nota1+nota2+nota3)/3
  if (prom >=3){
    document.write("Aprobo con " + prom)
  }else {
    document.write("Reprobo con " + prom)
  }
}




function calculadora(operacion, num1, num2){
  switch (operacion){
    case "suma":
      return num1 + num2
    case "resta":
      return num1 - num2
    case "multiplicacion":
      return num1 * num2
    case "division":
      return num1 / num2
    case "exponente":
      return num1 ** num2
    default:
      return "Operacion inexistente"
  }
}

console.log(calculadora("division", 2, 0))

