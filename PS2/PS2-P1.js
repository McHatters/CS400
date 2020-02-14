function* fib1() {
    let [val1, val2, result] = [0,1,0]
    while (true) {
        yield result
        result = val1 + val2
        val1 = val2
        val2 = result
    }
}

function* fib2(x) {
    let gen = fib1();
    let count = 0;
    while (count != x) {
        let val = gen.next().value
        if (val % 2 == 0) {
            count++
            yield val
        }
    }
}

let [...sixnums] = fib2(6);
console.log(sixnums)


// testo = fib1();
// let [...fuck] = testo;
// console.log(fuck);
