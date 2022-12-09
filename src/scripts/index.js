

function renderModal() {
    const modal = document.querySelector('.modal__container')
    const buttons = document.querySelectorAll(".card__button")

    for(let i = 0; i<buttons.length; i++){
        const button = buttons[i]

        button.addEventListener('click', () =>{
            const modalContent = createModal(button.dataset.id)

            modal.innerHTML = ''

            modal.appendChild(modalContent)

            modal.showModal()
        })
    }
}

function createModal(id) {
    const modal__div = document.createElement('div')
    const imgInfo = document.createElement('div')
    const img = document.createElement('img')
    const user__info = document.createElement('div')
    const h3 = document.createElement('h3')
    const user__infop = document.createElement('p')
    const h2 = document.createElement('h2')
    const p = document.createElement('p')

    let elementPost = {}
    let elementUser = {}

    for(let i = 0; i <posts.length; i++){
        if(posts[i].user === Number(id)){
            elementPost = posts[i]
        }
    }

    for(let i = 0; i <users.length; i++){
        if(users[i].id === Number(id)){
            elementUser = users[i]
        }
    }
    console.log(elementPost)
    console.log(elementUser)

    modal__div.classList.add('modal__div')
    imgInfo.classList.add('imgInfo')
    img.src = elementUser.img
    user__info.classList.add('user__info')
    h3.innerText = elementUser.user
    user__infop.innerText = elementUser.stack
    h2.innerText = elementPost.title
    p.innerText = elementPost.text

    user__info.append(h3, user__infop)
    imgInfo.append(img, user__info)

    modal__div.append(imgInfo, h2, p)

    return modal__div
}

renderModal()




/* <section class="modal__container">
<div class="modal__div">
    <div class="imgInfo">
        <img src="./src/assets/img/user5.svg" alt="">
        <div class="user__info">
            <h3>Júlia Martins</h3>
            <p>Devop's</p>
        </div>
    </div>

    <h2>O que é programação orientada a objetos e programação funcional</h2>
    <p>Hoje vamos conversar sobre como criar uma interface agradável mesmo sem ter um design pronto feito por um profissional de UI design.

    Antes de iniciar a criação de qualquer projeto, busque referências de aplicações que tenham a ver com o nicho que você está desenvolvendo. Por exemplo, quando quero criar um e-commerce de roupas, vou reservar um momento para buscar por aplicações do gênero, tanto acessando ou baixando apps e vendo o que se repete de informações em cada um dos aplicativos e sites referentes a compra de roupas, e também, observar cores que normalmente você enxerga em cada um dos apps.</p>
</div>
</section> */