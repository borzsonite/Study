////////////////////////////////////Анализатор текста на JavaScript////////////////////////////////////

// Задача 1
// Дан textarea.Пусть в него вводится текст.Сделайте так, чтобы по потери фокуса под текстареа вывелось сообщение о том, сколько в этом тексте слов.
let textArea = document.getElementById('task-1');
// textArea.onblur = wordsCount;
// textArea.onblur = simbolsCount;
// textArea.onblur = justSimbolsCount;
textArea.onblur = SimbolsPercentCount;


function wordsCount() {
    let arrOut = [];
    let arrIn = textArea.value.split(' ');
    for (let i = 0; i < arrIn.length; i++) {
        if (arrIn[i].trim() != '') arrOut.push(arrIn[i])
    }
    alert(arrOut.length + 'слов');
}


// Задача 2
// Модифицируйте предыдущую задачу так, чтобы также вывелось сообщение о том, сколько в тексте символов.
function simbolsCount() {
    alert(textArea.value.length + ' символов');
}

// Задача 3
// Модифицируйте предыдущую задачу так, чтобы также вывелось сообщение о том, сколько в тексте символов за вычетом пробелов.
function justSimbolsCount() {
    let arrOut = [];
    let arrIn = textArea.value.split(' ');
    for (let i = 0; i < arrIn.length; i++) {
        if (arrIn[i].trim() != '') arrOut.push(arrIn[i])
    }
    alert(arrOut.join('').length + ' символов без пробелов');
}


// Задача 4
// Модифицируйте предыдущую задачу так, чтобы также вывелось сообщение о процентном содержании каждого символа в тексте.
function SimbolsPercentCount() {
    let obj = {};
    let out = '';
    let arrOut = [];
    let count = 0;

    let arrIn = textArea.value.split(' ');
    for (let i = 0; i < arrIn.length; i++) {
        if (arrIn[i].trim() != '') arrOut.push(arrIn[i])
    }

    let finalString = arrIn.join('');
    let mySet = new Set(finalString);


    for (let key of mySet) {
        count = 0;
        for (let j = 0; j < finalString.length; j++) {
            if (finalString[j] == key) {
                count++;
            }
        }
        obj[key] = count;
    }

    for (let key in obj) {
        out += `${key} - ${Math.round(obj[key] * 100 / finalString.length)}%: `
    }
    alert(out);
}

////////////////////////////////////Транслит на JavaScript////////////////////////////////////
// Задача 1
// Пусть даны два textarea.Пусть в первый текстареа вводится текст на русском языке.Сделайте так, чтобы по потери фокуса этот текст преобразовался в транслит и вывелся во втором текстареа
let textAreaTask2 = document.getElementById('task-2-1');
let textAreaTask2_1 = document.getElementById('task-2-2');
let translit = {
    а: 'a',
    б: 'b',
    в: 'v',
    г: 'g',
    д: 'd',
    е: 'e',
    ё: 'yo', //
    ж: 'zh', //
    з: 'z',
    и: 'i',
    й: 'i',
    к: 'k',
    л: 'l',
    м: 'm',
    н: 'n',
    о: 'o',
    п: 'p',
    р: 'r',
    с: 's',
    т: 't',
    у: 'u',
    ф: 'f',
    х: 'h',
    ц: 'c',
    ч: 'ch',//
    ш: 'sh',//
    щ: 'sh',//
    ы: 'i',
    ъ: '`',
    ь: '`',
    э: 'je',//
    ю: 'yu',//
    я: 'ya',//
    А: 'A',
    Б: 'B',
    В: 'V',
    Г: 'G',
    Д: 'D',
    Е: 'E',
    Ё: 'YO',
    Е: 'ZH',
    Ж: 'ZH',
    З: 'H',
    И: 'I',
    Й: 'I',
    К: 'K',
    Л: 'L',
    М: 'M',
    Н: 'N',
    О: 'O',
    П: 'P',
    Р: 'R',
    С: 'S',
    Т: 'T',
    У: 'U',
    Ф: 'F',
    Х: 'H',
    Ц: 'C',
    Ч: 'CH',
    Ш: 'SH',
    Щ: 'SH',
    Ы: 'I',
    Ъ: '`',
    Ь: '`',
    Э: 'JE',
    Ю: 'YU',
    Я: 'YA',
}
textAreaTask2.onblur = translitTranslate;
function translitTranslate() {
    let outStr = '';
    let inStr = textAreaTask2.value;
    begin: for (let i = 0; i < inStr.length; i++) {
        for (let key in translit) {
            if (inStr[i] == key) {
                outStr += translit[key]
                continue begin;
            }
            else if (inStr[i] == ' ') {
                outStr += ' ';
                continue begin;
            }
        }
    }
    textAreaTask2_1.value = outStr;
}

textAreaTask2_1.addEventListener('blur', translateTranslit);

function translateTranslit() {
    console.log('work');

    ch a sh k a
}


