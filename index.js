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
// const innerCircle = document.querySelector('.innerCircle');

// innerCircle.addEventListener('click', onClick)
// function onClick(e){
//   const position = innerCircle.style.position;
//   if(position === "absolute") {
//     innerCircle.style.position = "static";
//     innerCircle.style.transform = "translate(0)"
//     document.removeEventListener("mousemove", onMousmove)
//   } else{
//     innerCircle.style.position = "absolute"
//     innerCircle.style.transform = "translate(-50%, -50%)"
//     document.addEventListener("mousemove", onMousmove)
//   }

// }
// function onMousmove(evt){
//   const left = evt.pageX;
//   const top = evt.pageY;
//   innerCircle.style.top = `${top}px`;
//   innerCircle.style.left = `${left}px`;
// }

// ===================================================
// ===================================================

/*
Задача 8
При клике на каждую из кнопок суммируются значения с data-атрибутов.
По нажатию на кнопку "Вывести результат" выводится сумма значения, а также статистика с
информацией о том, какая кнопка была нажата сколько раз.
*/
// const clickObj = {
//     firstbtn: 0,
//     secondbtn: 0,
//     thirdbtn: 0,
//     fourthbtn: 0,
//     fifthbtn: 0,
//     sixthbtn: 0,
// }
// const statListRef = document.querySelector('.statList')
// const resultBtn = document.querySelector('#resultButton')
// const resultSection = document.querySelector('#resultSection')
// resultSection.style.backgroundColor = 'red'
// resultSection.style.display = 'inline'
// resultSection.style.color = 'white' // Инлайн стили для только для декора
// resultSection.style.fontSize = '24px'
// let initalValue = 0

// statListRef.addEventListener('click', onIncreaseClick)
// resultBtn.addEventListener('click', onResultClick)

// function onIncreaseClick(e) {
//     const addValue = Number(e.target.dataset.number)

//     initalValue += addValue
//     console.log(initalValue) // Проверка поточного числа

//     if (addValue === 5) {
//         clickObj.firstbtn += 1
//     } else if (addValue === 2) {
//         clickObj.secondbtn += 1
//     } else if (addValue === 10) {
//         clickObj.thirdbtn += 1
//     } else if (addValue === 50) {
//         clickObj.fourthbtn += 1
//     } else if (addValue === 0) {
//         clickObj.fifthbtn += 1
//     } else {
//         clickObj.sixthbtn += 1
//     }

//     console.log(clickObj)
// }
// function onResultClick() {
//     resultSection.textContent = initalValue
// }

// ===================================================
// ===================================================

/*
Задача 9 
Удали из списка те элементы, которые отмечены.
*/
// const mainDivRef = document.querySelector('.checkboxList')
// const filterBtnRef = document.querySelector('button[type="submit"]')

// const onInput = (e) => {
//     if (e.target.nodeName !== 'INPUT') {
//         return
//     }
//     if (e.target.checked) {
//         const nearestDiv = e.target.closest('div')
//         const onFilter = (e) => {
//             e.preventDefault()
//             nearestDiv.style.display = 'none'
//         }
//         filterBtnRef.addEventListener('click', onFilter)
//     }
// }

// mainDivRef.addEventListener('click', onInput)

// ===================================================
// ===================================================

/*
Задача 10  !!!НЕ РЕШЕНА!!!
Дан список людей. Сделай возможность сортировки списка по имени и по фамилии.
*/
const li = document.querySelectorAll('.person')
const sortByNameBtn = document.querySelectorAll('#sortByNameButton')
const sortBySurnameBtn = document.querySelectorAll('#sortByLastNameButton')

// const onNamesClick = (e) => {
//     const allNamesAndSurnames = [...li];

// }

console.log(li.textContent)

const onNamesClick = () => {
    const allNamesAndSurnames = [...li.textContent]
    let res = allNamesAndSurnames.slice().sort((a, b) => {
        let [aNames, aSurname] = a.match(/(.*)\s(\w+)$/).slice(1)
        let [bNames, bSurname] = b.match(/(.*)\s(\w+)$/).slice(1)

        if (aSurname.localeCompare(bSurname))
            return aSurname.localeCompare(bSurname)
        else return aNames.localeCompare(bNames)
    })
}

// sortByNameBtn.addEventlistener('click', onNamesClick)
// sortBySurnameBtn.addEventlistener('click', onSurnameClick)
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
