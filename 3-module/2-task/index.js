let calendar = {
    from: new Date('2018-01-01T15:09:10Z'), //
    to: new Date('2018-02-01T10:09:10Z') //
}

calendar[Symbol.iterator] = function () {

    let current = Math.ceil(this.from.getTime()) / (1000 * 3600 * 24);
    let last = Math.ceil(this.to.getTime()) / (1000 * 3600 * 24);

    return {
        next() {
            if (current <= last) {
                return {
                    done: false,
                    value: current++
                };
            } else {
                return {
                    done: true
                };
            }
        }

    }
};

for (let day of calendar) {
    let date = new Date(day * 1000 * 3600 * 24);
    if (date.getDay() == 0 || date.getDay() == 6) {
        console.log("[" + date.getUTCDate() + "]");
    } else {
        console.log(date.getUTCDate().toString());
    }

};
