const spnText = document.querySelector('.text');
const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti sint possimus temporibus minus asperiores aliquam. KONIEC";
let indexText = 0;
const time = 40;
const addLetter = () => {
    spnText.textContent += text[indexText];
    indexText++;
    if (indexText === text.length) clearInterval(indexInterval);
}
const indexInterval = setInterval(addLetter, time);
