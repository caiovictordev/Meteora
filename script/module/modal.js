export default function modal (){
    const closeModal = document.querySelector('.closeModal')
    const modal = document.querySelector('.modal')
    const botoes = document.querySelectorAll('.viewMore')
    let imgModal = document.querySelector('.image')
    let titleModal = document.querySelector('.title')
    let desc = document.querySelector('.desc')
    let price = document.querySelector('.price')

    botoes.forEach(item=> {
        item.addEventListener('click',()=>{
            event.preventDefault()
            let contexto = item.dataset.contexto
            console.log(contexto)
            switch(contexto){
                case 'camiseta':
                modal.style.display = 'flex'
                imgModal.src = '/src/images/Tablet/Imagens Cards/Camiseta.png'
                imgModal.style.width = '100%'
                titleModal.innerHTML = 'Camiseta Conforto'
                desc.innerHTML = 'Multicores e tamanhos. Tecido de algodão 100%, fresquinho para o verão. Modelagem unissex.'
                price.innerHTML = 'R$70,00'
                break;

                case 'calca':
                modal.style.display = 'flex'
                imgModal.src = '/src/images/Tablet/Imagens Cards/calça.png'
                imgModal.style.width = '100%'
                titleModal.innerHTML = 'Calça Alfaiataria'
                desc.innerHTML = 'Modelo Wide Leg alfaiataria em linho. Uma peça pra vida toda!'
                price.innerHTML = 'R$180,00'
                break;

                case 'tenis':
                modal.style.display = 'flex'
                imgModal.src = '/src/images/Tablet/Imagens Cards/tenis.png'
                imgModal.style.width = '100%'
                titleModal.innerHTML = 'Tênis Chunky'
                desc.innerHTML = 'Snicker casual com solado mais alto e modelagem robusta. Modelo unissex.'
                price.innerHTML = 'R$250,00'
                break;

                case 'jaqueta':
                modal.style.display = 'flex'
                imgModal.src = '/src/images/Tablet/Imagens Cards/jaqueta jeans.png'
                imgModal.style.width = '100%'
                titleModal.innerHTML = 'Jaqueta Jeans'
                desc.innerHTML = 'Modelo unissex oversized com gola de camurça. Atemporal e autêntica!'
                price.innerHTML = 'R$150,00'
                break;

                case 'oculos':
                modal.style.display = 'flex'
                imgModal.src = '/src/images/Tablet/Imagens Cards/óculos.png'
                imgModal.style.width = '100%'
                titleModal.innerHTML = 'Óculos Redondo'
                desc.innerHTML = 'Armação metálica em grafite com lentes arredondadas. Sem erro!'
                price.innerHTML = 'R$120,00'
                break;

                case 'bolsa':
                modal.style.display = 'flex'
                imgModal.src = '/src/images/Tablet/Imagens Cards/bolsa.png'
                imgModal.style.width = '100%'
                titleModal.innerHTML = 'Bolsa coringa'
                desc.innerHTML = 'Bolsa camel em couro sintético de alta duração. Ideal para acompanhar você por uma vida!'
                price.innerHTML = 'R$120,00'
                break;
            }
        })
    })

    closeModal.addEventListener('click', ()=>{
        modal.style.display = "none"
    })

}