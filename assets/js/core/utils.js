/**
 * Exibe o modal de feedback (Sucesso ou Erro)
 * @param {string} title - Título do modal
 * @param {string} message - Mensagem do corpo
 * @param {string} type - Tipo: 'success' ou 'error'
 * @param {Function} callback - Função opcional ao fechar
 */


export function showModal(title,message, type = 'success', callback){
    const modal = document.getElementById('modal_overlay');
    const modalTitle = modal.querySelector('h2');
    const modalMessage = modal.querySelector('p');
    const modalIcon = modal.querySelector('.modal-icon')
    const closeBtn = document.getElementById('close_modal');

    modalTitle.textContent = title;
    modalMessage.textContent = message;

    if (type === 'error'){
        modalIcon.classList.add('error');
        modalIcon.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>';
    } else {
        modalIcon.classList.remove('error');
        modalIcon.innerHTML = '<i class="fa-solid fa-circle-check"></i>'
    }

    modal.classList.add('active');

    closeBtn.onclick = () =>{
        modal.classList.remove('active');
        if (callback) callback();
    }

}