$(document).ready(function() {
  // Ao submeter o formulário e impede o comportamento padrão do formulário
    $('#formTarefa').submit(function(e) {
    e.preventDefault(); 

    // Obtém o valor do campo de entrada
    const nomeTarefa = $('#nomeTarefa').val();

    // Verifica se o campo está vazio
    if (nomeTarefa === '') {
    alert('Por favor, insira o nome da tarefa.');
    return;
    }

    // Cria um novo elemento <li> com a tarefa
    const itemTarefa = $('<li>' + nomeTarefa + '</li>');

    // Ao clicar no item da lista
    itemTarefa.click(function() {
      // Adiciona ou remove a classe 'completo' para riscar a tarefa
      $(this).toggleClass('completo'); 
    });

    // Adiciona o item à lista
    $('#linhaLista').append(itemTarefa);

    // Limpa o campo de entrada
    $('#nomeTarefa').val('');
    })
});
