function criarCartao(categoria, pergunta, resposta){
let container = document.getElementById('container')
let cartao = document.createElement('article')
let respostaEstaVsivel = false
function virarCartao(){
respostaEstaVsivel =!respostaEstaVsivel
}
let respostaEstaVsivel = true
cartao.className = 'cartao'
cartao.innerHTML = `
<div class="cartao_conteudo">
<div class="cartao_conteudo">
                    <h3>Questão 2</h3>
                    <div class="cartao_conteudo_pergunta">
                        <P>que tipo de jogo é o fortnite?</P>
                    </div>
                    <div class="cartao_conteudo_resposta">
                       <P>battlegrounds.</P>
                    </div>
</div>`
container.appendChild(cartao)

}
