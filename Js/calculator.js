let display=document.getElementsByClassName('value');

let calculator =Array.from(document.getElementsByClassName('num'));
calculator.map(num =>{
    num.addEventListener('click',(e) =>{
       switch (e.target.innerText) {
           case 'C':
               display.innerText='';
               break;
       
           default:
               display.innerText+=e.target.innerText;
               break;
       }

    })
})