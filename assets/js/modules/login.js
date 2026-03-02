document.addEventListener('DOMContentLoaded', ()=>{
    const page = document.getElementById('cadastro_login')

    if (page){
        page.addEventListener('click', e =>{
            e.preventDefault();
            window.location.href = './cadastro_login.html'
        });
    }
});


