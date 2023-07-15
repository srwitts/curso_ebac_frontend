$(document).ready(function() {
    $('#cpf').mask('000.000.000-00', {
        placeholder: '___.___.___-__'
    });
    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(__) _____-____'
    });
    $('#cep').mask('00000-000', {
        placeholder: '_____-___'
    });

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, insira seu nome completo'
        }
    })

    $('#formcad').submit(function(e) {
        e.preventDefault();

        const nome = $('#nome').val();
        // IF para impedir o cadastro de apenas do primeiro nome
        if (!nome.match(/^[A-Z][a-z]+\s[A-Z][a-z]+$/)) {
            alert('Por favor, insira o nome completo no formato "Nome e Sobrenome".');
            return;
        }

        const email = $('#email').val();
        const telefone = $('#telefone').val();
        const cpf = $('#cpf').val();
        const endereco = $('#endereco').val();
        const cep = $('#cep').val();

        // recebe todos os campos para informar em alert
        const mensagem = `Nome: ${nome}\nEmail: ${email}\nTelefone: ${telefone}\nCPF: ${cpf}\nEndereço: ${endereco}\nCEP: ${cep}`;

        // IF para impedir o cadastro sem que todos os campos estejam preenchidos
        if (!nome || !email || !telefone || !cpf || !endereco || !cep) {
            alert('Por favor, preencha todos os campos obrigatórios.');
            return;
        } else {
            alert(mensagem);
        }
        $('#formcad')[0].reset();
    })
})