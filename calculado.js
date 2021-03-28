/*Global Escope*/ 
var valor;
var resultado;

function botao(valorDoNumero) {
    /*document == requisitar do documento 
    document.calculadoraForm  == vai procurar  por um valor com esse (nome)
    document.calculadoraForm.visor.value == vai procurar um item no document que tenha um nome especificado  
    o value esta especificado depois da cláusula botão !! 
    */
    valor = document.calculadoraForm.visor.value += valorDoNumero;
}


function reset(){
    document.calculadoraForm.visor = "";
}




function equality(){
    resultado = eval(valor);
    document.calculadoraForm.visor.value = resultado.toLocaleString("pt-br");
    /*o localeString faz com que o numero seja demarcado com um ponto */
}


/*inserir função de parenteses e outros caractere, botão para apagar o ultimo digito, receber valores do teclado  e copiar resultado */