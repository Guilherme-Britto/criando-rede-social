

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

            closeModal()
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
    const closeModal = document.createElement('span')

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
    // console.log(elementPost)
    // console.log(elementUser)

    modal__div.classList.add('modal__div')
    imgInfo.classList.add('imgInfo')
    img.src = elementUser.img
    user__info.classList.add('user__info')
    h3.innerText = elementUser.user
    user__infop.innerText = elementUser.stack
    h2.innerText = elementPost.title
    p.innerText = elementPost.text
    closeModal.classList.add("closeModal")
    closeModal.innerText = "X"

    user__info.append(h3, user__infop)
    imgInfo.append(img, user__info)

    modal__div.append(imgInfo, h2, p, closeModal)

    return modal__div
}

function closeModal() {
    const modal = document.querySelector('.modal__container')
    const closeBtn = document.querySelector('.closeModal')

    closeBtn.addEventListener('click', () => {
        modal.close()
    })
}

renderModal()
