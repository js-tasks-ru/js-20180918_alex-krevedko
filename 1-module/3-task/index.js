'use strict';

/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */

function getMinMax(string) {

    let minMax = [];
    let spt = string.split(" ");

    for (i = 0; i < spt.length; i++) {
        let psf = parseFloat(spt[i]);

        if (!isNaN(psf)) {
            sss.push(psf);
        }

    }
    return [Math.min.apply(Math, minMax), Math.max.apply(Math, minMax)];
}
