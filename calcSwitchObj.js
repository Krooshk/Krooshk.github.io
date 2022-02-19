function calc(operation, number1, number2) {
    let operations = {
        'sum': (number1 + number2),
        'sub': (number1 - number2),
        'multi': (number1 * number2),
        'div': (number1 / number2),

    }
    if (isNaN(number1 || number2) || (operation, number1, number2 === undefined)) {
        console.log('Error');
    } else if (operation in operations) {
        return operations[operation];
    } else
        console.log('unknown operation');
}




let string = '0';
let operationInside = '';
let operationChar = '';
let a;
let b;
let search = document.querySelectorAll('.btn');

for (let searchelem of search) {
    searchelem.onclick = function() {

        // Clear the string

        if (searchelem.textContent === 'C') {
            calc_screen.innerHTML = '0';
            string = '0';
            console.log(string);

        } else if (searchelem.matches('.backspace')) {
            if (string.length > 1) {
                string = string.slice(0, (string.length - 1));
            } else string = '0';
            calc_screen.innerHTML = string;
        }
        //=
        else if (searchelem.matches('.equal')) {
            a = string.substring(0, string.indexOf(operationChar));
            b = string.substring((string.indexOf(operationChar) + 1), );
            console.log(operationChar);
            console.log(a);
            console.log(b);
            calc_screen.innerHTML = calc(operationInside, +a, +b)
        }
        // +
        else if (searchelem.matches('.' + 'sum')) {
            operationInside = 'sum';
            operationChar = '+';
            if (string.includes(("+") || ('–') || ('x') || ('÷'))) {

            } else {
                calc_screen.innerHTML += searchelem.textContent;
                string += searchelem.textContent;
                console.log(string);
            }
        }
        // -
        else if (searchelem.matches('.' + 'sub')) {
            operationInside = 'sub';
            operationChar = '–';
            if (string.includes(("+") || ('–') || ('×') || ('÷'))) {

            } else {
                console.log(string);
                calc_screen.innerHTML += searchelem.textContent;
                string += searchelem.textContent;
                console.log(string);
            }
        }
        //  div
        else if (searchelem.matches('.' + 'div')) {
            operationInside = 'div';
            operationChar = '÷';
            if (string.includes(("+") || ('–') || ('x') || ('÷'))) {

            } else {
                calc_screen.innerHTML += searchelem.textContent;
                string += searchelem.textContent;
                console.log(string);
            }
        }
        // multi
        else if (searchelem.matches('.' + 'multi')) {
            operationInside = 'multi';
            operationChar = '×';
            if (string.includes(("+") || ('–') || ('x') || ('÷'))) {

            } else {
                console.log(string)
                calc_screen.innerHTML += searchelem.textContent;
                string += searchelem.textContent;
                console.log(string);
            }
        }
        // numbers
        else if (searchelem.matches('.numbers')) {
            if (calc_screen.textContent === '0') {
                calc_screen.innerHTML = searchelem.textContent;
                string = searchelem.textContent;
            } else if (string.length < 7) {
                calc_screen.innerHTML += searchelem.textContent;
                string += searchelem.textContent;
                console.log(string.length)
            }
        }






        /*document.body.innerHTML*/

        /*console.log(calc('sum', 5, 7));*/
    }
}