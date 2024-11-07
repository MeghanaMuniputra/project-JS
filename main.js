const products = {
    FreshMeat: [
        { name: 'Chicken Breast', price: 249, image: 'https://www.bowrivermeatmarket.ca/wp-content/uploads/2020/04/BLESS-SKINLES-CHICKEN-BREAST-NATURAL-scaled.jpeg' },
        { name: 'Chicken Thighs', price: 199, image: 'https://th.bing.com/th/id/OIP.LaWDZ7XHPRmz0hXsvYN94QHaE7?w=1000&h=665&rs=1&pid=ImgDetMain' },
        { name: 'Lamb Chops', price: 699, image: 'https://thumbs.dreamstime.com/b/fresh-raw-lamb-chops-piled-heap-against-white-background-32308044.jpg' },
        { name: 'Pork Ribs', price: 399, image: 'https://image.freepik.com/free-photo/fresh-raw-pork-ribs_1339-97246.jpg' },
        { name: 'Fish Fillet', price: 299, image: 'https://media.istockphoto.com/photos/fresh-fish-fillet-on-wooden-board-picture-id914601894?k=6&m=914601894&s=170667a&w=0&h=n6_OQIB4etLdesqTEeqddZfXPpA0_yEDsru23hWIxKY=' }
    ],
    Beef: [
        { name: 'Beef Steak', price: 799, image: 'https://thumbs.dreamstime.com/b/fresh-raw-beef-steak-isolated-white-71106784.jpg' },
        { name: 'Ground Beef', price: 399, image: 'https://thumbs.dreamstime.com/b/fresh-ground-beef-garnish-slate-close-up-fresh-ground-beef-garnish-slate-dark-table-background-116113864.jpg' },
        { name: 'Beef Ribs', price: 599, image: 'https://th.bing.com/th/id/OIP.tYTFUFsdDpqinTRXcMSTtQHaHa?rs=1&pid=ImgDetMain' },
        { name: 'Beef Brisket', price: 699, image: 'https://th.bing.com/th/id/OIP.ZrqofRMXfkXO8X1JIV9FqQHaE3?w=1920&h=1260&rs=1&pid=ImgDetMain' },
        { name: 'Beef Tenderloin', price: 899, image: 'https://th.bing.com/th/id/OIP.pWMUtCSBrsGlCzDs4lEF2gAAAA?rs=1&pid=ImgDetMain' }
    ],
    MasalaIngredients: [
        { name: 'Cumin', price: 49, image: 'https://th.bing.com/th/id/OIP.ofVcR4ZrluQIsP_IftmlywHaFj?rs=1&pid=ImgDetMain' },
        { name: 'Turmeric', price: 69, image: 'https://th.bing.com/th/id/R.a9a27c0904f2c7b5ba12fd4bbf5b1fef?rik=LyZZuReB1KXwRg&riu=http%3a%2f%2fkrampusbotanicals.com%2fwp-content%2fuploads%2f2017%2f03%2fTurmeric2.jpg&ehk=Yd43cbzSAY624lc08wrG2EVC8Bp4xWeK8nzotOzQH68%3d&risl=&pid=ImgRaw&r=0' },
        { name: 'Coriander Powder', price: 59, image: 'https://cdn.myshopmatic.com/images/31953D/kDVy99qP8N.jpg' },
        { name: 'Garam Masala', price: 99, image: 'https://spiceeats.com/wp-content/uploads/2020/07/Garam-Masala.jpg' },
        { name: 'Red Chili Powder', price: 89, image: 'https://cdn.shopify.com/s/files/1/0604/6345/products/Red_Chilli_Powder.jpg?v=1514273566' },
        { name: 'Black Pepper', price: 129, image: 'https://www.puro.pk/wp-content/uploads/2019/01/6-Benefits-of-Black-Pepper-some-of-its-will-surprise-you.jpg' }
    ],
    Oils: [
        { name: 'Olive Oil', price: 549, image: 'https://th.bing.com/th/id/OIP.9qubZvVPUpv3B_zJ3SMcagAAAA?rs=1&pid=ImgDetMain' },
        { name: 'Sunflower Oil', price: 349, image: 'https://repziocdn.global.ssl.fastly.net/productimages/1860/2809003_lg.jpg?height=1000&width=1000&anchor=middlecenter' },
        { name: 'Coconut Oil', price: 399, image: 'https://www.naturalhealthyliving.net/wp-content/uploads/2014/04/coconut-oil.jpg' },
        { name: 'Sesame Oil', price: 459, image: 'https://draxe.com/wp-content/uploads/2019/09/Sesame-OIl-01.jpg' },
        { name: 'Canola Oil', price: 329, image: 'https://i5.walmartimages.com/asr/1d7fef12-cd6f-4de8-870c-d3d9f50fcef1.3649905abb49ffe7b1213c34c9c64dda.jpeg' }
    ],
    Rice: [
        { name: 'Plain Basmati Rice', price: 299, image: 'https://media.nedigital.sg/fairprice/fpol/media/images/product/XL/90043385_XL1_20220714.jpg' },
        { name: 'Brown Basmati Rice', price: 349, image: 'https://images-na.ssl-images-amazon.com/images/I/81gmqp12B1L._SL1500_.jpg' },
        { name: 'Jasmine Rice', price: 399, image: 'https://www.cassandraonlinemarket.com/wp-content/uploads/2021/01/DD0C0342-1.jpg' },
        { name: 'Sushi Rice', price: 449, image: 'https://th.bing.com/th/id/OIP.Zh3Y8R6FaxndqRGUKvpc7QHaHa?rs=1&pid=ImgDetMain' },
        { name: 'Wild Rice', price: 499, image: 'https://th.bing.com/th/id/OIP.Zu3PJB88ALNHpGEp_8Z3sgAAAA?rs=1&pid=ImgDetMain' }
    ],
    BakingIngredients: [
        { name: 'All-Purpose Flour', price: 199, image: 'https://i5.walmartimages.com/asr/df26f4cc-3228-4c9a-b693-5bd7cdf3f3f3_1.765c6fcb8f568352a54eab1547157cdf.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff' },
        { name: 'Sugar', price: 149, image: 'https://th.bing.com/th/id/R.5db12fe1e22fcb6620cc868b3370fcf1?rik=0g%2bOMyhNlWWyiQ&riu=http%3a%2f%2fi.brecorder.com%2fwp-content%2fuploads%2f2020%2f01%2fsugar.jpg&ehk=4TqVLPoMwrF9gsv0RC5gW%2fJeLN4UAkl7SCdL7qn9KN8%3d&risl=&pid=ImgRaw&r=0' },
        { name: 'Dark Chocolate', price: 299, image: 'https://th.bing.com/th/id/OIP.8oW5OpsB-wOvzDHS6Ia69AHaHu?rs=1&pid=ImgDetMain' },
        { name: 'Baking Powder', price: 89, image: 'https://cdn.bmstores.co.uk/images/hpcProductImage/imgFull/298122-Gluten-Free-Baking-Powder-Tub.jpg' },
        { name: 'Vanilla Extract', price: 499, image: 'https://th.bing.com/th/id/R.a2cffc35015d719509a6d6665721256c?rik=uweKhRYiELS%2f9w&riu=http%3a%2f%2fnatashaskitchen.com%2fwp-content%2fuploads%2f2016%2f11%2fHomemade-Vanilla-Extract-7.jpg&ehk=DYAzAhagZFLNJf3OqEWk4Chh6Ex5kGgXCp9WZLp9MB4%3d&risl=&pid=ImgRaw&r=0' },
        { name: 'Butter', price: 249, image: 'https://th.bing.com/th/id/OIP.m-9zZxToVscBSqX_TXeGsgHaEU?rs=1&pid=ImgDetMain'},
        { name: 'Eggs', price: 89, image: 'https://www.tasteofhome.com/wp-content/uploads/2021/08/GettyImages-1270152335.jpg' },
        { name: 'Whipping Cream', price: 199, image: 'https://ohsweetbasil.com/wp-content/uploads/Fresh-whipped-cream-3-1365x2048.jpg' },
        { name: 'Almond Flour', price: 599, image: 'https://th.bing.com/th/id/OIP.C_ZT1pml1BZXP0C8ZwYOnwAAAA?rs=1&pid=ImgDetMain' },
        { name: 'Cocoa Powder', price: 249, image: 'https://th.bing.com/th/id/OIP.pwQqWENlUtFat6WEBPpkWAAAAA?rs=1&pid=ImgDetMain' }
    ]
};


