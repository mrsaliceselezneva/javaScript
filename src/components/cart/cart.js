import './cart.scss'

const Cart = (cart, generateModalWindowItemsList) => {
    const CartElement = document.createElement('div');
    CartElement.className = 'cart';

    const itemsCountElement = document.createElement('span');
    itemsCountElement.innerText = `Товаров в корзине: ${cart.length} `;
    itemsCountElement.className = 'cart__count';

    const itemsCountNotify = document.createElement('span');
    itemsCountNotify.innerText = `${cart.length}`;
    itemsCountNotify.className = 'cart__notify';

    const priceElement = document.createElement('span');
    priceElement.innerText = 'Итого: 0₽';
    priceElement.className = 'cart__price';


    const modalButton = document.createElement('button');
    modalButton.innerHTML = '&#128722';
    modalButton.className = 'modal-button';

    const modalWindow = document.createElement('div');
    modalWindow.className = 'modal-window';

    const modalWindowContent = document.createElement('div');
    modalWindowContent.className = 'modal-window__content';

    const modalWindowHeader = document.createElement('div');
    modalWindowHeader.className = 'modal-window__header';

    const modalWindowBody = document.createElement('div');
    modalWindowBody.className = 'modal-window__body';

    const modalWindowClose = document.createElement('span');
    modalWindowClose.className = 'modal-window__close';
    modalWindowClose.innerHTML = '&times;';

    const modalWindowH = document.createElement('h2');
    modalWindowH.innerHTML = 'Корзина';

    
    modalButton.onclick = function() {
        modalWindow.style.display = "block";
    }

    modalWindowClose.onclick = function() {
        modalWindow.style.display = "none";
    }

    itemsCountNotify.onclick = function() {
        modalWindow.style.display = "block";
    }

    window.onclick = function(event) {
        if (event.target == modalWindow) {
            modalWindow.style.display = "none";
        }
    }

    modalWindowHeader.appendChild(modalWindowClose);
    modalWindowHeader.appendChild(modalWindowH);

    const infoCart = document.createElement('div');
    infoCart.className = 'modal-window__info';

    infoCart.appendChild(itemsCountElement);
    infoCart.appendChild(priceElement);
    modalWindowHeader.appendChild(infoCart);

    modalWindowContent.appendChild(modalWindowHeader);
    modalWindowContent.appendChild(modalWindowBody);

    // modalWindow.appendChild(modalWindowContent);
    
    
    CartElement.appendChild(itemsCountNotify);
    // CartElement.appendChild(priceElement);

    const updateCart = (newCart) => {
        itemsCountElement.innerText = `Товаров в корзине: ${newCart.length} `;
        itemsCountNotify.innerText = `${newCart.length}`;

        generateModalWindowItemsList(newCart);

        const sumPrice = newCart.reduce((sum, item) => sum + item.price, 0);
        priceElement.innerText = `Итого: ${sumPrice}₽`;
    }

    CartElement.appendChild(modalButton);

    return {CartElement, modalWindow, modalWindowContent, updateCart};
};

export default Cart;
