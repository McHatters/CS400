const evaluate = string => {
    const elems = string.split('');
    const exp = elems[1];
    switch (exp) {
        case '+':
            return (string) => parseInt(string.split('')[0]) + parseInt(string.split('')[2]);
            break;
        case '-':
            return (string) => parseInt(string.split('')[0]) - parseInt(string.split('')[2]);
            break;
        case '/':
            return (string) => parseInt(string.split('')[0]) / parseInt(string.split('')[2]);
            break;
        case '*':
            return (string) => parseInt(string.split('')[0]) * parseInt(string.split('')[2]);
            break;
        case '%':
            return (string) => parseInt(string.split('')[0]) % parseInt(string.split('')[2]);
            break;
    }

}
const expressions = ['4+2','5*7','6-1','9/2','8%3'];
for (const expression of expressions) {
    let operator = evaluate(expression);
    console.log(`${expression} = ${operator(expression)}`);
}