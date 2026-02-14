import { loadPage } from './core/router.js';

/**
 * Inicializa a funcionalidade da sidebar
 */
function initSidebar() {
    const openBtn = document.getElementById('open_btn');
    const sidebar = document.getElementById('sidebar');

    if (openBtn && sidebar) {
        openBtn.addEventListener('click', function() {
            sidebar.classList.toggle('open-sidebar');
        });
    }
}

/**
 * Inicializa a navegação entre páginas
 */
function initNavigation() {
    const links = document.querySelectorAll('#side_items a');

    links.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();

            const page = link.dataset.page;
            loadPage(page);

            document.querySelectorAll('.side_item')
                .forEach(li => li.classList.remove('active'));
            link.closest('.side_item').classList.add('active');
        });
    });
}


document.addEventListener('DOMContentLoaded', () => {
    initSidebar();      // ✅ Inicializa sidebar
    initNavigation();   // ✅ Inicializa navegação
    loadPage('listar'); // ✅ Carrega página inicial
});