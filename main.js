//Вивести на сторінку в один рядок через кому числа від 10 до 20.
let result = "";
for (let i = 10; i <= 20; i++) {
  if (i < 20) {
    result += i + ", ";
  } else {
    result += i;
  }
}
console.log(result);

//Вивести квадрати чисел від 10 до 20.
for (let i = 10; i <= 20; i++) {
    let square = i ** 2;
    console.log(square);
  }

  //Вивести таблицю множення на 7.
  for (let i = 1; i <= 10; i++) {
    let mult = i * 7;
    console.log(`7 * ${i} = ${mult}`);
  }

  //Знайти суму всіх цілих чисел від 1 до 15.
    let sum = 0;
    for (let i = 1; i <= 15; i++) {
    sum += i;
    }
    console.log(sum);

    //Знайти добуток усіх цілих чисел від 15 до 35.
    let product = 1;
    for (let i = 15; i <= 35; i++) {
      product *= i;
    }
    console.log(product);

//Знайти середнє арифметичне всіх цілих чисел від 1 до 500.
    let add = 0;
    for (let i = 1; i <= 500; i++) {
    add += i;
    }
    let average = add / 500;
    console.log(average);

    //Вивести суму лише парних чисел в діапазоні від 30 до 80.
    let sumEvenNumber = 0;
    for (let i = 30; i <= 80; i++) {
      if (i % 2 === 0) {
        sumEvenNumber += i;
      }
    }
    console.log(sumEvenNumber);

    //Вивести всі числа в діапазоні від 100 до 200 кратні 3.
    for (let i = 100; i <=200; i++) {
        if (i % 3 ===0) {
            console.log(i);
        }
    }

    //Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
    let number = 40; //або будь яке інше натуральне число
    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
          console.log(i);
        }
    }

    //Визначити кількість його парних дільників.
    let evenDivisors = 0;
    for (let i = 1; i <= number; i++) {
        if (number % i === 0 && i % 2 === 0) {
            evenDivisors++;
        }
    }
    console.log(evenDivisors);

    //Знайти суму його парних дільників.
    let sumEvenDivisors = 0;
    for (let i = 0; i <= number; i++) {
        if (number % i === 0 && i % 2 === 0) {
            sumEvenDivisors += i;
        }
    }
    console.log (sumEvenDivisors);

    //Надрукувати повну таблицю множення від 1 до 10.
    for (let firstNumber = 1; firstNumber<=10; firstNumber++) {
        for (let secondNumber = 1; secondNumber<=10; secondNumber++) {
            let productOfNumbers = firstNumber * secondNumber;
            console.log(`${firstNumber} * ${secondNumber} = ${productOfNumbers}`)
        }
    }


    

