let apiUrl = "https://2mhzqf1u.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%22frase%22%5D%7B%0A++titulo%2C%0A++frase%0A%7D"

async function fetchProductData(params) {
    try{
        const response = await fetch(apiUrl);
        const data = await response.json();
        
        if(data.result && data.result.length > 0){
            const frase = data.result[0];
            document.getElementById("tituloPrincipal").textContent = frase.titulo;
            document.getElementById("frasePrincipal").textContent = frase.frase;

        }else{
            console.error('Deu pau!');
        }
    } catch(e) {

    } 
}

fetchProductData();
