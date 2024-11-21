const tipo = encodeURIComponent(`
*[_type=="avaliacoes"]{
  Nome,
  Comentario,
  FotoUsuario{
    asset->{
      url
    }
  }
}`);

const urlE = `https://2mhzqf1u.api.sanity.io/v2022-03-07/data/query/production?query=${tipo}`;

async function avaliacoes(){
    const primeiro = await fetch(urlE);
    const segundo = await primeiro.json();
    const final = segundo.result;

    console.log(final);

    const avaliacoes = document.querySelector("#avaliacoes");
    console.log(avaliacoes);

    

    final.forEach(element => {

        const urlImage = element.FotoUsuario?.asset?.url;

        avaliacoes.innerHTML += `<div class="col-3">
                        <i class="fa !text-[#ffb9b9] fa-quote-left"></i>
                        <p>${element.Comentario}</p>
                        <div class="rating">
                            <i class="fa !text-[#89A992] fa-star"></i>
                            <i class="fa !text-[#89A992] fa-star"></i>
                            <i class="fa !text-[#89A992] fa-star"></i>
                            <i class="fa !text-[#89A992] fa-star"></i>
                            <i class="fa !text-[#89A992] fa-star"></i>
                        </div>
                        <img class="sc-380:!hidden" src="${urlImage}">
                        <h3>${element.Nome}</h3>
                    </div>`;
    })
    
}

avaliacoes();