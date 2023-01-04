const items = [
    {
        id: '1',
        title: 'Egg curry',
        price: 120,
        img: './imgs/nonveg/egg-curry.jpg',
        category: 'nonveg',
        description: 'Delicious authentic indian spicy egg curry made with handmade spices, and eggs from free ranch hens.',
        stars: 5
    },
    {
        id: '2',
        title: 'Butter chicken',
        price: 180,
        img: './imgs/nonveg/butter-chicken.jpg',
        category: 'nonveg',
        description: 'Finger licking buttery tendered chicken marinated for overnight smoked with apple wood.',
        stars: 4
    },
    {
        id: '3',
        title: 'Chicken biryani',
        price: 220,
        img: './imgs/nonveg/chicken-biryani.jpg',
        category: 'nonveg',
        description: 'Authentic Hydrabadi chicken dum biryani prepared with aromatic spices and delight full flavour',
        stars: 5
    },
    {
        id: '4',
        title: 'Chicken burger',
        price: 160,
        img: './imgs/nonveg/chicken-burger.jpg',
        category: 'nonveg',
        description: `A burger can't leave without a chicken on it. It's chicken burger with 2 patties.`,
        stars: 4
    },
    {
        id: '5',
        title: 'Chicken fried rice',
        price: 180,
        img: './imgs/nonveg/chicken-fried-rice.jpg',
        category: 'nonveg',
        description: 'Juicy, tender, perfectly marinated indian fusion chicken fried rice, cooked on low flame.',
        stars: 5
    },
    {
        id: '6',
        title: 'fish fry',
        price: 120,
        img: './imgs/nonveg/fish-fry.jpg',
        category: 'nonveg',
        description: 'Crispy tender spicy soft sallow fried fish fry, not only taste good also healthy.',
        stars: 5
    },
    {
        id: '7',
        title: 'Egg curry',
        price: 150,
        img: './imgs/nonveg/dahi-fish.jpg',
        category: 'nonveg',
        description: 'Delicious authentic spicy soft curd fish, not only taste good also healthy.',
        stars: 5
    },
    {
        id: '8',
        title: 'Thai fried rice',
        price: 120,
        img: './imgs/nonveg/thai-fried-rice.jpg',
        category: 'nonveg',
        description: 'Authentic Thai spicy fried rice cooked on high flame with pinch of msg and bell paper.',
        stars: 5
    },
    {
        id: '9',
        title: 'Alu curry',
        price: 120,
        img: './imgs/veg/alu-curry.jpg',
        category: 'veg',
        description: 'Delicious authentic indian spicy potato curry prepared with indian spices.',
        stars: 4
    },
    {
        id: '10',
        title: 'Butter paneer',
        price: 120,
        img: './imgs/veg/butter-paneer.jpg',
        category: 'veg',
        description: 'Delicious authentic indian spicy butter paneer recipe with lots of butter.',
        stars: 4.5
    },
    {
        id: '11',
        title: 'Chilli kobi',
        price: 120,
        img: './imgs/veg/chili-kobi.jpg',
        category: 'veg',
        description: 'Delicious authentic indian spicy egg curry made with handmade spices, and eggs from free ranch hens.',
        stars: 4
    },
    {
        id: '12',
        title: 'Dahi bengan',
        price: 60,
        img: './imgs/veg/dahi-bengan.jpg',
        category: 'veg',
        description: 'Delicious authentic indian spicy egg curry made with handmade spices, and eggs from free ranch hens.',
        stars: 4.5
    },
    {
        id: '13',
        title: 'Mix veg fried rice',
        price: 100,
        img: './imgs/veg/mix-veg-fried-rice.jpg',
        category: 'veg',
        description: 'Delicious authentic indian spicy egg curry made with handmade spices, and eggs from free ranch hens.',
        stars: 4.5
    },
    {
        id: '14',
        title: 'Palag paneer',
        price: 140,
        img: './imgs/veg/palag-paneer.jpg',
        category: 'veg',
        description: 'Delicious authentic indian spicy egg curry made with handmade spices, and eggs from free ranch hens.',
        stars: 5
    },
    {
        id: '15',
        title: 'paneer hydrabadi',
        price: 170,
        img: './imgs/veg/paneer-hydrabadi.jpg',
        category: 'veg',
        description: 'Delicious authentic indian spicy egg curry made with handmade spices, and eggs from free ranch hens.',
        stars: 5
    },
    {
        id: '16',
        title: 'Masala paneer',
        price: 150,
        img: './imgs/veg/paneer-masala.jpg',
        category: 'veg',
        description: 'Delicious authentic indian spicy egg curry made with handmade spices, and eggs from free ranch hens.',
        stars: 4
    },
    {
        id: '17',
        title: 'paneer fried rice',
        price: 160,
        img: './imgs/veg/paneer-rice.jpg',
        category: 'veg',
        description: 'Delicious authentic indian spicy egg curry made with handmade spices, and eggs from free ranch hens.',
        stars: 4
    },
    {
        id: '18',
        title: 'Tandoor paneer',
        price: 120,
        img: './imgs/veg/paneer-tandoor.jpg',
        category: 'veg',
        description: 'Delicious authentic indian spicy egg curry made with handmade spices, and eggs from free ranch hens.',
        stars: 5
    },
    {
        id: '19',
        title: 'Veg palau',
        price: 140,
        img: './imgs/veg/vegetable-palau-.jpg',
        category: 'veg',
        description: 'Delicious authentic indian spicy egg curry made with handmade spices, and eggs from free ranch hens.',
        stars: 5
    },
    {
        id: '20',
        title: 'Alu kasa',
        price: 100,
        img: './imgs/veg/sukha-alu.jpg',
        category: 'veg',
        description: 'Delicious authentic indian spicy egg curry made with handmade spices, and eggs from free ranch hens.',
        stars: 5
    },
    {
        id: '21',
        title: 'Ice-cream brownie',
        price: 80,
        img: './imgs/snacks/brownie-ice-cream.jpg',
        category: 'starter',
        description: 'Delicious authentic indian spicy egg curry made with handmade spices, and eggs from free ranch hens.',
        stars: 5
    },
    {
        id: '22',
        title: 'burger $ fries',
        price: 120,
        img: './imgs/snacks/burger-fries.jpg',
        category: 'starter',
        description: 'Delicious authentic indian spicy egg curry made with handmade spices, and eggs from free ranch hens.',
        stars: 5
    },
    {
        id: '23',
        title: 'Chicken burger',
        price: 110,
        img: './imgs/nonveg/chicken-burger.jpg',
        category: 'starter',
        description: 'Delicious authentic indian spicy egg curry made with handmade spices, and eggs from free ranch hens.',
        stars: 4
    },
    {
        id: '24',
        title: 'Chicken pakoda',
        price: 120,
        img: './imgs/snacks/chicken-pakoda.jpg',
        category: 'starter',
        description: 'Delicious authentic indian spicy egg curry made with handmade spices, and eggs from free ranch hens.',
        stars: 5
    },
    {
        id: '25',
        title: 'Veg momos',
        price: 70,
        img: './imgs/snacks/veg-momo.jpg',
        category: 'breakfast',
        description: 'Delicious authentic indian spicy egg curry made with handmade spices, and eggs from free ranch hens.',
        stars: 5
    },
    {
        id: '26',
        title: 'Idli bara',
        price: 30,
        img: './imgs/indian-breakfast/bara.jpg',
        category: 'breakfast',
        description: 'Delicious authentic indian spicy egg curry made with handmade spices, and eggs from free ranch hens.',
        stars: 5
    },
    {
        id: '27',
        title: 'Chilla',
        price: 10,
        img: './imgs/indian-breakfast/chilla.jpg',
        category: 'breakfast',
        description: 'Delicious authentic indian spicy egg curry made with handmade spices, and eggs from free ranch hens.',
        stars: 5
    },
    {
        id: '28',
        title: 'Dosa',
        price: 40,
        img: './imgs/indian-breakfast/dosa.jpg',
        category: 'breakfast',
        description: 'Delicious authentic indian spicy egg curry made with handmade spices, and eggs from free ranch hens.',
        stars: 5
    },
    {
        id: '29',
        title: 'Pakodi',
        price: 20,
        img: './imgs/indian-breakfast/pakadi.jpg',
        category: 'breakfast',
        description: 'Delicious authentic indian spicy egg curry made with handmade spices, and eggs from free ranch hens.',
        stars: 5
    },
    {
        id: '30',
        title: 'Piaji',
        price: 20,
        img: './imgs/indian-breakfast/piaji.jpg',
        category: 'breakfast',
        description: 'Delicious authentic indian spicy egg curry made with handmade spices, and eggs from free ranch hens.',
        stars: 4
    }
];

