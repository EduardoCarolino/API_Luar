const query = encodeURIComponent(`
    *[_type=="produto"]{
  nome,
  detalhesDoProduto,
  valor,
  image1{
    asset->{
      url
    }
  },
  image2{
    asset->{
      url
    }
  },
  image3{
    asset->{
      url
    }
  },
  image4{
    asset->{
      url
    }
  },
  NivelEstrela
}
  `);

const url = `https://2mhzqf1u.api.sanity.io/v2022-03-07/data/query/production?query=${query}`;

const produto = document.querySelector("#produto"); 

async function gerarProduto() {
    const receber = await fetch(url);
    const traduzir = await receber.json();
    const result = traduzir.result;

    result.forEach(element => {
        console.log(element);

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
        
        const urlImagem = element.image1?.asset?.url;

        produto.innerHTML += `<div class="col-4">
        
            <img src="${urlImagem}">
        </a>
        <h4>${element.nome}</h4>
        <div class="rating">
           ${nivel[0]}
           ${nivel[1]}
           ${nivel[2]}
           ${nivel[3]}
           ${nivel[4]}
        </div>
        <p>R$ ${element.valor}</p>
    </div>` 
    });
}

gerarProduto();

produto.addEventListener("click", evento => {
  result.forEach(element => {
    if(element.nome){

    }
  })
});