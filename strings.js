const message = "In this length 23 sumbm"
console.log(message.length);

// length довжина рядка

// const firsName = "John"
// const lastName = "Doe"

// const fullName = firsName + " " + lastName 

// console.log(fullName);

// стакання рядків

// const room = 716
// const type = "VIP"
// const firsNam = "John"
// const lastNam = "Doe"

// const fullNam = room + " " + type + " " + firsNam +" " + lastNam

// console.log(fullNam);

// const result = `Гість ${firsName} ${lastName} Заселяється у номер ${room} категорії ${type}`

// console.log(result);

// const quantity = 15 
// console.log(`Викупили ${quantity} холодильників`);

// let userMassage = prompt("Напиши бренд")

// userMassage = userMassage.toLowerCase()
// userMassage = userMassage.toUpperCase()

// console.log(userMassage);


// const blacklistWord1 = "спам"
// const blacklistWord2 = "розпродаж"

// const string1 = "Я Арабский шейх, це спам, даю тобі мілон"  
// const string2 = "Найбільш великий РОЗПРОДАЖ цього тижня, не пропусти"
// const string3 = "Рекламна компанія Оріфлейм Розпродаж"

// console.log(string1.includes(blacklistWord1));
// console.log(string2.toLowerCase().includes(blacklistWord2));
// console.log(string3.toLowerCase().includes(blacklistWord2));

const school = "itStep"
let groupNumber = "Pront-End31"
const name = "Olexandr"
// let name = "Olexandr"

groupNumber = groupNumber.replace("P", "F")

// name = name.replace("Olexandr", "Олександр")

const result = `Мене звати ${name}, я навчаюсь в академії ${school}, в групі ${groupNumber}`
console.log(result);