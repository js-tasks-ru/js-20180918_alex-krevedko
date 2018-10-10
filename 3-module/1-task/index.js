/**
 * showSalary
 * @param {Array} data - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
let data = [
    {
        "balance": "$1,825.65",
        "picture": "http://placehold.it/32x32",
        "age": 21,
        "name": "Golden Branch",
        "gender": "male",
        "greeting": "Hello, Golden Branch! You have 7 unread messages.",
        "favoriteFruit": "banana"
}

];


function showSalary(data, age) {

    let result = [];
    for (users in data) {
        if ((data[users].age) <= age) {
            result.push(data[users].name + ', ' + data[users].balance);
        };
    };
    return result;

};

console.log(showSalary(data, 21));
