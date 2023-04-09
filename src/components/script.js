function verificar(){
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.querySelector('div#res')

    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('Verifique os dados e tente novamente')
    } else{
        let fsex = document.getElementsByName('radsex')
        let idade = (ano - Number(fano.value))
        let genero = ''
        let img = document.createElement('img')  //criar um elemento pelo js 
        img.setAttribute('id', 'foto')   //inserir uma imagem pelo js


        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', './assets/img/homemCriança.png')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src', './assets/img/homemJovem.png')
            }else if(idade < 50){
                //Adulto
                img.setAttribute('src', './assets/img/homemAdulto.png')
            }else{
                //idoso
                img.setAttribute('src', './assets/img/homemIdoso.png')
            }
        } else if(fsex[1].checked){
            genero = 'Mulher'
             if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', './assets/img/mulherCriança.png')
            }else if(idade < 38){
                //jovem
                img.setAttribute('src', './assets/img/mulherJovem.png')
            }else if(idade < 70){
                //Adulto
                img.setAttribute('src', './assets/img/mulherAdulta.png')
            }else{
                //idoso
                img.setAttribute('src', './assets/img/mulherIdosa.png')
            }
        }
        res.style.textAlign = 'center'   //para estilizar dentro do javascript
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)   //para mostrar a imagem na tela
    }
}