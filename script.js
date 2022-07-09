'use strict';
{
    const $btnA = document.getElementById('btn-a');
    const $btnB = document.getElementById('btn-b');
    const $contA =  document.getElementById('cont-a');
    const $contB =  document.getElementById('cont-b');

    $btnA.addEventListener('click' , () =>{
        $contA.classList.add('on');
    });

    $btnB.addEventListener('click' , () =>{
        $contB.classList.add('on');
    });

};

