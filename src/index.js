const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let sourceExpr = expr;

    const MORSE_TABLE_EXT = {};
    Object.keys(MORSE_TABLE).map(key => {
        let newKey = '';
        for (let i = 0; i < key.length; i++) {
            newKey += key[i] === '.' ? '10' : '11';
        }

        newKey = ('0000000000' + newKey).slice(-10);

        MORSE_TABLE_EXT[newKey] = MORSE_TABLE[key];
    });

    // Let's add morseCode for 'space' manually
    MORSE_TABLE_EXT['**********'] = ' ';

    const tmpHell = sourceExpr.slice(10);
    let decodedMessage = '';
    while (sourceExpr.slice(0, 10).length > 0) {
        const morseCode = sourceExpr.slice(0, 10);
        decodedMessage += MORSE_TABLE_EXT[morseCode];
        const tmpMessage = sourceExpr.slice(10);
        sourceExpr = tmpMessage;
    }

    return decodedMessage;
}

module.exports = {
    decode
}