import Item from './components/item';
import ItemsList from './components/items-list';
import Cart from './components/cart';

import data from '../data.json';

import './index.scss';

import 'normalize.css';

var games = data.games;
let cart = [];

const itemsList = ItemsList();
const {CartElement, modalButton, updateCart} = Cart(cart);

const generateItems = () => {
    games.forEach((game) => {
        const onAdd = () => {
            cart.push(game);
            updateCart(cart);
        }
        const item = Item(game.name, game.price, onAdd);
        itemsList.appendChild(item);
    })
}

generateItems();

document.body.appendChild(modalButton);
document.body.appendChild(CartElement);
document.body.appendChild(itemsList);