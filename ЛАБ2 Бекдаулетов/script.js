let cartCount = 0;

async function loadProducts() {
    const catalog = document.querySelector('.catalog');

    try {
        const response = await fetch('http://localhost:3001/products');

        if (!response.ok) {
            throw new Error('Ошибка загрузки товаров');
        }

        const products = await response.json();

        renderProducts(products);
    } catch (error) {
        catalog.innerHTML += '<p>Не удалось загрузить товары</p>';
    }
}

function renderProducts(products) {
    const catalog = document.querySelector('.catalog');
    const count = document.querySelector('#cart-count');

    products.forEach((product) => {
        const card = document.createElement('article');

        card.className = 'card';

        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price} тг</p>
            <button>В корзину</button>
        `;

        const button = card.querySelector('button');

        button.addEventListener('click', () => {
            cartCount++;
            count.textContent = cartCount;
        });

        catalog.appendChild(card);
    });
}

loadProducts();