let value;

const numbers = [59,56,37,23,22,35,5];

// const numbers2 = new Array(1,2,3,4,5,6,7);

const langs = ["Python","Java","C++","Javascript"];

const a = ["Maerhaba", 22,null,undefined,3.14];

//Uzunluk

value = numbers.length;

//İndeksleme
value = numbers[0];
value = numbers[2];
value = numbers[numbers.length-1];

// Herhangi Bir İndeksteki değeri değiştirme

numbers[2] = 1000;

// Index Of

value = numbers.indexOf(1000);

//Arrayin Sonuna Değer Ekleme -Push

numbers.push(2000);

//Arrayin Başına Değer Ekleme -unshift

numbers.unshift(3000);

//Sonundan Değer Atma

numbers.pop()

//Arrayin Başından Eleman Atma

numbers.shift()

//Belli bir Kısmını atma
numbers.splice(0,3);

//Reverse

numbers.reverse();

value = numbers.sort()


value = numbers.sort(function(x,y){ //Küçükten Büyüğe
return x-y;
});

value = numbers.sort(function(x,y){ //Büyükten Küçüğe
    return y-x;
    });

value = numbers;
console.log(value);
