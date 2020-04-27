
const numbersMapper = {
    '0': '۰',
    '1': '١',
    '2': '٢',
    '3': '٣',
    '4': '٤',
    '5': '٥',
    '6': '٦',
    '7': '٧',
    '8': '٨',
    '9': '٩',
}


export function convertArabicToHindiNumbers(arabicNumber) {
    let numberAsString = String(arabicNumber);

    return numberAsString
        .split('')
        .map(letter => numbersMapper[letter])
        .join('');
}



