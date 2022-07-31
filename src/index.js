import Item from './components/item';
import ItemsList from './components/items-list';
import Cart from './components/cart';
import SortList from './components/sortList';

import data from '../data.json';

import './index.scss';

import 'normalize.css';

var games = data.games;
let cart = [];

const generateModalWindowItemsList = () => {
    while (modalWindowItemsList.firstChild) {
        modalWindowItemsList.removeChild(modalWindowItemsList.lastChild);
    }

    cart.forEach((game) => {
        const onAdd = () => {
        }
        const item = Item(game.name, game.price, onAdd, true);
        modalWindowItemsList.appendChild(item);
    })
}

const itemsList = ItemsList();
const modalWindowItemsList = ItemsList();
const {CartElement, modalWindow, modalWindowContent, updateCart} = Cart(cart, generateModalWindowItemsList);

const generateItems = () => {
    while (itemsList.firstChild) {
        itemsList.removeChild(itemsList.lastChild);
    }
    console.log('lol');
    games.forEach((game) => {
        const onAdd = () => {
            cart.push(game);
            updateCart(cart);
        }
        const item = Item(game.name, game.price, onAdd, false);
        itemsList.appendChild(item);
    })
}


modalWindowContent.appendChild(modalWindowItemsList);
modalWindow.appendChild(modalWindowContent);

document.body.appendChild(modalWindow);
document.body.appendChild(CartElement);

const sortList = SortList(games, generateItems);

document.body.appendChild(sortList);
document.body.appendChild(itemsList);