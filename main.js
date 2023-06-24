const form = document.getElementById('meu-formulario');
let formEvalido = false;

function validaValor(campoA, campoB){
    return campoB > campoA;
}

form.addEventListener('submit', function(e){
    e.preventDefault();

    const campoA = parseFloat(document.getElementById('valorA').value);
    const campoB = parseFloat(document.getElementById('valorB').value);
    const mensagemSucesso = `O valor informado no Campo B é maior que o Campo A, portanto é válido`;

    formEvalido = validaValor(campoA, campoB);
    if (formEvalido) {
        const containerMensagemSucesso = document.querySelector('.sucess-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';
        document.querySelector('.error-message').style.display = 'none';
    } else {
        document.querySelector('.error-message').style.display = 'block';
        document.querySelector('.sucess-message').style.display = 'none';
    }
});



