let value;

const programmer = {
    name : "Mehmet Ahmet Murat",
    age : 25,
    email : "aaa.bbb",
    langs : ["Python","Java","Javascript"],

    address : {
        city : "Ankara",
        street : "Bahçelievler"
    },

    work : function(){
        console.log("Programcı Çalışıyor...");
    }
}

value = programmer;

value = programmer.email; //Genel Olarak
value = programmer["email"];


value = programmer.langs;

value = programmer.address.city;

programmer.work();

const programmers = [
    {name: "Mehmet Ahmet",age:25},
    {name: "Murat",age:25},
];

value = programmers[1].name;

console.log(value);