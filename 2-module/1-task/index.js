/**
 * Клонируем объект
 * @param {Object} obj - клонируем объект
 * @returns {Object}
 */
function clone (obj) {
let clones={};

function clone (obj){
      
    for (let key in obj){
        clones[key] = obj[key];
    }
    return clones;
} 
}