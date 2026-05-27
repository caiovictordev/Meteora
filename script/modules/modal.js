export default function modal (){
    const closeModal = document.querySelector('.closeModal')
    const modal = document.querySelector('.modal')

    closeModal.addEventListener('click', ()=>{
        modal.style.display = "none"
    })
}