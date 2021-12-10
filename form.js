//Função que faz com que apareça o passo se selecionar a Cifra de César

var seletorCesar = document.querySelector(".seletorCesar")
var typeCod = document.getElementById("typeCod")

typeCod.addEventListener('change',function(){
    if (typeCod.value === "typeCodCesar"){
        seletorCesar.style.display = 'flex'
    }else{
        seletorCesar.style.display = 'none'
    }
})

//Função faz com que apareça o botão dada a tipo de codificação
var seletor = document.querySelectorAll(".codificar")
var codField__button__coding = document.querySelector(".codField__button__coding")
var codField__button__decoding = document.querySelector(".codField__button__decoding")
//ver oq o checked faz 

seletor[0].addEventListener('click', function(){
    if(seletor[0].checked){
        codField__button__coding.style.display = 'flex'
        codField__button__decoding.style.display = 'none'
    }
})

seletor[1].addEventListener('click', function(){
    if(seletor[1].checked){
        codField__button__coding.style.display = 'none'
        codField__button__decoding.style.display = 'flex'
    }
})

//Funções para entrar no método de codificar/decodificar 
//caso seja selecionado a base64 ou cifra de césar

var msg = document.getElementById("msg")
var resultado = document.querySelector(".resultado")

function digitarResultado(){
    if (typeCod.value === "typeCodBase64"){//usa a base64
        if(seletor[0].checked){//usar base64 para codificar
            var base64converter = btoa(msg.value)
            resultado.innerText = base64converter
        }else{//usar base64 para decodificar
            var base64deconverter = atob(msg.value)
            resultado.innerText = base64deconverter
        }
    }else{//usa cifra de cesar

        if(seletor[0].checked){//usar cifra de cesar para codificar (n fiz ainda)
            var qtdCesar = document.querySelector("#qtdCesar").value
            qtdCesar %=26
            var cesarCripto = ""
            resultado.innerText = ""
            var msgValue =  msg.value
            for(var i = 0; i<msgValue.length; i++){
                cesarCripto = msgValue.charCodeAt(i)
                if(cesarCripto>=65 && cesarCripto<=90){
                    cesarCripto+=qtdCesar
                    if(cesarCripto>90){
                        cesarCripto-=26
                    }else if(cesarCripto<65){
                        cesarCripto+=26
                    }
                }

                if((cesarCripto>=97 && cesarCripto<=122)){
                    cesarCripto+=qtdCesar
                    if(cesarCripto>122){
                        cesarCripto-=26
                    }else if(cesarCripto<97){
                        cesarCripto+=26
                    }

                }if(cesarCripto == 32){
                    cesarCripto += msgValue
                }


            resultado.innerText += String.fromCharCode(cesarCripto)    
            }

        }else{//usar cifra de cesar para decodificar (n fiz ainda)
            var qtdCesar = document.querySelector("#qtdCesar").value
            qtdCesar *=(-1)
            qtdCesar %=26
            var cesarCripto = ""
            resultado.innerText = ""
            var msgValue =  msg.value
            for(var i = 0; i<msgValue.length; i++){
                cesarCripto = msgValue.charCodeAt(i)
                if(cesarCripto>=65 && cesarCripto<=90){
                    cesarCripto+=qtdCesar
                    if(cesarCripto>90){
                        cesarCripto-=26
                    }else if(cesarCripto<65){
                        cesarCripto+=26
                    }
                }

                if((cesarCripto>=97 && cesarCripto<=122)){
                    cesarCripto+=qtdCesar
                    if(cesarCripto>122){
                        cesarCripto-=26
                    }else if(cesarCripto<97){
                        cesarCripto+=26
                    }
                }
            resultado.innerText += String.fromCharCode(cesarCripto)    
            }
    }
}}



