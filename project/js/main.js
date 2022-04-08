const products = [
    {id: 1, title: 'Notebook', price: 1000},
    {id: 2, title: 'Mouse', price: 100},
    {id: 3, title: 'Keyboard', price: 250},
    {id: 4, title: 'Gamepad', price: 150},
];

const renderProduct = (title, price) => {
    return `<div class="product-item">
                <h3>${title}</h3>
                <p>${price}</p>
                <button class="by-btn">Добавить</button>
              </div>`;
};

const renderProducts = list => {
    document.querySelector('.products').innerHTML = list.map((good) => renderProduct(good.title, good.price)).join('');
    // document.querySelector('.products').innerHTML = productList;
    // console.log(productList);
    // запятая была из-за метода .map. 
    // Он возвращает массив, который потом для вывода в строку пропускается через toString, 
    // который в свою очередь и добавляет запятые
};

renderProducts(products);
