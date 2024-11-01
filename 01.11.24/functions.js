// 1. Toplama Funksiyası
// İki ədədin cəmini hesablayan bir funksiya yaradın.

// let num1= +prompt("ilk eded")
// let num2= +prompt("ikinci eded eded")

// function Sum(num1=0,num2=0){
//     let sum =num1+num2;
//     return sum
// }
// console.log(Sum(num1+num2))


// 2. İki Ədədin Maksimumu
// İki ədədin maksimumunu qaytaran bir funksiya yaradın. if-else istifadə edin.

// let num1 = +prompt(" birinci eded daxil et");
// let num2 = +prompt("ikinci eded daxil et");
// function max(num1,num2){
//     if(num1>num2){
//        res=(num1);
//     } else{ 
//          res=(num2)
// }
// return res
// }
// console.log(max(num1,num2));

// 3. 1-dən n-ə Qədər Cəmi
// 1-dən n-ə qədər olan ədədlərin cəmini qaytaran bir funksiya yaradın. for dongüsünü istifadə edin.

// let start = 1;
// let end = +prompt();
// function sum(start ,end){
//     let res=0
//     for (let i = start; i <= end; i++) {
//      res+=i
//     } 
//     return res
// }
// console.log(sum(start,end))

// 4. Tək və Cüt ədədlər
// Verilmiş bir ədədin tək və ya cüt olduğunu müəyyən edən bir funksiya yaradın.

// let number = +prompt("eded daxil et:");
// function compare (number){
//     let res = 0
//     if(number % 2=== 0){
//         res = "cut"
//     } else {
//         res = "tek"
//     }
//     return res
// }
// console.log(compare(number))

// 5. Faktorial Hesabı
// Verilmiş bir ədədin faktorialını hesablayan bir funksiya yaradın. for dongüsünü istifadə edin.

// let num = +prompt("eded daxil edin:");
// let f = 1;
// function faktorial(num){
//    let res = 1;
//     for (let i = 1;i <=num;i++) {
//         res *= i;
//     }
//     return res
// }
// console.log(faktorial(num))

// 6. Nömrələrin Tersinə
// Bir ədədin tərsini qaytaran bir funksiya yaradın (məsələn, 123 -> 321).

// let num = +prompt ("eded daxil et:")
// function reverse(num){
//     let res =0;
//     for (let i = 0; i <=num; i++) {
//        res 

//     }
// }

// 7.
//  N-ə Qədər Cüt ədədlər
// 1-dən n-ə qədər olan cüt ədədləri çap edən bir funksiya yaradın.

// let num3 = +prompt("eded daxil et:")
// function cemsum (num3){
//     let res =0;
//     for (let i = 0; i <=num3; i++) {
//         res += i;
//     }
//     return res;
// }

// console.log(cemsum(num3))

// 8. FizzBuzz
// 1-dən 100-ə qədər olan ədədlər üçün FizzBuzz problemi: 3-ə bölünəndə "Fizz", 5-ə bölünəndə "Buzz", hər ikisinə bölünəndə "F izzBuzz" yazın.

// let n = 1000;
// function FizzBuzz(n) {
//     for (let i = 0; i <= n; i++) {
//         if (i % 15 === 0) {
//             console.log("FizzBuzz");
//         } else if (i % 3 === 0) {
//             console.log("Fizz");
//         } else if (i % 5 === 0) {
//             console.log("Buzz");
//         }
//     }
// }

// 9. Polindrom Yoxlanması
// Verilmiş bir sözün polindrom olub olmadığını yoxlayan bir funksiya yaradın.


// 10. 1-dən n-ə Qədər ədədlərin Kvadratı
// 1-dən n-ə qədər olan ədədlərin kvadratlarını çap edən bir funksiya yaradın.

// let n = 100;
// function calc(n){
//     for (let i = 1; i <=n; i++){
//         console.log(i**2)       
//     }
// }
// calc(n)

// 11. İki Dəfə Yoxlanma
// Verilmiş bir ədədin 2, 3 və 5-ə bölünüb-bölünmədiyini yoxlayan bir funksiya yaradın.

// let x = +prompt("eded yaz:");
// function calc(x){
//     let res = 1;
//     if(x % 30 ===0){
//        res = "true"
//     } else{
//         res = "false"
//     }
//     return res
// }
// console.log(calc(x));

// 12. Array-in Cəmi
// Bir array içindəki ədədlərin cəmini hesablayan bir funksiya yaradın.

// let arr1 = [5,6,7];

// function sum(arr1){
//     let res = 0;
//     for (let i = 0; i<arr1.length; i++) {
//         res += arr1[i];
//     }
//     return res
// }
// console.log(sum(arr1))

// 14. Tələbə Qiymətləri
// Tələbələrin qiymətlərini qəbul edən və 60-dan yuxarı olan tələbələri "keçdi", 60-dan aşağı olanları "qaldı" bir funksiya yaradın.

// let point = +prompt("qiymetinizi daxil edi:");
// function qiymet(point){
//     let res =0;
//     if(point > 60){
//         res = "halaldi sene"
//     } else{
//         res = "das basuva"
//     }
//     return res
// }
// console.log(qiymet(point));