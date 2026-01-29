function cambiar(){
    const nombre='Alejandro'
    alert(`Ahora desde archivo ${nombre}`)
}

const ecma = () =>{
    alert('ahora con ECma6',j)
}

var i =4
let j= 10

var i = '4'

console.log('@@@ variables =>',i,j)

//let isInlove= prompt('¿Estas enamorad@?')
//console.log('@@@ isInlove =>',isInlove,typeof isInlove)

const suma = () =>{
    let valor1 =prompt('Introduce el valor 1')
    let valor2 =prompt('Introduce el valor 2')
    let suma = Number(valor1) + Number(valor2)
    //parseInt() floatInt()

    const label =document.getElementById('suma')
    label.textContent =`El resultado es: ${suma}`
    console.log('@@@ suma=> ',suma)
    if(suma>100 && suma < 199 ){
        console.log('@@@Mayor que 100 =>',suma)
    }else if(suma < 30){
        suma()
    }else if (suma ===200) {
        console.log('@@@ Comparando igual a 200 con tipo de variable',suma , typeof suma)
    }

    }



