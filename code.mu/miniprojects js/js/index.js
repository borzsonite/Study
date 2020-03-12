// Анализатор текста на JavaScript //

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

function simbolsCount() {
    alert(textArea.value.length + ' символов');
}

function justSimbolsCount() {
    let arrOut = [];
    let arrIn = textArea.value.split(' ');
    for (let i = 0; i < arrIn.length; i++) {
        if (arrIn[i].trim() != '') arrOut.push(arrIn[i])
    }
    alert(arrOut.join('').length + ' символов без пробелов');
}
let obj = {};

function SimbolsPercentCount() {
    let arrOut = [];
    let arrIn = textArea.value.split(' ');
    for (let i = 0; i < arrIn.length; i++) {
        if (arrIn[i].trim() != '') arrOut.push(arrIn[i])
    }

    let finalString = arrIn.join('');
    let mySet = new Set(finalString);
    let count;


    for (let key of mySet) {
        count = 0;
        for (let j = 0; j < finalString.length; j++) {
            if (finalString[j] == key) {
                count++;
            }
        }
        obj[key] = count;
    }
}
let out;
for (let key in obj) {
    out += `${key}: ${obj[key]}% <br>`
}
alert(out);