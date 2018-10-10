/**
 * Клонируем объект
 * @param {Object} obj - объект в котором ищем
 * @param {*} value - значение, которе ищем
 * @returns {Object}
 */
function find(obj, value) {}

let obj = {
    options: {
        color: 'red'
    },
    style: {
        border: {
            color: 'red'
        }
    }
}


function find(obj, value) {

    for (let key in obj) {
        let keys = obj[key];
        console.log(key.obj[key]);


    }

}

find(obj, 'red');
