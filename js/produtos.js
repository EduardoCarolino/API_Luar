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


async function gerarProduto() {
    const receber = await fetch(url);
    const traduzir = await receber.json();
    const result = traduzir.result;

    console.log(result);
    

    const produto = document.querySelector("#produto"); 
    
    console.log(produto);

    result.forEach(element => {
        console.log(element);
        
        const urlImagem = element.image1?.asset?.url;

        produto.innerHTML += `<div class="col-4">
        <a href="produto.html">
            <img src="${urlImagem}">
        </a>
        <h4>${element.nome}</h4>
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
  