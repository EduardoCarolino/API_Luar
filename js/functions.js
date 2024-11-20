function switch_menu() {
    let dropdown_menu = document.getElementById("drop-down")
    if (dropdown_menu) {
        if (dropdown_menu.classList.contains("opacity-[0]")) {
            dropdown_menu.classList.remove("opacity-[0]")
        } else {
            dropdown_menu.classList.add("opacity-[0]")
        }
    }
}

function link(link) {
    window.location.href = link
}

function getBuy(link, e) {
    console.log(link, e)
    let doc = document.getElementById(e)
    if (doc) {
        window.location.href = link.replace("$quantidade", doc.value)
    }
}





//////////

const url = "https://2mhzqf1u.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type%3D%3D%22maisVendidos%22%5D%0A"

const urlImage = "https://2mhzqf1u.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type%3D%3D%22maisVendidos%22%5D.Foto.asset._ref%0A";

async function gerar(){
    const requisicao = await fetch(url);
    const requisicaoImage = await fetch(urlImage);

    const tratar = await requisicao.json();
    const tratarImage = await requisicaoImage.json();

    const conteudo = tratar.result;
    const conteudoImage = tratarImage.result;
    let campo = document.querySelector("#campo");

    console.log(conteudoImage);
    


    console.log(conteudo);
    conteudo.forEach(element => {
        console.log(element);

        console.log(element.Foto)

        let nivelEstrela = element.NivelEstrela;

        const nivel = [];
  
        nivelEstrela = nivelEstrela.toString().split(",");
        let nivelEstrelaInteiro = Number(nivelEstrela[0]);
        let nivelEstrelaMenor = Number(nivelEstrela[1]);

        nivelEstrelaMenor = isNaN(nivelEstrela);

        console.log(nivelEstrelaMenor);

        for(let i = 5; i > 0; i--){
            if(nivelEstrelaInteiro > 0){
                nivel.push('<i class="fa fa-star"></i>');
                nivelEstrelaInteiro --;
            }else if(nivelEstrelaMenor === false){
                nivel.push('<i class="fas fa-star-half-alt"></i>');
                nivelEstrelaMenor = true;
            }else if(nivelEstrelaInteiro === 0 && nivelEstrelaMenor === true){
                nivel.push('<i class="fa fa-star-o"></i>');
            }
        }  

        console.log(nivelEstrelaInteiro);
        
        console.log(nivel);
        
        /**
         estrela inteira: <i class="fa fa-star"></i>
         estrela metade: <i class="fas fa-star-half-alt"></i>
         estrela vazia: <i class="fa fa-star-o"></i>
         */
        
        const teste = `<div class="col-4">
         <a href="produto.html"><img class="shadow-default" src="${conteudoImage[3]}"></a>
         <h4 class="mt-[5px]">${element.Nome}</h4>
         <div class="rating">
           ${nivel[0]}
           ${nivel[1]}
           ${nivel[2]}
           ${nivel[3]}
           ${nivel[4]}
         </div>
         <section
            onclick="link('https://api.whatsapp.com/send/?phone=5545920013524&text=Olá, gostaria de saber mais sobre as velas da linha Oh, Happy Day.&type=phone_number&app_absent=0')"
            class="w-[180px] cursor-pointer flex gap-[10px] justify-center items-center h-[35px] bg-[#89A992] rounded-[50px] mt-[10px]">
            <p class="font-[JostMedium] text-[white]">Entrar em contato</p>
            <i class='bx bxl-whatsapp text-[25px] text-white '></i>
         </section>
        </div>`

        campo.innerHTML += teste;
    });

}

gerar();