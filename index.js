const productContainers= [...document.querySelectorAll('.pop-card')];
const nextBtn = [...document.querySelectorAll('.forward')];
const prevBtn = [...document.querySelectorAll('.previous')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nextBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth
    })

    prevBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth
    })
})


// Modal
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

let closeModal = () => {
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
};
setTimeout(() => {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden')
}, 3000); 

btnCloseModal.addEventListener('click', closeModal)
