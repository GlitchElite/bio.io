// Переключение языка
const languageButton = document.getElementById('languageButton');
const flagImage = document.getElementById('flagImage');
const greeting = document.getElementById('greeting');
const aboutMe = document.getElementById('aboutMe');
const projectsTitle = document.getElementById('projectsTitle');
const soonTitle = document.getElementById('soonTitle');
const soonDescription = document.getElementById('soonDescription');

let isRussian = false;

languageButton.addEventListener('click', () => {
    if (!isRussian) {
        // Переключение на русский язык
        greeting.textContent = 'Привет, я GlitchElite';
        aboutMe.innerHTML = `
            Имя: Николай<br>
            Никнейм: GlitchElite<br>
            Возраст: 17<br>
            Страна: Россия<br>
            Программирование — это хобби ❤️<br>
            Канал: @AndromedaProject
        `;
        projectsTitle.textContent = 'Мои поддерживаемые проекты'; // Изменяем заголовок меню
        soonTitle.textContent = 'Скоро'; // Изменяем заголовок "Soon"
        soonDescription.textContent = 'Этот раздел находится в разработке.'; // Изменяем описание "Soon"
        flagImage.src = 'assets/us-flag.png'; // Показываем американский флаг
        isRussian = true;
    } else {
        // Переключение на английский язык
        greeting.textContent = 'Hello, I\'m GlitchElite';
        aboutMe.innerHTML = `
            Name: Nikolay<br>
            Nickname: GlitchElite<br>
            Age: 17<br>
            Country: Russia<br>
            Programming is my hobby ❤️<br>
            Channel: @AndromedaProject
        `;
        projectsTitle.textContent = 'My Supported Projects'; // Возвращаем заголовок на английском
        soonTitle.textContent = 'Coming Soon'; // Возвращаем заголовок "Soon" на английском
        soonDescription.textContent = 'This section is under development.'; // Возвращаем описание "Soon" на английском
        flagImage.src = 'assets/ru-flag.jpg'; // Показываем российский флаг
        isRussian = false;
    }
});

// Открытие/закрытие меню
const menuButton = document.getElementById('menuButton');
const projectsMenu = document.getElementById('projectsMenu');

menuButton.addEventListener('click', () => {
    projectsMenu.classList.toggle('active'); // Показываем/скрываем меню
});

// Закрытие меню при клике вне его
document.addEventListener('click', (event) => {
    if (!projectsMenu.contains(event.target) && event.target !== menuButton) {
        projectsMenu.classList.remove('active');
    }
});

// Выезжающее меню GitHub Cloud (справа)
const githubCloudButton = document.getElementById('githubCloudButton');
const githubSoonMenu = document.getElementById('githubSoonMenu');

githubCloudButton.addEventListener('click', () => {
    githubSoonMenu.classList.toggle('active'); // Показываем/скрываем меню справа
});

// Закрытие меню GitHub Cloud при клике вне его
document.addEventListener('click', (event) => {
    if (!githubSoonMenu.contains(event.target) && event.target !== githubCloudButton) {
        githubSoonMenu.classList.remove('active');
    }
});