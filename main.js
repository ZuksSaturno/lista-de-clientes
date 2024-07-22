
const form=document.getElementById('formulario');
const clientes=[];
const telclientes=[];
let linhas=''

addEventListener('submit',function(e){
    e.preventDefault()

    /*buscavalor() confere conteudo dos arrays*/
    adicionalinha()
    atualizaTabela()
})

function adicionalinha(){
    const inputNome=document.getElementById('nome');
    const inputNumero=document.getElementById('numero');

    if (clientes.includes(inputNome.value)) {
        alert('Este cliente já esta cadastrado')
    } else { if (telclientes.includes(inputNumero.value)) {
        alert('Este telefone já esta cadastrado')
    } else {
        clientes.push(inputNome.value)
        telclientes.push(inputNumero.value)

        let linha= `<tr>`
        linha += `<td>${inputNome.value}</td>`
        linha += `<td>${inputNumero.value}</td>`
        linha += `</tr>`
        linhas += linha

        inputNome.value="";
        inputNumero.value="";
    }}}
function atualizaTabela(){
    const corpoTabela=document.querySelector('tbody')
    corpoTabela.innerHTML=linhas
}
function buscavalor(){
    console.log(clientes);
    console.log(telclientes);
}


/* 
Fonte da parte de formatação de telefone:
https://pt.stackoverflow.com/questions/51109/como-mascarar-um-input-no-html5

*/ 

const tel = document.getElementById('numero') 

tel.addEventListener('keypress', (e) => mascaraTelefone(e.target.value)) 
tel.addEventListener('change', (e) => mascaraTelefone(e.target.value)) 

const mascaraTelefone = (valor) => {
    valor = valor.replace(/\D/g, "")
    valor = valor.replace(/^(\d{2})(\d)/g, "($1) $2")
    valor = valor.replace(/(\d)(\d{4})$/, "$1-$2")
    tel.value = valor 
}