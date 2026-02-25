export function jsCadastro() {
    const form = document.querySelector('#form');
    const API_URL = 'https://pacta-api-production.up.railway.app/contratos/create';

    if (form) {

        const cnpj = document.getElementById('cnpjFornecedor');

        cnpj.addEventListener('input', (e) =>{
            e.target.value = mascaraCNPJ(e.target.value.replace(/\D/g, '').slice(0, 14));
        });

        function mascaraCNPJ(cnpj){
            return cnpj.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, '$1.$2.$3/$4-$5');
        }



        form.addEventListener('submit', async function(e) {
            e.preventDefault();

            const formData = new FormData(form);
            const dados = Object.fromEntries(formData.entries());

            if (dados.cnpj) {
        dados.cnpj = dados.cnpj.replace(/\D/g, '');
    }

            try {
                const response = await fetch(API_URL, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(dados)
                });

                if (response.ok) {
                    const resultado = await response.json();
                    alert('Contrato cadastrado com sucesso');
                    form.reset();
                } else {
                    throw new Error('Erro ao cadastrar contrato.');
                }
            } catch (error) {
                console.error('Erro na requisição:', error);
                alert('Deu ruim');
            }
        });
    }
}