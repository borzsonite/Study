// Анализатор текста на JavaScript //

// Задача 1
// Дан textarea.Пусть в него вводится текст.Сделайте так, чтобы по потери фокуса под текстареа вывелось сообщение о том, сколько в этом тексте слов.
let textArea = document.getElementById('task-1');
textArea.onblur = wordsCount;
function wordsCount() {
    let arrOut = [];
    let arrIn = textArea.value.split(' ');
    for (let i = 0; i < arrIn.length; i++) {
        if (arrIn[i].trim() != '') arrOut.push(arrIn[i])
    }
    alert(arrOut.length + 'слов');
}