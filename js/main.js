// main.js
const products = [
  { id: 1, name: "Producto 1", price: 25.99, category: "outlet", image: "images/sm_5ad31a92cd6ca.jpg" },
  { id: 2, name: "Producto 2", price: 35.99, category: "nueva-temporada", image: "images/sm_5ad31a92cd6ca.jpg" },
  { id: 3, name: "Producto 3", price: 15.99, category: "rebajas", image: "images/sm_5ad31a92cd6ca.jpg" },
  { id: 4, name: "Producto 4", price: 45.99, category: "oferta", image: "images/sm_5ad31a92cd6ca.jpg" },
  { id: 5, name: "Producto 5", price: 55.99, category: "normal", image: "images/sm_5ad31a92cd6ca.jpg" },
  // Agrega más productos según sea necesario
];

const productGrid = document.querySelector('.product-grid');

function displayProducts(filteredProducts) {
  productGrid.innerHTML = ''; // Limpiar el contenedor
  filteredProducts.forEach(product => {
    const card = document.createElement('div');
    card.className = `card ${product.category}`;
    
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <div class="info">
        <h3>${product.name}</h3>
        <p class="price">€${product.price.toFixed(2)}</p>
      </div>
    `;
    productGrid.appendChild(card);
  });
}

// Mostrar todos los productos al cargar la página
displayProducts(products);