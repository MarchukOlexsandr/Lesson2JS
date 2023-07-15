// if(5>30){
// console.log("Умова виконалась");
// }   


// if(5 > 30){
//     console.log("Умова виконалась");
//     }   
//     else{
//         console.log("Умова не виконалась");
//     }

const salary = 0;
if(salary < 0){
    console.log("Покупка скасована");
}   

else if(salary < 500){
    console.log("Товару не достатьньо");
}
else if(salary > 500){
    console.log("Тобі вистачить");
} 
else{
    console.log("Допобачення");
}
    
const balance = 2000;

const massage1 = balance >= 0 ? "Позитивний баланс" : "Негативний баланс";

console.log(massage1);