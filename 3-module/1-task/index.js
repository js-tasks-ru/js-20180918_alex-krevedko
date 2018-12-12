/**
 * showSalary
 * @param {Array} data - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */

function showSalary(data, age) {

    let result = [];
    for (let users in data) {
        if ((data[users].age) <= age) {
            result.push(`${data[users].name}, ${data[users].balance}`);
        
		};
		
    };
    return result.join("\n");
};

