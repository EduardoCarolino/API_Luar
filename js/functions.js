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

const query = encodeURIComponent(`
    *[_type == "maisVendidos"]{
      Nome,
      Foto{
        asset->{
          url
        }
      },
      NivelEstrela
    }
`);
  
  const url = `https://2mhzqf1u.api.sanity.io/v2022-03-07/data/query/production?query=${query}`;
  




async function gerar(){
    const requisicao = await fetch(url);
    const tratar = await requisicao.json();
    const conteudo = tratar.result;

    let campo = document.querySelector("#campo");

    
    conteudo.forEach(element => {
        let nivelEstrela = element.NivelEstrela;

        const nivel = [];
  
        nivelEstrela = nivelEstrela.toString().split(",");
        let nivelEstrelaInteiro = Number(nivelEstrela[0]);
        let nivelEstrelaMenor = Number(nivelEstrela[1]);

        // nivelEstrelaMenor = isNaN(nivelEstrela);
        // let aux = isNaN(nivelEstrelaMenor);

        for(let i = 5; i > 0; i--){
            if(nivelEstrelaInteiro > 0){
                nivel.push('<i class="fa fa-star"></i>');
                nivelEstrelaInteiro --;
            }else if(typeof(nivelEstrelaMenor) === "number" && nivelEstrelaMenor >= 1 && nivelEstrelaMenor <= 9){
                nivel.push('<i class="fas fa-star-half-alt"></i>');
                // nivelEstrelaMenor = true;
                nivelEstrelaMenor = 0;
            }else if(nivelEstrelaInteiro === 0 /*&& nivelEstrelaMenor aux === true*/){
                nivel.push('<i class="fa fa-star-o"></i>');
            }
        }  
        
        /**
         estrela inteira: <i class="fa fa-star"></i>
         estrela metade: <i class="fas fa-star-half-alt"></i>
         estrela vazia: <i class="fa fa-star-o"></i>
         */

         const imagemUrl = element.Foto?.asset?.url;

        const teste = `<div class="col-4">
         <a href="produto.html"><img class="shadow-default" src="${imagemUrl}"></a>
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