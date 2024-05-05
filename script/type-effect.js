


const intro = document.querySelector(".intro");
const myName = document.querySelector(".myName");
const content = 'Hi, I\'m';
const content2 = 'Paul👦🏻💻'

function typingEffect(element, text, i = 0) {
  element.innerHTML += text[i];
  if (i === text.length - 1) {
    return;
  }
  setTimeout(() => typingEffect(element, text, i + 1), 100)
}

typingEffect(intro, content);
setTimeout(() => typingEffect(myName, content2), 1000)


