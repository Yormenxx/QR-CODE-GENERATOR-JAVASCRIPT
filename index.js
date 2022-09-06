
const container = document.querySelector(".container");
const boton = document.querySelector(".buttomSubmit");
const datos = document.getElementById("datos");
const qrImg = document.querySelector(".qrImg img")


boton.addEventListener("click",()=>{

    let qrValor = datos.value
    if(!qrValor)return;
    boton.textContent="Generando codigo"
    console.log(datos.value)

    qrImg.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValor}`
    qrImg.addEventListener("load",()=>{
        container.classList.add("active")
        boton.textContent="Generar el codigo"
    })
    
})

datos.addEventListener("keyup",()=>{
    if (!datos.value){
        container.classList.remove("active")
    }
})







