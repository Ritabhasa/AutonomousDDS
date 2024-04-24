document.addEventListener('DOMContentLoaded', function() {
    const productsSection = document.getElementById('products');

    // Sample product data (replace with your own data from backend)
    const products = [
        { name: 'Product 1', price: '$50', imageUrl: 'product1.jpg' },
        { name: 'Product 2', price: '$70', imageUrl: 'product2.jpg' },
        { name: 'Product 3', price: '$90', imageUrl: 'product3.jpg' }
        // Add more products here
    ];

    // Render products
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');

        const productImage = document.createElement('img');
        productImage.src = product.imageUrl;
        productImage.alt = product.name;
        productElement.appendChild(productImage);

        const productName = document.createElement('h3');
        productName.textContent = product.name;
        productElement.appendChild(productName);

        const productPrice = document.createElement('p');
        productPrice.textContent = `Price: ${product.price}`;
        productElement.appendChild(productPrice);

        productsSection.appendChild(productElement);
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const signupBtn = document.getElementById('signup-btn');
    const loginBtn = document.getElementById('login-btn');
    const trackBtn = document.getElementById('track-btn');
    const signupForm = document.getElementById('signup-form');
    const loginForm = document.getElementById('login-form');
    const trackForm = document.getElementById('track-form');

    signupBtn.addEventListener('click', function() {
        signupBtn.classList.add('active');
        loginBtn.classList.remove('active');
        trackBtn.classList.remove('active');
        signupForm.classList.add('active');
        loginForm.classList.remove('active');
        trackForm.classList.remove('active');
    });

    loginBtn.addEventListener('click', function() {
        signupBtn.classList.remove('active');
        loginBtn.classList.add('active');
        trackBtn.classList.remove('active');
        signupForm.classList.remove('active');
        loginForm.classList.add('active');
        trackForm.classList.remove('active');
    });

    trackBtn.addEventListener('click', function() {
        signupBtn.classList.remove('active');
        loginBtn.classList.remove('active');
        trackBtn.classList.add('active');
        signupForm.classList.remove('active');
        loginForm.classList.remove('active');
        trackForm.classList.add('active');
    });
});

