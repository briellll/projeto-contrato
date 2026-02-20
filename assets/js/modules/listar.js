export async function jsListar() {
    const API_URL = 'https://pacta-api-production.up.railway.app/contratos';
    const tbody = document.querySelector('table tbody');

    const buttonList = document.querySelectorAll('.btn-trigger-list')

    try {
        const response = await fetch(API_URL);

        const contratos = await response.json();
        tbody.innerHTML= '';

        contratos.forEach(contrato => {
            renderizarLinha(contrato,tbody)
        })

        configurarEventos();

    } catch (error) {
        console.error('erro: ',error);
    }
}

function renderizarLinha(contrato, container){
    const linhaPrincipal=`
    <tr>
        <td>001</td>
        <td>${contrato.nome}</td>
        <td>${contrato.razao_social}</td>
        <td>
                        <span class="status active">ativo</span>
                        <button class="btn-trigger-list">
                            <i id="open_btn_icon_list" class="fa-solid fa-chevron-right"></i>
                        </button>
                    </td>
                </tr>
                <tr class="detail-container">
                    <td colspan="100%">
                        <div class="detail-wrapper">
                        <div          class="detail-grid">

                            <div class="detail-item">
                                <span>CNPJ:</span>
                                <strong>
                                    ${contrato.cnpj_fornecedor}
                                </strong>
                            </div>

                            <div class="detail-item">
                                <span>Endereço:</span>
                                <strong>carregando dados...</strong>
                            </div>

                            <div class="detail-item">
                                <span>Setor responsavel:</span>
                                <strong>${contrato.setor_contratante}</strong>
                            </div>

                            <div class="detail-item">
                                <span>Telefone:</span>
                                <strong>carregando dados...</strong>
                            </div>

                            <div class="detail-item">
                                <span>Cidade:</span>
                                <strong>carregando dados...</strong>
                            </div>

                            <div class="detail-item">
                                <span>Telefone:</span>
                                <strong>carregando dados...</strong>
                            </div>

                            <div class="detail-item">
                                <span>Valor:</span>
                                <strong>${contrato.valor_contrato}</strong>
                            </div>

                         </div>
                        </div>
                    </td>
                </tr>
    `;
    container.innerHTML+=linhaPrincipal;
}

function configurarEventos(){
    const buttonList = document.querySelectorAll('.btn-trigger-list')
    buttonList.forEach(button =>{
        button.addEventListener('click', function(){
            const currentRow = this.closest('tr');
            const detailRow = currentRow.nextElementSibling;
            this.classList.toggle('rotated');
            if (detailRow && detailRow.classList.contains('detail-container')){
                detailRow.classList.toggle('show');
            }
        });
    });
}