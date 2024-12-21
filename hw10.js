//1  Напиши скрипт який при кліку на кнопку буде виводити на екран повідомлення “Hello World!”. Використовуй колбек в вигляді стрілки
function greatings() {
  const saveClick = confirm("confirm me")
  if (saveClick === true) {
      alert("Hello world!")
  } else {
    alert("try again")
  }
}
greatings()
//2 Створи програму, яка генерує випадкове число від 1 до 100. Користувач повинен вгадати число, введенням його в текстове поле. При кліку на кнопку "Перевірити" програма повинна повідомити користувача, чи є їх відповідь правильною.2
const randomNumber = Math.floor(Math.random() * 100)
console.log(randomNumber)
const personAnswer = Number(prompt("guess number from 1 to 100"))

function checkRightAnswer() {
    if (personAnswer === randomNumber) {
        alert("U won")
    } else {
        alert("Try again")
    }

}
checkRightAnswer()
//3 Створи програму, яка відображає повідомлення про те, скільки разів користувач клікнув на сторінці.
let res = 0;
function infinityClick() {
  while (true) {
    const plusClick = confirm("Click me");
    if (plusClick) {
      res++;
      console.log(`clicked ${res}`);
    } else {
      console.log("click me again");
      break;
    }
  }
}
infinityClick();
//4 Напиши функцію, яка приймає масив чисел і колбек-функцію. Функція повинна застосовувати колбек-функцію до кожного елементу масиву та повертати новий масив, що містить результати застосування колбек-функції до кожного елементу.
const arr = [2, 3, 4, 5];
function applyCallbackToEachElement(arr, callback) {
  let newArr = [] 
  for (let i = 0; i < arr.length; i++){
    newArr.push(callback(arr[i]))
  }
  return newArr
}

function squareCallback(arr) {
  return arr * arr
}

console.log(applyCallbackToEachElement(arr,squareCallback))


//5 Розрахунок дисконтної ціни Створіть функцію, яка розраховує дисконтну ціну на товар з урахуванням знижки. Функція повинна приймати вартість товару та відсоток знижки як аргументи. Використайте стрілкову функцію та колбек.

function calculateDiscountedPrice(price, discount, callback) {
  const calculation = (price / 100 * discount)
  const calculationSale = price - calculation
  return callback(calculationSale)
}

function showDiscountedPrice(calculationSale) {
  let returnMessege = `Your discount price ${calculationSale}`
  return returnMessege
}

console.log(calculateDiscountedPrice(100,10,showDiscountedPrice))