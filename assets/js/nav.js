
//logica de animação para abertura da sidebar
document.getElementById('open_btn').addEventListener('click',function(){
    document.getElementById('sidebar').classList.toggle('open-sidebar')
})


//logica de navegação entre as paginas
const content = document.getElementById('content');
const links = document.querySelectorAll('#side_items a');

async function loadPage(page) {
    const response = await fetch(`/pages/${page}.html`);
    const html = await response.text();
    content.innerHTML = html;
    if(page ==='cadastro'){
        jsCadastro();
    }

}

links.forEach(link =>{
    link.addEventListener('click', e=>{
        e.preventDefault();
        const page = link.dataset.page;
        loadPage(page);

        document.querySelectorAll('.side_item')
        .forEach(li => li.classList.remove('active'));
        link.closest('.side_item').classList.add('active');
        });
});

loadPage('listar');