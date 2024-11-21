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
  }
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
        
        const urlImagem = element.image1?.asset?.url;

        produto.innerHTML += `<div class="col-4">
        
            <img src="${urlImagem}">
        </a>
        <h4><a href="produto.html">${element.nome}</h4>
        <div class="rating">
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star-o"></i>
        </div>
        <p>R$ ${element.valor}</p>
    </div>` 
    });
}

gerarProduto()


// const tipo = 23;

// produto.addEventListener("click", (evento) => {
//   console.log(evento);
// });


// export {tipo};
  