import './cart.scss'

const Cart = (cart) => {
    const CartElement = document.createElement('div');
    CartElement.className = 'cart';

    const itemsCountElement = document.createElement('span');
    itemsCountElement.innerText = `Товаров в корзине: ${cart.length}`;
    itemsCountElement.className = 'cart__count';

    const priceElement = document.createElement('span');
    priceElement.innerText = 'Итого: 0₽';
    priceElement.className = 'cart__price';


    const modalButton = document.createElement('button');
    modalButton.innerHTML = '&#128722';
    modalButton.className = 'modal-button';

    CartElement.appendChild(itemsCountElement);
    CartElement.appendChild(priceElement);

    const updateCart = (newCart) => {
        itemsCountElement.innerText = `Товаров в корзине: ${newCart.length}`;

        const sumPrice = newCart.reduce((sum, item) => sum + item.price, 0);
        priceElement.innerText = `Итого: ${sumPrice}₽`;
    }

    return {CartElement,modalButton, updateCart};
};

export default Cart;
