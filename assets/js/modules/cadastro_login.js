function cadastradoLogin(){
    const form = document.getElementById('form');
    const API_URL = 'https://pacta-api-production.up.railway.app/auth/registro'

    form.addEventListener('submit', async function (e) {
        e.preventDefault();

        const formData = new FormData(form);
        const dados = Object.fromEntries(formData);

        dados.permissao = 'usuario';

        try {
            const response = await fetch(API_URL,{
                method:'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dados)
            });

            if(response.ok){
                alert('Cadastro de usuario realizado com sucesso');
                form.reset();
            } else {
                throw new Error('houve falha no cadastro');
            }

        } catch (error) {
            console.error('Erro ao gerar requisição: ',error);
            alert('Cadastro não realizado!');
        }

    })

}

document.addEventListener( 'DOMContentLoaded', cadastradoLogin)