// selecting the elements for menu btn section
const menuBtnSelector = document.querySelectorAll('.menu-btn-link')
// selecting the menu section
const sectionMenu = document.querySelector('.section-menu');

window.addEventListener('DOMContentLoaded', ()=> {
    // callback function
    displayMenuitems(items);
});

// ********** filtering items: **********
menuBtnSelector.forEach( function(btn) {
    btn.addEventListener('click', function(e){
        // targeting the id in the menu html button to get the id 
        const category = e.currentTarget.dataset.id;

        // filtering the items as per the category
        const menuCategory = items.filter(function(menuItem) {
            if(menuItem.category === category){
                return menuItem;
            }
        });

        // displaying items
        if(category === 'all') {
            displayMenuitems(items);
        } else {
            displayMenuitems(menuCategory);
        }
    });
});
// ********** filtering items: (ends)**********

// *********** showing all items: **********
function displayMenuitems (menuitems) {
    let displayMenu = menuitems.map(function (item) {
        
        
        return `
            <article class="meal">
                <figure class="pop-meal">
                <img
                src=${item.img}
                alt=${item.title}/>
                </figure>
                <div class="meal-content">
                <p class="meal-title">${item.title}</p>
                <div class="pop-meal-price">
                    <span class="rupee-symbol">₹</span>
                    <span class="pop-meal-rupee">${item.price}</span>
                </div>
                </div>
                <div class="pop-meal-contain">
                <p>
                    ${item.description}
                </p>
                </div>
                <a href="" class="main-nav-link nav-order">Add to cart</a>
            </article>
        `
    })

    displayMenu= displayMenu.join('')

    sectionMenu.innerHTML = displayMenu;
};
// *********** showing all items: (ends)**********


// ********** sliding cards for home screen **********
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
// ********** sliding cards for home screen ends**********



// *************** Modal ***************
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
// *************** Modal ends ***************


