function loadRegister(){
    const page = document.getElementById('cadastro_login')

    if (page){
        page.addEventListener('click', e =>{
            e.preventDefault();
            window.location.href = './cadastro_login.html'
        });
    }
}

function login(){
    const form = document.getElementById('form');
    const API_URL = 'https://pacta-api-production.up.railway.app/auth/login'

    form.addEventListener('submit', async function (e){
        e.preventDefault();

        const formData = new FormData(form);
        const dados = Object.fromEntries(formData);

        try {
            const response = await fetch(API_URL,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dados)
            })

            if (response.ok){
                const result = await response.json();

                localStorage.setItem('userToken',result.authorization)

                window.location.href = '../index.html';
            } else {
                const errorData = await response.json();
                alert(`Erro: ${errorData.message || 'Credenciais invalidas'} `);
            }

        } catch (error) {
            console.error('erro na requisição: ',error);
            alert('Falha na tentativa de login');
        }
    })

}



document.addEventListener('DOMContentLoaded', ()=>{
    loadRegister();
    login();
});


