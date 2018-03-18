
const animals = [
    {
        "name": "hedgehog",
        "size": "small",
        "weight": 500
    },
    {
        "name": "meercat",
        "size": "small",
        "weight": 730
    },
    {
        "name": "capricorn",
        "size": "medium",
        "weight": 1000
    },
    {
        "name": "mammoth",
        "size": "big",
        "weight": 8000
    }
];

//q1. having name of animals
let animalNames = [];


for (let i in animals) {
    animalNames.push(animals[i].name);
};
console.log(animalNames);
////////////////////////////////////
//q2.
let mapArr = [];
animals.map((names) => {
    mapArr.push(names.name)
});
console.log("name of animals with map = " + mapArr);
/////////////////////////////////////
//q3.
let smallAnimals = [];
for (let i in animals) {
    if (animals[i].size === "small") {
        smallAnimals.push(animals[i].name)
    }
};
console.log("small animals are " + smallAnimals)
//////////////////////////////////////
//q4.
let smallAnimalsFilter = animals.filter(small => small.size === "small");

console.log(smallAnimalsFilter);

;


////////////////////////////////////
//bonus
function addBinary(a, b) {
    var i = a.length - 1;
    var j = b.length - 1;
    var carry = 0;
    var result = "";
    while (i >= 0 || j >= 0) {
        var m = i < 0 ? 0 : a[i] | 0;
        var n = j < 0 ? 0 : b[j] | 0;
        carry += m + n; // sum of two digits
        result = carry % 2 + result; // string concat
        carry = carry / 2 | 0; // remove decimals,  1 / 2 = 0.5, only get 0
        i--;
        j--;
    }
    if (carry !== 0) {
        result = carry + result;
    }
    return result;
};

addBinary("0101110", "11100001");
