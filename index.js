// # Задание 1
// Создайте калькулятор, который считает стоимость ремонта комнаты.
//  Для подсчета площади комнаты необходимо использовать длину и ширину комнаты, которые пользователь вводит с клавиатуры. 
// Пользователю предоставляется три вида ремонта:
// 1. минимальный 7 000 за метр квадратный.
// 2. средний 10 000 за метр квадратный.
// 3. максимальный 15 000 за метр квадратный.

function calculateRepair(){
    let width = Number(prompt('Введите ширину комнаты'));
    let lenght = Number(prompt('Введите длину комнаты'));
    
    console.log(`Выберите вариант ремонта:  
    1. минимальный 7 000 за метр квадратный.
    2. средний 10 000 за метр квадратный.
    3. максимальный 15 000 за метр квадратный.`)
    
    let userOption = prompt('Введите номер варианта')
    
    
    switch (userOption) {
        case '1':
            console.log('Стоимость ремонта комнаты составит ' + ((width * lenght) * 7000) + ' рублей')
            break;
    
        case '2': 
            console.log('Стоимость ремонта комнаты составит ' + ((width * lenght) * 10000) + ' рублей')
            break;
        
        case '3': 
            console.log('Стоимость ремонта комнаты составит ' + ((width * lenght) * 15000) + ' рублей')
            break;
            
        default:
            break;
    }
}

// # Задание 2
// Создайте массив, состоящий из 4 произвольных значений, которые генерируются программой 
// (диапазон значений от 1 до 10). 
// Умножьте первый элемент массива на второй, а третий элемент на четвертый. 
// Результаты этих двух операций сложите. Выведите на экран данный массив и полученный результат.

function randomArray(){
    let array = [];

    for (let i = 0; i < 4; i++) {
        array[i] = Math.floor(Math.random() * (10 - 1 + 1)) + 1; 
        console.log(array[i]);
    }
    const result = ((arr[0]*arr[1])+(arr[2]*arr[3]))

    console.log(array);
    console.log(result);
}


// # Задание 3
// Дано четырехзначное число. Найдите сумму цифр этого числа.

function splitNumber(){
    let number = 1234;
    let array = (""+number).split("").map(Number)
    console.log(array);
}

// # Задание 5
// Дан массив `[1, 2, 3, 4, 5, 6, 7]` 
// Сделайте из этого массива следующий `[1, 2, 3, 6, 7]`

function cuttedArray(){
    let arr = [1, 2, 3, 4, 5, 6, 7];

    arr.splice(3,2)

    console.log(arr);
}   


// # Задание 6
// Дана строка `‘hello’` . 
// Преобразуйте первые 2 буквы в верхний регистр, чтобы получилось `‘HEllo’`

function helloUppercase(){
    let str = 'hello'
    str.slice(0,2).toUpperCase() + str.slice(2).toLowerCase()
    console.log(str);
}

// # Задание 7
// Создайте программу, которая спрашивает у пользователя число от 1 до 20. 
// Результатом работы должен быть массив, содержащий только четные значения до введённого. 
// Например, пользователь вводит 5, результат работы программы [2, 4].

function evenArray(){
    let userNum = Number(prompt('Enter your number'));
    let arr = []
    for (let i = 0; i < userNum; i++) {
        if(i % 2 === 0){
            arr[i] = i;
        }
    }
    console.log(arr);
}

// # Задание 8
// Генерация пароля. 
// Дан набор цифр и букв `let data ="abcdefghijklmnopqrstuvwxyz0123456789"` 
// Создайте программу, которая предлагает пользователю 8 произвольных значений из набора данных. 
// Буквы могут быть как строчными, так и заглавными.

function randomizePassword(len=8, chars='abcdefghijklmnopqrstuvwxyz0123456789') {
    let password = '';
    while (len--) password += chars[Math.floor(Math.random() * chars.length)];
    return password;
}

// # Задание 9
// Создайте калькулятор, который будет считать площадь треугольника по трём сторонам.
function areaOfTriangle(a,b,c){
    a = Number(prompt('Enter first side'));
    b = Number(prompt('Enter second side'));
    c = Number(prompt('Enter last side'));

    let p = (a+b+c)/2

    let S =  Math.sqrt(p*(p-a)(p-b)(p-c));

    console.log(S);
}

// # Задание 10
// Создайте игру “Загадки”.  Пользователю предоставляется текст загадки:
// — Если он вводит ответ неверно, предоставить ему еще 2 попытки. 
// — Поздравить пользователя при верном ответе. 
// — Если попытки закончились, а загадка не разгадана, сообщить о проигрыше.

function mystery(){
    let userAnswer;
    let answer = 'Восьмеричной'
    let lives = 3
    let win = false

    while(win === false){
        lives--;
        userAnswer = prompt('Если бы осьминоги умели считать, то какой бы системой они скорее всего пользовались?')
        
        if(userAnswer.toLocaleLowerCase() === answer.toLocaleLowerCase()){
            alert('Вы угадали')
            win = true;
            
        }
        
        else{
            alert(`У вас осталось ${lives} попыток. 
            `)
        }

        if(lives===0){
            alert('Вы проиграли. Чтобы сыграть снова перезагрузите страницу')
        }
    }
    
}