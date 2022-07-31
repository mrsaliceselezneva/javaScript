import './sortList.scss'

const SortList = (games, generateItems) => {
    const sortList = document.createElement('div');
    sortList.className = 'sort';

    const buttonSortToHigh = document.createElement('button');
    buttonSortToHigh.className = 'sort__button-sort'
    buttonSortToHigh.innerText = 'по возростанию цены'

    buttonSortToHigh.onclick = function() {
        games.sort((a, b) => a.price - b.price);
        generateItems();
    }

    sortList.appendChild(buttonSortToHigh);

    const buttonSortToLow = document.createElement('button');
    buttonSortToLow.className = 'sort__button-sort'
    buttonSortToLow.innerText = 'по убыванию цены'

    buttonSortToLow.onclick = function() {
        games.sort((a, b) => b.price - a.price);
        generateItems();
    }

    sortList.appendChild(buttonSortToLow);

    generateItems();   

    return sortList;
};

export default SortList;
