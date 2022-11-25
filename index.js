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

