const URLSobre = 'https://2mhzqf1u.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type%3D%3D%22inicio%22%5D%0A'

window.addEventListener('load', async() => {
    try {
        const resposta = await fetch(URLSobre, {
            method: 'GET'
        });

        const dados = await resposta.json();
        const teste = dados.result
        console.log(teste)
        dados.result.forEach(element => {
            const teste2 = document.querySelector("#princ")
                // const divPai = window.document.querySelector("#div1")
                // const divfilho = window.document.querySelector("#div2")

            // const div1 = document.createElement('div')
            // div1.classList.add("#div3")
            // const h1 = document.createElement('h1')
            // h1.classList.add("#classlistname")
            // const small = document.createElement('small')

            // h1.textContent = element.inicio
            // small.textContent = element.texto

            // div2.classList.add("#div4")
            // const h12 = document.createElement('h1')
            // h12.classList.add("#classlistname2")
            // const small2 = document.createElement('small')

            // h12.textContent = element.marketing
            // small2.textContent = element.texto2


            // div1.appendChild(h1)
            // div1.appendChild(small)
            // div2.appendChild(h12)
            // div2.appendChild(small2)
            // divPai.appendChild(div1)
            // divfilho.appendChild(div1)


            teste2.innerHTML = `<div id="div3" class="col-2">
                        <p>Sobre nós</p>
                        <h1 id="classlistname" class="sc-420:!text-[27px]">${teste[0].titulo}</h1>
                        <small>
                        ${teste[0].texto}
                        </small><br>
                    </div>
                    <div id="div4" class="col-2">
                        <p>O que fazemos?</p>
                        <h1 id="classlistname2" class="sc-420:!text-[27px]">${teste[0].marketing}</h1>
                        <small>
                        ${teste[0].texto2}
                        </small><br>
                        <a onclick="link('https://api.whatsapp.com/send/?phone=5545920013524&text=Olá, gostaria de saber mais sobre as velas da Luar.&type=phone_number&app_absent=0')" class="btn cursor-pointer hover:!text-[white]">Entre em contato! &#8594;</a>
                    </div>
                    `

        });



    } catch (erro) {
        console.error('Dados nao encontrados', erro);
    }



})