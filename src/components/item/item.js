import './item.scss'
import Img from '../assets/img/evolution.jpeg'

const Item = (name, price, onAdd) => {
    const ItemElement = document.createElement('div');
    ItemElement.className = 'item';

    const nameElement = document.createElement('span');
    nameElement.className = 'item__name';
    nameElement.innerText = name;

    const priceElement = document.createElement('span');
    priceElement.className = 'item__price';
    priceElement.innerText =`Цена: ${price}₽`;

    const buttonAddToCartElement = document.createElement('button');
    buttonAddToCartElement.className = 'item__buttonAddToCart';
    //buttonAddToCartElement.innerHTML = '&#128722';
    buttonAddToCartElement.innerText = 'в корзину';
    buttonAddToCartElement.addEventListener('click', onAdd);

    const imgElement = document.createElement('img');
    imgElement.src = Img;
    imgElement.className = 'item__img';

    ItemElement.appendChild(imgElement);
    ItemElement.appendChild(nameElement);
    ItemElement.appendChild(priceElement);
    ItemElement.appendChild(buttonAddToCartElement);

    return ItemElement;
};

export default Item;