let cart = [];
let currentCategory = 'all';

function renderProducts(items = null) {
    const productsDiv = document.getElementById('products');
    productsDiv.innerHTML = '';
    
    const itemsToRender = items || (currentCategory === 'all' ? 
        Object.values(products).flat() : 
        products[currentCategory] || []);
    
    itemsToRender.forEach(product => {
        productsDiv.innerHTML += `
            <div class="col-md-3 mb-4">
                <div class="card h-100">
                    <img src="${product.image}" class="card-img-top product-img" alt="${product.name}">
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">₹${product.price}</p>
                        <button onclick="addToCart('${product.name}', ${product.price})" 
                                class="btn btn-outline-light mt-auto">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        `;
    });
}

function filterCategory(category) {
    currentCategory = category;
    document.querySelectorAll('.btn-group .btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    renderProducts();
}

function addToCart(name, price) {
    cart.push({ name, price });
    updateCartCount();
    showToast(`${name} added to cart!`);
}

function updateCartCount() {
    document.getElementById('cartCount').textContent = cart.length;
}

function showCart() {
    const cartItems = document.getElementById('cartItems');
    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;
        cartItems.innerHTML += `
            <div class="d-flex justify-content-between align-items-center mb-2">
                <span>${item.name}</span>
                <div>
                    <span class="me-3">₹${item.price}</span>
                    <button onclick="removeFromCart(${index})" class="btn btn-danger btn-sm">×</button>
                </div>
            </div>
        `;
    });

    document.getElementById('cartTotal').textContent = total;
    new bootstrap.Modal(document.getElementById('cartModal')).show();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartCount();
    showCart();
}

function checkout() {
    if (cart.length === 0) return;
    alert('Thank you for your purchase!');
    cart = [];
    updateCartCount();
    document.getElementById('cartModal').querySelector('.btn-close').click();
}

function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'position-fixed bottom-0 end-0 p-3';
    toast.style.zIndex = '11';
    toast.innerHTML = `
        <div class="toast show" role="alert">
            <div class="toast-header">
                <strong class="me-auto">QuickMart</strong>
                <button type="button" class="btn-close" data-bs-dismiss="toast"></button>
            </div>
            <div class="toast-body">${message}</div>
        </div>
    `;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
}

// Search functionality
document.getElementById('searchInput').addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredProducts = Object.values(products)
        .flat()
        .filter(product => 
            product.name.toLowerCase().includes(searchTerm)
        );
    renderProducts(filteredProducts);
});

// Cart button click handler
document.getElementById('cartBtn').addEventListener('click', showCart);

// Initial render
renderProducts();