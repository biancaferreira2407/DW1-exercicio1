function fbhaskara(){
    let a=parseFloat(document.getElementById("A").value)
    let b=parseFloat(document.getElementById("B").value)
    let c=parseFloat(document.getElementById("C").value)
    let aux= b**2-4*a*c;
    if(aux<0){
        alert("não é possível calcular")
    }else{
    let r= (b + aux**1/2)/(2*a);
    let rr= (b - aux**1/2)/(2*a);
    document.getElementById("saida").innerHTML= "x1 = "+r+"</br>"+"x2 = "+rr ;
}
}

function animarBotao(botao) {
    botao.classList.add("piscar");

    setTimeout(() => {
        botao.classList.remove("piscar");
    }, 600);

    fbhaskara(); // chama sua função normal
}