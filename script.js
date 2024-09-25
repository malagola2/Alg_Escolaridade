// Solicitar o número da série escolar

let Série = parseInt (prompt("Qual o número da série escolar"))

// Verificar a classificação do nível de estudo

if (Série <=0) {
    alert ("Entrada é inválida");
} else if (Série <=5){
    alert ("Fundamental 1");
} else if (Série >=6 && Série <=9){
    alert ("Fundamental 2");
} else if (Série >=10 && Série <=12){
    alert ("Ensino Médio");
} else {
    alert ("Ensino Superior");
}