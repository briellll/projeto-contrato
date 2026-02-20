import { jsCadastro } from "../modules/cadastro_contrato.js";

import { jsListar } from "../modules/listar.js";

const routes = {
    'cadastro_contrato': jsCadastro,
    'listar': jsListar
};

export async function loadPage(page) {
    const content = document.getElementById('content');

    try {
        const response = await fetch(`/pages/${page}.html`)
        const html =  await response.text();
        content.innerHTML = html

        if (routes[page]){
            routes[page]();
        }

    } catch (error) {
        console.error('erro ao carregar a pagina:', error);
        }

}
