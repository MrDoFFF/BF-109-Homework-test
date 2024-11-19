// TASK 1

// Product class
//  - Name
//  - Price

//  Milk : Product
//  - FatPercent
// Milk classı Product classından extend alsın və siz Milk class-ından istifadə edib 3 milk yaradın və onları bir array-ə yığıb FatPercent-in ədədi ortasını çıxarın.

// class Product {
//     constructor(name, price) {
//         this.name = name;
//         this.price = price;
//     }
// }




// class Milk extends Product {
//     constructor(name, fatPercent, price) {
//         super(name, price);
//         this.fatPercent = fatPercent;
//     }


// }
// const milk1 = new Milk("azersud", 1.5, 15);
// const milk2 = new Milk("milla", 3, 5);
// const milk3 = new Milk("atena", 2.5, 10);

// console.log(milk1, milk2, milk3);

// let milks = []
// milks.push(milk1, milk2, milk3);


// let total = milks.reduce((sum, milk) => sum + milk.fatPercent, 0);
// let average = (total / milks.length).toFixed(2);
// console.log(average);

// TASK 2

// Device class
// - Brand
// - Model
// - Screen size
// - Battery level
// - Price (maya dəyəri)
// -Sale Count
// - Sale Price (satış qiyməti) (satış qiyməti maya dəyərindən hər zaman daha böyük olmalıdır)
// - CalculateProfit() - bu method isə həmin device- ın satışından əldə edilən gəliri hesablayacaq.Əgər məhsul ziyana
// satılarsa o zaman nə qədər ziyan etdiyini göstrəcək.
// - DisplayBatteryLevel() - bu method isə device-ın hazırdakı battereyasını göstərəcək
// // - DisplayDetails() - bu mehtod isə device haqqında detalları yazacaq (screensize,model,brand,)
// Bir Phone class-ı yaradırsınız. Device class-ından miras alır və əlavə olaraq, isSmart deyeri var (true false deyerleri
//     olur)
//     Bir Laptop class-ı yaradırsınız. Device class-ından miras alır və əlavə olaraq, isRGBkeyboard deyeri var (true/false)

class Device {
    constructor(brand, model, screenSize, batteryLevel, price, saleCount) {
        this.brand = brand;
        this.model = model;
        this.screenSize = screenSize;
        this.batteryLevel = batteryLevel;
        this.price = price;
        this.saleCount = saleCount;
    }


    SalePrice() {
        return `telefonun qiymeti : ${this.price}`
    }


    CalculateProfit() {
        return `telefonun satis sayi : ${this.saleCount}`
    }


    DisplayBatteryLevel() {
        return `enerji keyfiyyeti : ${this.batteryLevel}`
    }

    DisplayDetails() {
        return `ekran olcusu : ${this.screenSize}`
    }

}

class Phone extends Device {
    constructor(brand, model, screenSize, batteryLevel, price, saleCount,isSmart) {
        super(brand, model, screenSize, batteryLevel, price, saleCount,isSmart)
        this.isSmart = isSmart;
    }
   
}

class Laptop extends Device {
    constructor(brand, model, screenSize, batteryLevel, price, saleCount,isRGBkeyboard) {
        super(brand, model, screenSize, batteryLevel, price, saleCount,isRGBkeyboard)
        this.isRGBkeyboard = isRGBkeyboard;
    }
}

let iphone= new Phone("apple","iphone 16 Pro Max","300px","90%",2000,100,6700,true)

console.log(iphone.DisplayBatteryLevel());
console.log(iphone.DisplayDetails());
console.log(iphone.SalePrice());
console.log(iphone.CalculateProfit());

let product = [];
let product1 = new Phone("samsug", "s23 ultra", "400px", "100%", 1500, 60, 3200,true)
let product2 = new Phone("xiomi", "redmi not 13", "300px", "90%", 700, 95, 950, true)
let product3 = new Laptop("apple", "apple v4", "1200px", "100%", 3400, 250, 5600,true)
let product4 = new Laptop("acer", "nitro V 15", "1000px", "100%", 2000, 350, 1700, true)
product.push(product1, product2, product3, product4);
console.log(product);


// Phone və Laptop class-larından istifadə edib bir neçə product yaradın və products array-inə yığın. Və global-da
// aşağıdakı
// function-ları yazın.
// 1. FilterbyPrice - parameter olaraq array və price deyerleri qebul edir. Gonderilmish array-də price-ı göndərilmiş
// price-dan yuxarı olan product-ların name-lərini qaytarın.
// 2. FilterbyName - parametr olaraq bir array və name deyerleri qebul edir və gonderilen name-e esasen hemin name-de olan
// product-ların sayını qaytarır. (Məsələn products array-i və "Iphone" gonderilerse name-i Iphone olanlarin sayini
// qaytarmalidir)
// 3. GetTotalProfit - parametr olaraq bir array qebul edir ve hemin array-deki product-larin umumi profitini (gelirini)
// qaytarir.



function FilterbyPrice(array, price) {
    return array.filter((product) => product.price > price);
}
console.log(FilterbyPrice(product , 1000));

