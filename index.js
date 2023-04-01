/*
Задача 1
Нажатие на кновку "SHOW ME" должно выводить значение с поля ввода (смотрите на элементы в html-разметке)
*/
// const btnRef = document.querySelector('#alertButton')
// const inputRef = document.querySelector('#alertInput')
// btnRef.addEventListener('click', onClick)
// function onClick(event) {
//     const message = inputRef.value
//     alert(message)
// }
// ===================================================
// ===================================================

/*
Задача 2
По нажатию на кнопку "SWAP ME" осуществляется обмен содержимым между двумя инпутами. 
можете понажимать на нее несколько раз или вручную сменить содержимое инпутов.
// */
// const btnEl = document.querySelector('#swapButton')
// const leftInput = document.querySelector('#leftSwapInput')
// const rightInput = document.querySelector('#rightSwapInput')
// btnEl.addEventListener('click', onClick)
// function onClick(e) {
//     const banka = leftInput.value
//     leftInput.value = rightInput.value
//     rightInput.value = banka
// }
// ===================================================
// ===================================================

/*
Задача 3
Кнопка "Скрыть" прячет текст и заменяет название кнопки на
"Раскрыть", при повторном нажатии текст снова становится доступен
и кнопка принимает начальный вид.
*/
// const btn = document.querySelector('#passwordButton')
// const input = document.querySelector('#passwordInput')
// btn.addEventListener('click', onClick)

// function onClick() {
//     if (input.type === 'text') {
//         input.type = 'password'
//         btn.textContent = 'Раскрыть'
//     } else {
//         input.type = 'text'
//         btn.textContent = 'Скрыть'
//     }
// }

// ===================================================
// ===================================================

/*
Задача 4
Кнопка "Уменьшить" делает квадрат меньше на 10 пикселей, кпопка "Увеличить" - больше на 10 пикселей.
*/

// const firstBtn = document.querySelector('#decrease');
// const secondBtn = document.querySelector('#increase');
// const box = document.querySelector('#box');


// firstBtn.addEventListener('click', firstClick);
// secondBtn.addEventListener('click', seconClick);

// function firstClick() {
//     const widthBox = box.offsetWidth;
//     box.style.width = `${widthBox - 10}px `
//     box.style.height = `${widthBox - 10}px`
// }
// function seconClick() {
//     const widthBox = box.offsetWidth;
//     box.style.width = `${widthBox + 10}px `
//     box.style.height = `${widthBox + 10}px`
// }
// ===================================================
// ===================================================

/*
Задача 5
Навесьте слушатель по клику и определите, когда клик происходит
внутри элемента с id "place" и когда клик приходится вне зоны элемента
https://developer.mozilla.org/en-US/docs/Web/API/Node/contains
*/

// const place = document.getElementById('place');
// document.addEventListener('click', onClick);

// function onClick(evt){
//     // if(evt.target === place){
//     //     console.log("Bingo!")
//     // } else {
//     //     console.log("Fiasco!")
//     // }
// if(place.contains(evt.target)){
//     console.log("Bingo!")
//     } else {
//         console.log("Fiasco!")
//     }
// }



// ===================================================
// ===================================================

/*
Задача 6
По клику на кнопку "Удвоить" увеличить значение
в каждом элементе списка в 2 раза
*/

// const li = document.querySelectorAll('ul .listItem');
// const btn = document.querySelector('#double');


// btn.addEventListener('click', doblePower);

// function doblePower () {

//     for (let index = 0; index < li.length; index += 1) {
//         li[index].textContent *= 2; 
//     }
//     // _________________________або

//     li.forEach(element => {

//         element.textContent *= 2;        
//     });
// }

// ===================================================
// ===================================================

/*
Задача 7
При клике на круг он должен следовать за курсором.
При повторном клике он становится в начальное положение.
https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/MouseEvent
https://developer.mozilla.org/ru/docs/Web/API/MouseEvent/pageX
https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/pageY
*/

// ===================================================
// ===================================================

/*
Задача 8
При клике на каждую из кнопок суммируются значения с data-атрибутов.
По нажатию на кнопку "Вывести результат" выводится сумма значения, а также статистика с
информацией о том, какая кнопка была нажата сколько раз.
*/

// ===================================================
// ===================================================

/*
Задача 9
Удали из списка те элементы, которые отмечены.
*/

// ===================================================
// ===================================================

/*
Задача 10
Дан список людей. Сделай возможность сортировки списка по имени и по фамилии.
*/

// ===================================================
// ===================================================

/*
Задача 11
Дан список людей. Сделай фильтр по имени/фамилии.
*/

// ===================================================
// ===================================================

/*
Задача 12
Клик по кнопке заменяет символ с первого поля ввода 
на символ со второго поля ввода во всем тексте.
Если одно из полей пустое, вызывай alert с просьбой заполнить их.
*/

// ===================================================
// ===================================================

/*
Задача 13
Круг должен изчезать при наведении на него.
При этом позиция соседних кругов должна оставаться прежней.
*/
