function calcular(n1, n2, n3) {
    n1 = parseFloat(document.getElementById("n1").value)
    n2 = parseFloat(document.getElementById("n2").value)
    n3 = parseFloat(document.getElementById("n3").value)
    res = n1 && n2 && n3
    if (Number.isNaN(res)) {
        document.getElementById('resultado').innerHTML = `Adicione um número`

    }
    else {
        calculo = n1 + n2 + n3
        document.getElementById("resultado").innerHTML = `${n1} + ${n2} + ${n3}`

        if (n1 == n2 && n2 == n3) {
            document.getElementById("triangulo").innerHTML = `Forma um triângulo equilatero`
        }
        else if (n1 == n2 || n1 == n3 || n2 == n3) {
            document.getElementById("triangulo").innerHTML = `Forma um triângulo isósceles`
        }
        else {
            document.getElementById("triangulo").innerHTML = `Forma um triângulo escaleno`

        }


    }

}