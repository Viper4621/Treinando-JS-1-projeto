let contador = 0;
let input = document.getElementById('inputTarefa');
let btnAdd = document.getElementById('btn-add');
let main = document.getElementById('areaLista')

function addTarefa(){
    //pegar o valor do input
    let valorInput = input.value;
    //se nao for vazio nem null ou undefinned
    //!== diferente vazio nulo ou indefinido
    if ((valorInput !=="") && (valorInput !==null) && (valorInput !==undefined)){
        // usando crase shieft botão lado p
        ++contador;
        let novoItem = `<div id="${contador}" class="item">
            <div onclick="marcarTarefa(${contador})" class="item-icone">
                <img src="/Assets/circle-outline.svg" id="circle" class="circle">

            </div>
            <div onclick="marcarTarefa(${contador})" class="item-nome">
                ${valorInput}

            </div>
            <div class="item-botao">
                <button onclick="deletar(${contador})" class="delete"><img src="/Assets/delete.svg" id="delete" class="delete">Deletar</button>

            </div>
        </div>`;
        //Add novo item no main
        main.innerHTML += novoItem;
        //zerar campos apos usar o btn
        input.value = "";
        input.focus();


        
    }
}
//arrumar para marcar parte
// function marcarTarefa(id) {
//     var item = document.getElementById(id);
//     var class = item.getAttribute('class');
    
//     if (class == "item"){
//         item.classList.add('clicado');

//         var icone = document.getElementById('icone_+id')
//         icone.classList.remove()
//         icone.classList.add()
//     }
// }

function deletar(id){
    var tarefa = document.getElementById(id);
    tarefa.remove();
}

function checada(id){
    var tarefa = document.getElementById(id);
    
}

