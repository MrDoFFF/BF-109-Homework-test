let num = 10;
if (num > 0 ) {
    console.log('${num} is positive number');
} else if(num < 0){
    console.log('${num} is negative number');
}

let point = 30;
if  (point => 80 && point<= 100){
    console.log('${point} A')
}

if  (point => 70 && point<= 89){
    console.log('${point} B')
}

if  (point =>60 && point<= 69){
    console.log('${point} C')
}

if  (point => 50 && point<= 59){
    console.log('${point} D')
}

if  (point => 0 && point<= 49){
    console.log('${point} F')
}


// task1
let user = "Murad";
let userage = 70;
if (userage > 60 && userage < 125 ){
    console.log('${user} pensiye alacaq')
}
 else if(user.age >0 && userage < 60 ){
    console.log('${user} pensiye almir')
}
//  task2
let figur = "ucbucaq"
let teref1 = 3;
let teref2 = 5;
let teref3 = 7;
if (teref1 = teref2 = teref3) {
    console.log('${ucbucaq} beraberterefli')
} else if (teref1 != teref2 != teref3) {
    console.log('${ucbucaq} beraberterefli deyil')
}
//  task3
let month = 20;
switch (month) {
    case 1:
        console.log(`this month is january`);
        break;
    case 2:
        console.log(`this month is february`);
        break;
    case 3:
        console.log(`this month is march`);
        break;
    case 4:
        console.log(`this month is april`);
        break;
    case 5:
        console.log(`this month is may`);
        break;
    case 6:
        console.log(`this month is iyun`);
        break;
    case 7:
        console.log(`this month is iyul`);
        break;
    case 8:
        console.log(`this month is augst`);
        break;
    case 9:
        console.log(`this month is september`);
        break;
    case 10:
        console.log(`this month is october`);
        break;
    case 11:
        console.log(`this month is november`);
        break;
    case 12:
        console.log(`this month is december`);
        break;
    default:
        console.log(`${month} invalid month`);
        break;
}

// task5
let eded = 30;
if (eded % 3 == 0 && eded % 5 == 0) {
    console.log(`${eded} 3  ve 5-e bolunur`);

} else {
    console.log(`${eded} 3 ve 5-e bolunmur`)  ;
}

// task7
let eded1 = 5;
let eded2 = 4;
if(eded1 * eded2 > 0){
    console.log(`${eded1 * eded2} is positive`);
} else{
    console.log(`${eded1 * eded2} is neagetive`);
}

// task8
let number = 300;
if(number > 0 && number < 1000){
    console.log(`${number} true`);
}else{
    console.log(`${number} false`);
}

// task11
let age = 20;
if(age < 18){
    console.log(`${age} yeniyetme`);
} else if(age >18 && age < 64){
    console.log(`${age} yetkin`);
} else if(age > 64){
    console.log(`${age} yasli`);
}