
const passfunc = (string, func) => func(string);

let firstExp = passfunc(
    "supercalifragilisticexpialidocious",
    string => string.replace(/c/g, '*c').split('*')
)

console.log(firstExp)


let secondExp = passfunc(
    "supercalifragilisticexpialidocious",
    string => {
        const modifiedString = string.replace(/a/g, 'A');
        const numberReplaced = (modifiedString.match(/A/g)||[]).length;
        const length = modifiedString.length;
        stringObj = {
            originalString: string,
            modifiedString: modifiedString,
            numberReplaced: numberReplaced,
            length: length,
        }
        return stringObj
    }
)

console.log(secondExp)
