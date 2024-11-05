// let milks=[
//     {
//         id:1
//         name:"Azersud",
//         price:5,
//         FatPercent:1.5
//         MadeIn:"Azerbaijan"
//     },
//       {
//         id:2
//         name:"Palsud",
//         price:4,
//         FatPercent:2
//         MadeIn:"Azerbaijan"
//     },
//       {
//         id:3
//         name:"Atena",
//         price:2,
//         FatPercent:3
//         MadeIn:"Georgia"
//     }
// ]


// TASK 1.1 : Məhsulların hər birini consoleda göstərin.
// TASK 1.2: Məhsullardan id-si 1-ə bərabər olan məhsulu qaytaran funksiya yazın.
// TASK 1.3: FatPercent-in ədədi ortasını çıxarın. Bunu FatAverage adlı funksiya ilə edin. Funksiya həmin arrayi parametr kimi qəbul edəcək, ədədi ortanı qaytaracaq.
// Task 1.4: yağlılıq faizi 3-dən yuxarı olan milk-ləri arraydə göstərin. Funksiya yazın.
// Task 1.5: Funksiya yazın array və bir number qəbul etsin. Arraydəki elementlərin price-nı bu number qədər artırsın.
// Task 1.6: Ümumi price-ı qaytaran funksiya yazın.
// Task 1.7: Məhsullardan id-si 2-ə bərabər olan məhsulu qaytaran funksiya yazın.
// Task 1.8: ən baha milkin adını qaytaran funksiya yazın. Arrayi parametr kimi qəbul etsin
// Task 1.9 : ən baha və ən ucuz arasındakı fərqi qaytaran funksiya yazın. Funksiya yazın.
// Task 1.10: Məhsullar içərisində Azərbaycan istehsalı olan məhsul varmı?(true or false)

// Qeyd: Funksiyaları yazarkən, array iteration methodlarından istifadə edin.


let milks=[
    {
        id:1,
        name:"Azersud",
        price:5,
        FatPercent:1.5,
        MadeIn:"Azerbaijan"
    },
      {
        id:2,
        name:"Palsud",
        price:4,
        FatPercent:2,
        MadeIn:"Azerbaijan"
    },
      {
        id:3,
        name:"Atena",
        price:2,
        FatPercent:3,
        MadeIn:"Georgia"
    }
   
]

// TASK 1.1 


// milks.forEach ((element, array, index) => {
//     console.log(element);
// })


// TASK 1.2


// let filtered = milks.filter((milks, index, array) => milks.id < 2);
// console.log(filtered)


// TASK 1.3

// function FatAverage(items){
//     let sumfat = items.reduce((sum,item) => sum + item.FatPercent, 0);
//     let average = sumfat / items.length;
//     return average.toFixed(2) ;
// }
// let averageFat = FatAverage(milks)
// console.log(averageFat);

// TASK 1.4

// let filtered = milks.filter((milks, FatPercent)=> milks.FatPercent > 2)
// console.log(filtered);

// TASK 1.5

// function prices(items, price) {
//     items.forEach(item => {
//         item.pricess += price
//     });
// }

// TASK 1.6

// function calculateTotalPrice(milks){
//     let total = 0
//     milks.reduce((milk,price) => {
//         total +milk.price, 0
//     });
// }