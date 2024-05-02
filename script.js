var input = document.querySelector("#display");
var operador = "";
var stop = false;

function limpar() {
    input.value = "";
    document.querySelector("#history").innerHTML = "";
    operador = "";
    stop = false;
}

function add_numero(string) {
    if (!stop) {
        if (string === '.' && input.value.indexOf(".") === -1 || string !== '.') {
            input.value += string;
        }
    } else {
        if (string === '.' && input.value.indexOf(".") === -1 || string !== '.') {
            input.value = "";
            stop = false;
            document.querySelector("#history").innerHTML = "";
            operador = "";
            input.value += string;
        }
    }
}

function add_operador(op) {
    if (input.value === "") {
        input.value = "0";
    }
    if (operador === "") {
        operador = op;
        input.value += op;
    } else {
        total();
        input.value += op;
        operador = op;
        stop = false;
    }
}

function total() {
    if (!stop) {
        let numeros = input.value.split(operador);
        if (numeros[1] === "") {
            input.value += '0';
            numeros[1] = 0;
        }
        document.querySelector("#history").innerHTML = input.value;
        switch (operador) {
            case "+":
                input.value = Number(numeros[0]) + Number(numeros[1]);
                break;
            case "-":
                input.value = Number(numeros[0]) - Number(numeros[1]);
                break;
            case "x":
                input.value = Number(numeros[0]) * Number(numeros[1]);
                break;
            case "÷":
                input.value = Number(numeros[0]) / Number(numeros[1]);
                break;
            case "^":
                input.value = Number(numeros[0]) ** Number(numeros[1]);  
                break;
            case "√":
                calcularRaizQuadrada();
                break;
        }
        stop = true;
    }
}

function calcularRaizQuadrada() {
    if (input.value !== "√") {
        let numero = parseFloat(input.value);
        if (numero >= 0) {
            let raizQuadrada = Math.sqrt(numero);
            input.value = raizQuadrada;
            document.querySelector("#history").innerHTML = `√(${numero}) = ${raizQuadrada}`;
        }
    }
}
