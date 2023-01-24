"use strict";

window.addEventListener('DOMContentLoaded', () => {

    const tabs = document.querySelectorAll('.tabheader__item');
    const tabsContent = document.querySelectorAll('.tabcontent');
    const tabsParent = document.querySelector('.tabheader__items');

    function hideTabContent() {//Скрывает ненужные элементы на странице
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });//Убираю классы анимации

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });//Убираем класс активности при переключении
    }

    function showTabContent(i = 0) {//если функция вызывается без аргумента, то по умолчанию будет 0
        tabsContent[i].classList.add('show', 'fade');//Добавляю классы анимации
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }//Добавляем класс активности при переключении

    hideTabContent();//Вызываем функцию
    showTabContent();//Показываем функцию

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {//перебор менюшки
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
});





