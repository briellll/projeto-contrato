import { showModal } from "../core/utils.js";

export function cadastroContrato() {
    const form = document.querySelector('#form');
    const API_URL = 'https://pacta-api-production.up.railway.app/contratos/create';
    const token = localStorage.getItem('userToken');

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

            const rawValue = document.getElementById('valorContrato').value;

            const cleanValue = parseFloat(rawValue.replace(/\./g, '').replace(',', '.'));

            const formData = new FormData(form);
            const dados = Object.fromEntries(formData.entries());
            dados.valorContrato = cleanValue;

            if (dados.cnpjFornecedor) {
            dados.cnpjFornecedor = dados.cnpjFornecedor.replace(/\D/g, '');
            }

            try {
                const response = await fetch(API_URL, {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(dados)
                    });

                    if (response.ok) {
                        showModal(
                            "Sucesso!",
                            "Contrato cadastrado com sucesso.",
                            "success",
                            ()=>{
                                form.reset()
                            }
                        );

                    } else {
                                showModal('Opa!','Dados invalidos.Verifique os campos','error');
                            }
                } catch (error) {
                console.error('Erro na requisição:', error);
                showModal('Erro de conexão','Não foi possivel falar com o servidor','error');
            }
        });
    }
}