/**
 * Клонируем объект
 * @param {Object} obj - клонируем объект
 * @returns {Object}
 */

function clone (obj){
    var clones = {};
      
    for (let key in obj){
        clones[key] = obj[key];
    }
    return clones;
}; 
