export function jsListar(){
    const buttonList = document.querySelectorAll('.btn-trigger-list')

    buttonList.forEach(button =>{
        button.addEventListener('click', function(){

            const currentRow = this.closest('tr')
            const detailRow = currentRow.nextElementSibling

            this.classList.toggle('rotated');

            if (currentRow && detailRow.classList.contains('detail-container')){
                detailRow.classList.toggle('show')
            }

        })
    })

}