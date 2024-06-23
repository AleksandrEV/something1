let gmiyk = document.querySelector('.rr');
gmiyk.addEventListener('click', function aler() {
    alert('Кнопка нажата!')
} );

let exeBB= document.querySelector('.exeBB');

let examRight = document.getElementById('exam1');
exeBB.addEventListener('click', function aler2 (){
    if (examRight.checked) {
        alert('Ответ верный!')
    } else {
        alert('Ответ неверный!')
    }
});
