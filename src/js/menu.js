import menuList from './menu.json';
import storage from './storage';

console.log(menuList);

const galleryElement = document.querySelector('.gallery');

const createGallery = () => {
  return menuList.map(elem => {
    return `<li class="menu__item">
    <article class="card">

        <img src="${elem.image}" alt="${elem.name}" class="card__image" />
        
        <div class="card__content">
            <h2 class="card__name">${elem.name}</h2>
            <p class="card__price">
                <i class="material-icons"> monetization_on </i>
                ${elem.price} кредитів
            </p>

            <p class="card__descr">
						${elem.description}
            </p>

            <ul class="tag-list">
					${elem.ingredients
            .map(item => {
              return `<li class="tag-list__item">${item}</li>`;
            })
            .join('')}
            </ul>
        </div>

        <button class="card__button button">
            <i class="material-icons button__icon"> shopping_cart </i>
            В корзину
        </button>

    </article>
</li>`;
  });
};

galleryElement.innerHTML = createGallery().join('');

const toggleEl = document.querySelector('.theme-switch__toggle');
const MENU_STORAGE_KEY = 'menu-storage-key';

const onToggleChange = event => {
  const { checked } = event.target;
  document.body.className = checked ? 'dark-theme' : 'light-theme';
  storage.save(MENU_STORAGE_KEY, checked);
};

const initPage = () => {
  const savedCheck = storage.load(MENU_STORAGE_KEY);
  document.body.className = savedCheck ? 'dark-theme' : 'light-theme';
  toggleEl.checked = savedCheck ? true : false;
};

toggleEl.addEventListener('input', onToggleChange);
initPage();
