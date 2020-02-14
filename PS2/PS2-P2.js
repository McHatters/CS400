function* readalong(str) {
    let words = str.split(" ")
    while(true) {
        yield* words
    }
}

const reader = readalong("All I know is something like a bird within her sang");
let count = 11;
while (count --> 0) {
    console.log(reader.next().value)
}

