// TASK 1


// Bir funksiya yazın. İki parametr qəbul etsin. Biri cümlə digəri isə o cümlə içərisindəki söz olsun. Sizin funksiyanız həmin sözün indeksini tapsın.

// function indeksiTap(sentence , word) {
//     const words = sentence.split(" ")
//     const indeks = words.indexOf(word)
//     return indeks;
// }
// const sentence = "salam men murad";
// const word1 ="murad";
// const word2 = "javascript";
// console.log(indeksiTap(sentence, word1));
// console.log(indeksiTap(sentence, word2)); 


// TASK 2

// Daxil edilən cümlədə ən uzun sözü tapın.
// sentenceCapitalization("Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, dolores.")

function enuzunsoz (sentence) {
    const words = sentence.split(" ");
    let uzunsoz = "";
    for (let i = 0; i < words.length; i++) {
        if(words[i].length > uzunsoz.length){
        uzunsoz = words [i];
        }
    }
    return uzunsoz
}
const sentence ="real madrid is the big club";
console.log(enuzunsoz(sentence))
