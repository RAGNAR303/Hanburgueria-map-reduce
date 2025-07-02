const list = document.querySelector('ul')
const buttonShowAll = document.querySelector('.show-all')
const buttonMapAll = document.querySelector('.map-all')
const buttonSumAll = document.querySelector('.sum-all')
const veganAllFilter = document.querySelector('.veganfilter')



function showAll(productArray) {

    let myLi = ''
    productArray.forEach((product) => {
        myLi +=
            `
          <li>
                <img src=${product.src}>
                <p class="title">${product.name}</p>
                <p class="price">R$ ${product.price.toFixed(2).replace(/\./g , ",")}</p>
            </li>
    `
    })

    list.innerHTML = myLi
}
function mapAllItem() {
    const newPrice = menuOptions.map((product) => ({
        ...product,
        price: product.price * 0.85,

    }))

    showAll(newPrice)
}

function sumAllPrice() {
    const sumAllPrice = menuOptions.reduce((acc, value) => acc + value.price, 0)
    list.innerHTML = 
    `<li>
         <p class="price"> O Valor total  <br> dos itens é , <br> R$ ${sumAllPrice.toFixed(2).replace(/\./g , ",")}</p>
         
    </li>
    `
}
function veganfilter() {
    const veganfilter = menuOptions.filter((product) =>product.vegan) 
 showAll(veganfilter)
    }


buttonShowAll.addEventListener('click', () => showAll(menuOptions))
buttonMapAll.addEventListener('click', mapAllItem)
buttonSumAll.addEventListener('click', sumAllPrice)
veganAllFilter.addEventListener('click', veganfilter)
