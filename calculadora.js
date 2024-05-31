var val1,val2,res, caja
/*v1= parseFloat(prompt("Captura el valor 1"))
v2= parseFloat(prompt("Captura el valor 2"))
//v2.parseFloat(prompt("Captura el valor 2"))
res=v1+v2
alert("La suma de los valores es : "+res)*/

caja=document.getElementById("res")

function calcular(){
    val1=parseFloat(document.getElementById("v1").value)
    val2=parseFloat(document.getElementById("v2").value)
    console.log(val1+" "+val2)
    res=val2/(val1*val1)
    if (res < 18.5)
    {
    caja.value=res.toFixed(2)+ " Bajo"
    }   
    else if (res <= 24.9)
    {
        caja.value=res.toFixed(2)+ " Normal"
    }
    else if (res<= 29.9)
    {
        caja.value=res.toFixed(2)+ " Tu IMC es de sobrepeso "
    }
    else
    {
        caja.value=res.toFixed(2)+ " Tienes obecidad "
    }  
}