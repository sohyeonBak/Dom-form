const $btn = document.querySelector('.dropdown-toggle')
const $menu = document.querySelector('.dropdown-menu')
const $option = document.querySelectorAll('.dropdown-option')
const $nextBtn = document.querySelector('.next-button')

$btn.addEventListener('click', (e) => {
    $menu.classList.toggle(('show'))
    console.log($btn.innerText)
})

$btn.addEventListener('blur', (e) => {
    $menu.classList.remove(('show'))
})


console.log($option)

$option.forEach(x=>x.addEventListener('click', (e) => {
    $btn.classList.add('selected')
    $btn.innerText = e.target.innerText
    $nextBtn.removeAttribute('disabled')
}))


// $option.forEach(function(element) {
//     element.addEventListener('click', handlerChange)
// });

// function handlerChange(e){
//     console.log(e)
// }


// $option.addEventListener('click', (e) => {
//     //$btn.classList.add('selected')
//     //$btn.innerText = e.target.innerText
//     //$nextBtn.removeAttribute('disabled')
//     console.log(e)
// })



