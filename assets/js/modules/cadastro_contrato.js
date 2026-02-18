export function jsCadastro(){
    const form = document.querySelector('#form');
    if (form){
        form.addEventListener('submit',function(e){
            e.preventDefault();
        })
    }
}
